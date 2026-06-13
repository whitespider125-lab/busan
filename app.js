// App States
let map = null;
let markers = {};
let activeCategory = "all";
let activeDistrict = "all"; // 'all' or district ko name (e.g., '부산진구')
let currentTheme = localStorage.getItem("coffee_theme") || "dark";
let bookmarkedCafes = JSON.parse(localStorage.getItem("coffee_bookmarks")) || [];
let cuppingNotes = JSON.parse(localStorage.getItem("coffee_notes")) || {};
let activeCafeId = null;

// Sliders Filter States (Default: 1 - matches everything)
let filterAcidity = 1;
let filterNutty = 1;
let filterBody = 1;

document.addEventListener("DOMContentLoaded", () => {
    // 1. Setup theme
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon();

    // 2. Initialize Leaflet map
    initMap();

    // 3. Render Stats Widget in Sidebar
    renderStats();

    // 4. Render District Explorer selector
    renderDistrictSelector();

    // 5. Render Cafe markers and lists
    renderCafes();

    // 6. Setup event listeners
    setupEventListeners();
});

// Map Setup
function initMap() {
    const busanCenter = [35.138, 129.095];
    const initialZoom = 11;

    map = L.map("map", {
        zoomControl: true,
        attributionControl: false
    }).setView(busanCenter, initialZoom);

    loadMapTiles();
}

// Load appropriate theme tiles
function loadMapTiles() {
    map.eachLayer((layer) => {
        if (layer instanceof L.TileLayer) {
            map.removeLayer(layer);
        }
    });

    let tileUrl;
    if (currentTheme === "dark") {
        tileUrl = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
    } else {
        tileUrl = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
    }

    L.tileLayer(tileUrl, {
        maxZoom: 19
    }).addTo(map);
}

// Render overall stats
function renderStats() {
    const totalCafes = CAFES_DATA.length;
    const totalRoasteries = CAFES_DATA.filter(c => c.category === 'roastery').length;

    const statsWidget = document.getElementById("stats-widget-container");
    if (statsWidget) {
        statsWidget.innerHTML = `
            <div class="stats-widget">
                <div style="display:flex; align-items:center; gap: 0.75rem;">
                    <div class="stats-icon"><i class="fa-solid fa-mug-hot"></i></div>
                    <div>
                        <div class="stats-value">${totalCafes}개</div>
                        <div class="stats-text">전문가 엄선 스페셜티 숍</div>
                    </div>
                </div>
                <div style="text-align:right;">
                    <div class="stats-value" style="color: var(--color-roastery);">${totalRoasteries}개</div>
                    <div class="stats-text">자체 로스터리 보유 매장</div>
                </div>
            </div>
        `;
    }
}

// Render District List (Tab 1)
function renderDistrictSelector() {
    const grid = document.getElementById("district-grid");
    if (!grid) return;

    grid.innerHTML = "";

    // Count cafes per district
    const counts = { "all": CAFES_DATA.length };
    DISTRICTS_DATA.forEach(d => {
        counts[d.ko] = 0;
    });
    CAFES_DATA.forEach(c => {
        if (counts[c.districtKo] !== undefined) {
            counts[c.districtKo]++;
        }
    });

    // Add '전체보기' item
    const allItem = document.createElement("div");
    allItem.className = `district-item interactive ${activeDistrict === 'all' ? 'active' : ''}`;
    allItem.innerHTML = `
        <span class="district-name">부산 전체보기</span>
        <span class="district-count">${counts['all']}</span>
    `;
    allItem.addEventListener("click", () => {
        selectDistrict("all", [35.138, 129.095], 11);
    });
    grid.appendChild(allItem);

    // Add Gu items
    DISTRICTS_DATA.forEach(d => {
        const item = document.createElement("div");
        item.className = `district-item interactive ${activeDistrict === d.ko ? 'active' : ''}`;
        item.innerHTML = `
            <div>
                <span class="district-name">${d.ko}</span>
                <div style="font-size: 0.65rem; color: var(--text-muted); margin-top: 0.15rem">${d.en}</div>
            </div>
            <span class="district-count">${counts[d.ko] || 0}</span>
        `;
        item.addEventListener("click", () => {
            selectDistrict(d.ko, d.center, 13);
        });
        grid.appendChild(item);
    });
}

function selectDistrict(distName, center, zoom) {
    activeDistrict = distName;
    
    // Update active class in list UI
    document.querySelectorAll(".district-item").forEach(item => {
        const name = item.querySelector(".district-name").textContent;
        const isActive = (distName === "all" && name === "부산 전체보기") || (name === distName);
        item.classList.toggle("active", isActive);
    });

    // Zoom map
    map.flyTo(center, zoom, {
        animate: true,
        duration: 1.2
    });

    // Re-render
    renderCafes();
    closeDetailPanel();
}

// Render Cafes markers & Sidebar Lists (Tab 2)
function renderCafes() {
    const listContainer = document.getElementById("cafes-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    // Clear old markers
    Object.values(markers).forEach(m => map.removeLayer(m));
    markers = {};

    const searchQuery = document.getElementById("search-input").value.toLowerCase();

    // Filter
    const filtered = CAFES_DATA.filter(c => {
        const matchesCategory = (activeCategory === "all" || c.category === activeCategory);
        const matchesDistrict = (activeDistrict === "all" || c.districtKo === activeDistrict);
        
        // Tasting profile sliders
        const matchesProfile = (
            c.profile.acidity >= filterAcidity &&
            c.profile.nutty >= filterNutty &&
            c.profile.body >= filterBody
        );

        // Search text matching (name, address, bean tags, roasting roast, gear)
        const matchesSearch = (
            c.name.toLowerCase().includes(searchQuery) ||
            c.address.toLowerCase().includes(searchQuery) ||
            c.roast.toLowerCase().includes(searchQuery) ||
            c.categoryKo.toLowerCase().includes(searchQuery) ||
            c.gear.machine.toLowerCase().includes(searchQuery) ||
            c.beans.some(b => b.name.toLowerCase().includes(searchQuery) || b.notes.toLowerCase().includes(searchQuery)) ||
            c.tags.some(t => t.toLowerCase().includes(searchQuery))
        );

        return matchesCategory && matchesDistrict && matchesProfile && matchesSearch;
    });

    // Render list count in Tab title
    const listTabBtn = document.querySelector(".tab-btn[data-tab='cafes'] span");
    if (listTabBtn) {
        listTabBtn.textContent = `전체 목록 (${filtered.length})`;
    }

    if (filtered.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-mug-hot"></i>
                <p>조건을 만족하는 커피숍이 없습니다.<br>슬라이더나 검색어를 변경해 보세요.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(cafe => {
        // Create marker
        createCafeMarker(cafe);

        // Create card
        const card = document.createElement("div");
        card.className = "cafe-card interactive";
        card.style.setProperty("--card-color", cafe.color);
        card.setAttribute("data-id", cafe.id);

        card.innerHTML = `
            <div class="card-title-row">
                <div class="card-title-wrap">
                    <span class="card-badge" style="--card-color: ${cafe.color}">${cafe.categoryKo}</span>
                    <h3 style="margin-top: 0.3rem">${cafe.name}</h3>
                </div>
                <div class="rating-badge">
                    ☕ ${cafe.rating}
                </div>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-secondary);">
                <i class="fa-solid fa-location-dot" style="margin-right: 4px; color: var(--accent);"></i>${cafe.address.split(' ')[1]} ${cafe.address.split(' ')[2]}
            </div>
            <div style="margin-top: 0.2rem">
                ${cafe.beans.slice(0,2).map(b => `<span class="bean-badge">${b.name.split(' ').pop()}</span>`).join('')}
            </div>
            <div class="card-tags" style="margin-top: 0.3rem">
                ${cafe.tags.map(t => `<span class="cafe-tag">#${t}</span>`).join('')}
            </div>
        `;

        card.addEventListener("click", () => {
            showCafeDetails(cafe);
        });

        listContainer.appendChild(card);
    });
}

// Create custom bean marker
function createCafeMarker(cafe) {
    const icon = L.divIcon({
        className: 'custom-marker',
        html: `
            <div class="coffee-marker-pin" style="--marker-color: ${cafe.color}" id="pin-${cafe.id}">
                <i class="fa-solid ${cafe.icon}"></i>
            </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    });

    const marker = L.marker([cafe.lat, cafe.lng], { icon: icon }).addTo(map);

    marker.on("click", () => {
        showCafeDetails(cafe);
    });

    marker.bindPopup(`
        <div class="popup-title">${cafe.name}</div>
        <div class="popup-category" style="--marker-color: ${cafe.color}">${cafe.categoryKo}</div>
        <div style="font-size: 0.7rem; color: var(--text-secondary); margin-top:0.2rem;">☕ 바리스타 평점: ${cafe.rating}</div>
    `, {
        closeButton: false,
        offset: L.point(0, -6)
    });

    marker.on("mouseover", function() {
        this.openPopup();
    });
    marker.on("mouseout", function() {
        this.closePopup();
    });

    markers[cafe.id] = marker;
}

// Render Bookmarks (Tab 3)
function renderBookmarks() {
    const listContainer = document.getElementById("bookmarks-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    const bookmarked = CAFES_DATA.filter(c => bookmarkedCafes.includes(c.id));

    if (bookmarked.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-bookmark" style="font-size:2rem; margin-bottom:0.5rem;"></i>
                <p>아직 즐겨찾기한 매장이 없습니다.<br>가보고 싶은 숍의 상세 정보에서<br>북마크를 등록해 보세요!</p>
            </div>
        `;
        return;
    }

    bookmarked.forEach(cafe => {
        const card = document.createElement("div");
        card.className = "cafe-card interactive";
        card.style.setProperty("--card-color", cafe.color);
        card.innerHTML = `
            <div class="card-title-row">
                <div class="card-title-wrap">
                    <span class="card-badge" style="--card-color: ${cafe.color}">${cafe.categoryKo}</span>
                    <h3 style="margin-top: 0.3rem">${cafe.name}</h3>
                </div>
                <div class="rating-badge">☕ ${cafe.rating}</div>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-secondary);">
                <i class="fa-solid fa-location-dot" style="margin-right:4px;"></i>${cafe.address}
            </div>
        `;

        card.addEventListener("click", () => {
            showCafeDetails(cafe);
        });

        listContainer.appendChild(card);
    });
}

// Render Coffee Journal Logs (Tab 4)
function renderJournalLogs() {
    const listContainer = document.getElementById("journal-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    const logIds = Object.keys(cuppingNotes).filter(id => cuppingNotes[id] && cuppingNotes[id].trim() !== "");

    if (logIds.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-book-open" style="font-size:2rem; margin-bottom:0.5rem;"></i>
                <p>작성된 커핑 노트가 없습니다.<br>방문했던 카페에 전문가적인 리뷰나<br>기록을 남겨 나만의 커피 로그를 채워보세요!</p>
            </div>
        `;
        return;
    }

    logIds.forEach(id => {
        const cafe = CAFES_DATA.find(c => c.id === id);
        if (!cafe) return;

        const card = document.createElement("div");
        card.className = "cafe-card interactive";
        card.style.setProperty("--card-color", cafe.color);
        card.innerHTML = `
            <div class="card-title-row">
                <div class="card-title-wrap">
                    <span class="card-badge" style="--card-color: ${cafe.color}">${cafe.categoryKo}</span>
                    <h3 style="margin-top: 0.3rem">${cafe.name}</h3>
                </div>
                <div style="font-size: 0.75rem; color: var(--accent); font-weight:700;"><i class="fa-solid fa-pen-nib"></i> 작성완료</div>
            </div>
            <div style="background: var(--accent-light); padding: 0.6rem; border-radius: 8px; font-size: 0.8rem; line-height:1.4; color: var(--text-primary); margin-top: 0.4rem; border:1px solid var(--border-color)">
                "${cuppingNotes[id]}"
            </div>
        `;

        card.addEventListener("click", () => {
            showCafeDetails(cafe);
        });

        listContainer.appendChild(card);
    });
}

// Update Detail Sliding Overlay with tasting cards
function showCafeDetails(cafe) {
    const detailPanel = document.getElementById("detail-panel");
    if (!detailPanel) return;

    // Remove active styling from previous marker pin
    if (activeCafeId) {
        const pin = document.getElementById(`pin-${activeCafeId}`);
        if (pin) pin.classList.remove("active");
    }

    activeCafeId = cafe.id;
    const currentPin = document.getElementById(`pin-${cafe.id}`);
    if (currentPin) currentPin.classList.add("active");

    // Title & Badges
    document.getElementById("detail-title").textContent = cafe.name;
    const catBadge = document.getElementById("detail-category");
    catBadge.textContent = cafe.categoryKo;
    catBadge.style.color = cafe.color;
    catBadge.style.backgroundColor = `${cafe.color}15`;

    // Sliders tasting analytics
    document.getElementById("fill-acidity").style.width = `${cafe.profile.acidity * 20}%`;
    document.getElementById("fill-nutty").style.width = `${cafe.profile.nutty * 20}%`;
    document.getElementById("fill-sweet").style.width = `${cafe.profile.sweet * 20}%`;
    document.getElementById("fill-body").style.width = `${cafe.profile.body * 20}%`;

    document.getElementById("val-acidity").textContent = cafe.profile.acidity;
    document.getElementById("val-nutty").textContent = cafe.profile.nutty;
    document.getElementById("val-sweet").textContent = cafe.profile.sweet;
    document.getElementById("val-body").textContent = cafe.profile.body;

    // Contact Information
    document.getElementById("detail-address").innerHTML = `<h4>매장 위치</h4><p>${cafe.address}</p>`;
    document.getElementById("detail-phone").innerHTML = `<h4>연락처</h4><p>${cafe.phone}</p>`;
    document.getElementById("detail-hours").innerHTML = `<h4>영업 시간</h4><p>${cafe.hours}</p>`;
    document.getElementById("detail-notes").textContent = cafe.notes;

    // Extraction spec machines
    document.getElementById("val-machine").textContent = cafe.gear.machine;
    document.getElementById("val-grinder").textContent = cafe.gear.grinder;
    document.getElementById("val-roast").textContent = cafe.roast;

    // Bean specs
    const beanList = document.getElementById("detail-bean-lineup");
    beanList.innerHTML = "";
    cafe.beans.forEach(b => {
        const item = document.createElement("div");
        item.className = "bean-card-item";
        item.innerHTML = `
            <div class="bean-card-name"><i class="fa-solid fa-seedling" style="margin-right: 4px; color: var(--accent)"></i>${b.name}</div>
            <div class="bean-card-notes">${b.notes}</div>
        `;
        beanList.appendChild(item);
    });

    // Menus with price formatter
    const menuList = document.getElementById("detail-menu-list");
    menuList.innerHTML = "";
    cafe.menu.forEach(m => {
        const row = document.createElement("div");
        row.className = "menu-item-row";
        row.innerHTML = `
            <span class="menu-item-name">${m.item}</span>
            <span class="menu-item-price">${m.price.toLocaleString()}원</span>
        `;
        menuList.appendChild(row);
    });

    // Sync Bookmarks Button State
    const bmkBtn = document.getElementById("detail-bookmark-btn");
    const isBookmarked = bookmarkedCafes.includes(cafe.id);
    bmkBtn.setAttribute("data-id", cafe.id);
    bmkBtn.innerHTML = isBookmarked ? 
        `<i class="fa-solid fa-bookmark"></i> 북마크 해제` : 
        `<i class="fa-regular fa-bookmark"></i> 북마크 등록`;
    bmkBtn.classList.toggle("active", isBookmarked);

    // Sync Coffee Notes Log input
    const noteText = cuppingNotes[cafe.id] || "";
    document.getElementById("cupping-note-input").value = noteText;

    // Route links mapping
    document.getElementById("link-naver").href = `https://map.naver.com/v5/search/${encodeURIComponent(cafe.name + " " + cafe.address)}`;
    document.getElementById("link-kakao").href = `https://map.kakao.com/?q=${encodeURIComponent(cafe.name + " " + cafe.address)}`;
    document.getElementById("link-google").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.name + " " + cafe.address)}`;

    // Toggle slide-open
    detailPanel.classList.add("open");

    // Pan map to location with sidebar bounds compensation
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        map.setView([cafe.lat - 0.004, cafe.lng], 14);
    } else {
        const proj = map.project([cafe.lat, cafe.lng], 14).subtract([150, 0]);
        map.setView(map.unproject(proj, 14), 14);
    }
}

function closeDetailPanel() {
    const panel = document.getElementById("detail-panel");
    if (panel) panel.classList.remove("open");

    if (activeCafeId) {
        const pin = document.getElementById(`pin-${activeCafeId}`);
        if (pin) pin.classList.remove("active");
        activeCafeId = null;
    }
}

// Bookmark toggler
function toggleBookmark(cafeId) {
    const idx = bookmarkedCafes.indexOf(cafeId);
    if (idx > -1) {
        bookmarkedCafes.splice(idx, 1);
    } else {
        bookmarkedCafes.push(cafeId);
    }

    localStorage.setItem("coffee_bookmarks", JSON.stringify(bookmarkedCafes));
    
    // Sync UI states
    const bmkBtn = document.getElementById("detail-bookmark-btn");
    if (bmkBtn && bmkBtn.getAttribute("data-id") === cafeId) {
        const isBookmarked = bookmarkedCafes.includes(cafeId);
        bmkBtn.innerHTML = isBookmarked ? 
            `<i class="fa-solid fa-bookmark"></i> 북마크 해제` : 
            `<i class="fa-regular fa-bookmark"></i> 북마크 등록`;
        bmkBtn.classList.toggle("active", isBookmarked);
    }

    // Refresh if Bookmarks tab is currently active
    if (document.getElementById("tab-bookmarks").classList.contains("active")) {
        renderBookmarks();
    }
}

// Save Coffee Tasting Review Notes
function saveCuppingNote() {
    if (!activeCafeId) return;

    const note = document.getElementById("cupping-note-input").value;
    cuppingNotes[activeCafeId] = note;

    localStorage.setItem("coffee_notes", JSON.stringify(cuppingNotes));
    alert("커핑 노트 작성이 저장되었습니다.");

    // Refresh if logs tab is active
    if (document.getElementById("tab-journal").classList.contains("active")) {
        renderJournalLogs();
    }
}

// Setup Interaction Triggers
function setupEventListeners() {
    // 1. Sidebar tabs switching
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));

            btn.classList.add("active");
            const tabId = btn.getAttribute("data-tab");
            document.getElementById(`tab-${tabId}`).classList.add("active");

            // Tab-specific loading
            if (tabId === "bookmarks") {
                renderBookmarks();
            } else if (tabId === "journal") {
                renderJournalLogs();
            }
        });
    });

    // 2. Category topbar filters
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            activeCategory = btn.getAttribute("data-category");
            renderCafes();
            closeDetailPanel();
        });
    });

    // 3. Search inputs
    const search = document.getElementById("search-input");
    search.addEventListener("input", () => {
        renderCafes();
    });

    // 4. Slider Ranges Filters
    const slideAcid = document.getElementById("slider-acidity");
    const slideNut = document.getElementById("slider-nutty");
    const slideBody = document.getElementById("slider-body");

    slideAcid.addEventListener("input", function() {
        document.getElementById("lbl-acidity").textContent = this.value;
        filterAcidity = parseInt(this.value);
        renderCafes();
    });
    
    slideNut.addEventListener("input", function() {
        document.getElementById("lbl-nutty").textContent = this.value;
        filterNutty = parseInt(this.value);
        renderCafes();
    });

    slideBody.addEventListener("input", function() {
        document.getElementById("lbl-body").textContent = this.value;
        filterBody = parseInt(this.value);
        renderCafes();
    });

    // 5. Details slide overlay handlers
    document.getElementById("detail-close-btn").addEventListener("click", closeDetailPanel);

    document.getElementById("detail-bookmark-btn").addEventListener("click", function() {
        const id = this.getAttribute("data-id");
        toggleBookmark(id);
    });

    document.getElementById("btn-save-cupping").addEventListener("click", saveCuppingNote);

    // 6. Theme toggles
    document.getElementById("theme-toggle-btn").addEventListener("click", () => {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", currentTheme);
        localStorage.setItem("coffee_theme", currentTheme);
        updateThemeIcon();
        loadMapTiles();
    });
}

function updateThemeIcon() {
    const icon = document.querySelector("#theme-toggle-btn i");
    if (currentTheme === "dark") {
        icon.className = "fa-solid fa-sun";
        icon.title = "라이트 모드";
    } else {
        icon.className = "fa-solid fa-moon";
        icon.title = "다크 모드";
    }
}
