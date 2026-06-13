// Busan Spots Data
const SPOTS_DATA = [
    {
        id: "spot-1",
        name: "감천문화마을",
        category: "hotspot",
        categoryKo: "핫플레이스",
        lat: 35.0975,
        lng: 129.0093,
        rating: 4.6,
        address: "부산 사하구 감내2로 203",
        desc: "부산의 마추픽추라 불리는 감천문화마을. 파스텔톤의 알록달록한 집들과 골목골목 펼쳐지는 벽화, 어린왕자 포토존이 매력적인 곳입니다.",
        tags: ["뷰맛집", "포토존", "문화마을"],
        img: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=600&q=80",
        phone: "051-204-1444",
        hours: "09:00 - 18:00 (연중무휴)",
        menu: "어린왕자 포토존, 계단식 마을 뷰",
        color: "#ef4444",
        icon: "fa-camera"
    },
    {
        id: "spot-2",
        name: "해운대 블루라인파크",
        category: "hotspot",
        categoryKo: "핫플레이스",
        lat: 35.1587,
        lng: 129.1732,
        rating: 4.7,
        address: "부산 해운대구 달맞이길62번길 13",
        desc: "해운대 미포에서 송정까지 수려한 해안 절경을 따라 달리는 해변열차와 스카이캡슐. 바다 바로 옆을 달리는 낭만을 느껴보세요.",
        tags: ["해안열차", "바다뷰", "데이트코스"],
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        phone: "051-701-5548",
        hours: "09:30 - 18:30 (시즌별 변동)",
        menu: "스카이캡슐 (편도 35,000원), 해변열차 (1회 7,000원)",
        color: "#ef4444",
        icon: "fa-camera"
    },
    {
        id: "spot-3",
        name: "광안리 해수욕장",
        category: "hotspot",
        categoryKo: "핫플레이스",
        lat: 35.1532,
        lng: 129.1189,
        rating: 4.8,
        address: "부산 수영구 광안해변로 219",
        desc: "밤이 되면 보석처럼 빛나는 광안대교 뷰를 감상할 수 있는 부산 대표 해변. 주말 저녁이면 화려한 드론쇼가 밤하늘을 수놓습니다.",
        tags: ["밤바다", "드론쇼", "야경맛집"],
        img: "https://images.unsplash.com/photo-1548100746-1502475e521b?auto=format&fit=crop&w=600&q=80",
        phone: "051-622-4251",
        hours: "24시간 개방 (드론쇼 토요일 저녁 8시, 10시)",
        menu: "광안대교 LED뷰, 토요일 드론라이트쇼",
        color: "#ef4444",
        icon: "fa-camera"
    },
    {
        id: "spot-4",
        name: "흰여울문화마을",
        category: "hotspot",
        categoryKo: "핫플레이스",
        lat: 35.0784,
        lng: 129.0438,
        rating: 4.5,
        address: "부산 영도구 영선동4가 1044-17",
        desc: "영도 바다 절벽에 위태롭게 자리한 그리스 산토리니 풍의 마을. 좁은 골목길 사이로 끝없이 펼쳐지는 푸른 바다를 내려다볼 수 있습니다.",
        tags: ["오션뷰", "골목투어", "인생샷"],
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80",
        phone: "051-419-4067",
        hours: "24시간 골목 개방 (상점가는 11:00 - 19:00)",
        menu: "흰여울 해안터널 포토존, 이송도 전망대",
        color: "#ef4444",
        icon: "fa-camera"
    },
    {
        id: "spot-5",
        name: "오륙도 스카이워크",
        category: "hotspot",
        categoryKo: "핫플레이스",
        lat: 35.1021,
        lng: 129.1232,
        rating: 4.4,
        address: "부산 남구 용호동 오륙도로 137",
        desc: "35m 높이의 해안 절벽 위에 설치된 유리 다리. 투명한 바닥 아래로 몰아치는 파도를 보며 짜릿한 바다 산책을 즐겨보세요.",
        tags: ["스카이워크", "절경", "산책코스"],
        img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
        phone: "051-607-6395",
        hours: "09:00 - 18:00 (눈, 비, 강풍 시 입장 제한)",
        menu: "유리 다리 체험 (무료)",
        color: "#ef4444",
        icon: "fa-camera"
    },
    {
        id: "spot-6",
        name: "웨이브온 커피",
        category: "cafe",
        categoryKo: "카페",
        lat: 35.3218,
        lng: 129.2718,
        rating: 4.6,
        address: "부산 기장군 장안읍 해맞이로 286",
        desc: "기장 앞바다를 품은 세계적인 건축가 곽희수의 작품. 바다를 정면으로 바라보며 시원한 스페셜티 커피를 마실 수 있습니다.",
        tags: ["건축미", "오션뷰", "기장카페"],
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
        phone: "051-727-1660",
        hours: "10:00 - 24:00 (라스트오더 23:00)",
        menu: "브루잉 커피 (7,000원+), 월내 라떼 (7,500원)",
        color: "#f59e0b",
        icon: "fa-coffee"
    },
    {
        id: "spot-7",
        name: "초량 845",
        category: "cafe",
        categoryKo: "카페",
        lat: 35.1228,
        lng: 129.0345,
        rating: 4.3,
        address: "부산 동구 망양로 533-5",
        desc: "산복도로 위 오래된 공장을 리모델링하여 영도와 부산항대교 뷰를 한눈에 담을 수 있는 뷰 맛집 감성 카페입니다.",
        tags: ["산복도로", "부산항대교뷰", "디저트"],
        img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
        phone: "051-468-7745",
        hours: "11:00 - 21:00 (수요일 휴무)",
        menu: "초량젤라또 (5,500원), 아인슈페너 (6,500원)",
        color: "#f59e0b",
        icon: "fa-coffee"
    },
    {
        id: "spot-8",
        name: "신기산업",
        category: "cafe",
        categoryKo: "카페",
        lat: 35.0931,
        lng: 129.0601,
        rating: 4.4,
        address: "부산 영도구 와치로51번길 2",
        desc: "영도 청학동 고지대에 위치한 방울 공장을 개조한 카페. 탁 트인 영도 바다와 밤의 부산항대교를 감상하기 가장 좋은 곳입니다.",
        tags: ["영도카페", "야경맛집", "루프탑"],
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
        phone: "051-411-1040",
        hours: "11:00 - 23:00 (라스트오더 22:00)",
        menu: "신기라떼 (6,800원), 콜드브루 (6,000원)",
        color: "#f59e0b",
        icon: "fa-coffee"
    },
    {
        id: "spot-9",
        name: "모모스커피 영도점",
        category: "cafe",
        categoryKo: "카페",
        lat: 35.0911,
        lng: 129.0452,
        rating: 4.7,
        address: "부산 영도구 봉래나루로 160",
        desc: "월드 바리스타 챔피언십 우승자가 운영하는 스페셜티 커피의 성지. 부두의 대형 창고를 개조해 바리스타들이 커피를 볶는 과정을 직접 볼 수 있습니다.",
        tags: ["바리스타챔피언", "스페셜티커피", "로스터리"],
        img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80",
        phone: "051-418-7007",
        hours: "09:00 - 18:00 (라스트오더 17:30)",
        menu: "필터 커피 (변동), 에스프레소 주스 (7,000원)",
        color: "#f59e0b",
        icon: "fa-coffee"
    },
    {
        id: "spot-10",
        name: "피아크 카페&베이커리",
        category: "cafe",
        categoryKo: "카페",
        lat: 35.0805,
        lng: 129.0769,
        rating: 4.5,
        address: "부산 영도구 해양로195번길 180",
        desc: "영도 바다를 마주한 대규모 복합문화공간. 수많은 종류의 갓 구운 빵과 디저트, 광활한 실내외 오션 공간을 제공합니다.",
        tags: ["초대형카페", "베이커리", "복합문화공간"],
        img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80",
        phone: "051-404-9200",
        hours: "09:00 - 23:00 (라스트오더 22:00)",
        menu: "아메리카노 (6,000원), 시그니처 베이커리 (5,000원+)",
        color: "#f59e0b",
        icon: "fa-coffee"
    },
    {
        id: "spot-11",
        name: "수영돼지국밥",
        category: "korean",
        categoryKo: "한식 맛집",
        lat: 35.1633,
        lng: 129.1102,
        rating: 4.5,
        address: "부산 수영구 무학로 6",
        desc: "부산의 대표 소울푸드인 맑고 깊은 국물의 돼지국밥 전문점. 잡내 없는 부드러운 고기가 가득 듬뿍 들어가 현지인들이 적극 추천하는 맛집입니다.",
        tags: ["돼지국밥", "소울푸드", "웨이팅맛집"],
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
        phone: "051-758-5046",
        hours: "08:00 - 23:30 (연중무휴)",
        menu: "돼지국밥 (9,500원), 따로국밥 (9,500원), 수육백반 (12,000원)",
        color: "#10b981",
        icon: "fa-utensils"
    },
    {
        id: "spot-12",
        name: "초량밀면",
        category: "korean",
        categoryKo: "한식 맛집",
        lat: 35.1154,
        lng: 129.0402,
        rating: 4.2,
        address: "부산 동구 중앙대로 225",
        desc: "부산역 바로 근처에 위치해 여행의 시작이나 끝에 즐기기 좋은 시원한 밀면 전문점. 살얼음 동동 뜬 한방 육수와 쫄깃한 면발, 크고 알찬 수제 왕만두의 조합이 최고입니다.",
        tags: ["밀면", "부산역맛집", "왕만두"],
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
        phone: "051-462-1575",
        hours: "10:00 - 22:00",
        menu: "물밀면/비빔밀면 (대 6,500원, 소 6,000원), 왕만두 (6,000원)",
        color: "#10b981",
        icon: "fa-utensils"
    },
    {
        id: "spot-13",
        name: "금수복국 해운대본점",
        category: "korean",
        categoryKo: "한식 맛집",
        lat: 35.1627,
        lng: 129.1629,
        rating: 4.4,
        address: "부산 해운대구 중동1로43번길 23",
        desc: "1970년부터 이어진 뚝배기 복국을 대중화시킨 전국구 명가. 해장으로 탁월한 시원하고 깊은 은복국, 밀복국 맑은탕(지리)이 대표 메뉴입니다.",
        tags: ["복국", "해장맛집", "원조맛집"],
        img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        phone: "051-742-3600",
        hours: "24시간 영업 (월요일 야간 휴무)",
        menu: "은복국 지리/매운탕 (14,000원), 까치복국 (22,000원)",
        color: "#10b981",
        icon: "fa-utensils"
    },
    {
        id: "spot-14",
        name: "백화양곱창",
        category: "korean",
        categoryKo: "한식 맛집",
        lat: 35.0978,
        lng: 129.0272,
        rating: 4.3,
        address: "부산 중구 자갈치로23번길 6",
        desc: "자갈치시장 골목에서 70년 넘게 연탄불 석쇠에 양곱창을 구워내는 노포 중의 노포. 연기가 자욱하고 시끌벅적한 독특한 감성과 특제 마늘 양념 맛이 매력적입니다.",
        tags: ["자갈치시장", "양곱창", "노포감성"],
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        phone: "051-245-0106",
        hours: "12:00 - 24:00 (매달 1, 3, 5째 일요일 휴무)",
        menu: "양곱창 소금/양념구이 (350g, 39,000원), 볶음밥 (12,000원)",
        color: "#10b981",
        icon: "fa-utensils"
    },
    {
        id: "spot-15",
        name: "신발원",
        category: "chinese",
        categoryKo: "중식 맛집",
        lat: 35.1151,
        lng: 129.0382,
        rating: 4.6,
        address: "부산 동구 대영로243번길 62",
        desc: "부산 초량 차이나타운 최고의 웨이팅 맛집. 대를 이어 빚어온 육즙 팡팡 터지는 고기만두와 아주 바삭한 군만두, 설탕을 타먹는 콩국과 과자 요우티아오가 유명합니다.",
        tags: ["차이나타운", "군만두", "백종원맛집"],
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
        phone: "051-467-0177",
        hours: "11:00 - 20:00 (매주 화요일 휴무)",
        menu: "군만두 (6,000원), 고기만두 (6,000원), 소화빵 (1,500원), 콩국+과자 (3,500원)",
        color: "#ec4899",
        icon: "fa-bowl-food"
    },
    {
        id: "spot-16",
        name: "홍성방",
        category: "chinese",
        categoryKo: "중식 맛집",
        lat: 35.1156,
        lng: 129.0394,
        rating: 4.2,
        address: "부산 동구 대영로243번길 38",
        desc: "차이나타운 입구에서 오랫동안 신뢰를 얻어온 화상 중식당. 속이 비치는 얇은 피의 수제 물만두와 개운하고 얼큰한 짬뽕, 바삭하고 달콤한 칠리새우가 인기 요리입니다.",
        tags: ["물만두", "짬뽕맛집", "코스요리"],
        img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        phone: "051-467-5398",
        hours: "11:00 - 21:30 (평일 브레이크타임 15:00 - 17:00)",
        menu: "물만두 (7,000원), 삼선짬뽕 (10,000원), 탕수육 (소 22,000원)",
        color: "#ec4899",
        icon: "fa-bowl-food"
    },
    {
        id: "spot-17",
        name: "동화반점",
        category: "chinese",
        categoryKo: "중식 맛집",
        lat: 35.1017,
        lng: 129.0263,
        rating: 4.3,
        address: "부산 중구 흑교로 75",
        desc: "부산에서 가장 오래된 화상 중식당 중 하나. 튀겨내듯 반숙으로 올린 계란프라이와 오이채가 더해진 유니짜장이 트레이드 마크이며, 볶음밥과 투명한 탕수육도 유명합니다.",
        tags: ["보수동맛집", "유니짜장", "탕수육맛집"],
        img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80",
        phone: "051-253-6611",
        hours: "11:00 - 21:00 (격주 수요일 휴무)",
        menu: "유니짜장 (8,000원), 볶음밥 (8,000원), 사천짜장 (9,000원)",
        color: "#ec4899",
        icon: "fa-bowl-food"
    },
    {
        id: "spot-18",
        name: "오스테리아 어부",
        category: "western",
        categoryKo: "양식 맛집",
        lat: 35.1558,
        lng: 129.0622,
        rating: 4.6,
        address: "부산 부산진구 동천로 58",
        desc: "서면 전포동에 위치한 생면 파스타 명가. 부산 바다의 해산물을 이탈리아 밀가루 생면에 조화시킨 어부 파스타, 진한 트러플 뇨끼 등이 일품이며 와인 매칭이 훌륭합니다.",
        tags: ["생면파스타", "전포맛집", "내추럴와인"],
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
        phone: "051-808-8833",
        hours: "12:00 - 22:00 (월요일 휴무, 브레이크타임 15:00 - 17:00)",
        menu: "어부 파스타 (23,000원), 화이트 라구 파스타 (20,000원), 트러플 뇨끼 (22,000원)",
        color: "#8b5cf6",
        icon: "fa-circle-chevron-right"
    },
    {
        id: "spot-19",
        name: "키친동백",
        category: "western",
        categoryKo: "양식 맛집",
        lat: 35.1584,
        lng: 129.1712,
        rating: 4.5,
        address: "부산 해운대구 달맞이길117번길 85",
        desc: "해운대 달맞이길 중턱에 위치한 갤러리 하우스 풍의 프렌치 & 이탈리안 다이닝. 화사하게 가꿔진 정원과 바다 풍경을 내다보며 격식 있는 스테이크 코스를 맛볼 수 있어 기념일 장소로 유명합니다.",
        tags: ["달맞이길", "파인다이닝", "기념일추천"],
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
        phone: "051-742-1983",
        hours: "12:00 - 22:00 (브레이크타임 15:00 - 17:00)",
        menu: "동백 런치 코스 (55,000원), 셰프 스페셜 디너 코스 (110,000원)",
        color: "#8b5cf6",
        icon: "fa-circle-chevron-right"
    },
    {
        id: "spot-20",
        name: "볼피노 부산",
        category: "western",
        categoryKo: "양식 맛집",
        lat: 35.2045,
        lng: 129.2295,
        rating: 4.4,
        address: "부산 기장군 기장읍 기장해안로 268-32 아난티 코브",
        desc: "기장 럭셔리 휴양지 아난티 코브에 자리 잡은 명품 이탈리안 레스토랑. 탁 트인 기장 오션뷰 통유리창 옆에서 고소한 트러플 아란치니와 명란 생면 파스타, 비프 스테이크를 맛볼 수 있습니다.",
        tags: ["아난티코브", "오션뷰레스토랑", "기장맛집"],
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        phone: "051-604-7275",
        hours: "12:00 - 21:30 (브레이크타임 15:00 - 18:00)",
        menu: "트러플 타야린 파스타 (29,000원), 새우 소시지 파스타 (28,000원)",
        color: "#8b5cf6",
        icon: "fa-circle-chevron-right"
    },
    {
        id: "spot-21",
        name: "해목 해운대점",
        category: "others",
        categoryKo: "그 외 맛집",
        lat: 35.1611,
        lng: 129.1601,
        rating: 4.6,
        address: "부산 해운대구 구남로24번길 8",
        desc: "해운대 최고 핫플 골목인 구남로에 위치한 일본식 장어덮밥(히츠마부시) 명가. 특제 소스를 겹겹이 발라 숯불에 구운 겉바속촉 장어가 밥을 가득 덮고 있으며 오차즈케, 고추냉이와 김을 곁들여 세 가지 방식으로 즐깁니다.",
        tags: ["장어덮밥", "히츠마부시", "해운대맛집"],
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
        phone: "051-746-3730",
        hours: "11:00 - 22:00 (브레이크타임 15:00 - 17:00)",
        menu: "민물장어덮밥 히츠마부시 (39,000원), 생연어덮밥 사케동 (18,000원)",
        color: "#06b6d4",
        icon: "fa-star"
    },
    {
        id: "spot-22",
        name: "삼진어묵 영도본점",
        category: "others",
        categoryKo: "그 외 맛집",
        lat: 35.0917,
        lng: 129.0396,
        rating: 4.5,
        address: "부산 영도구 태종로99번길 36",
        desc: "1953년부터 영도에서 터를 잡은 부산 현존 최고(最古) 어묵 브랜드 본점. 갓 튀겨낸 치즈, 땡초, 고구마 등 다양한 어묵고로케와 수백 가지 수제 어묵을 베이커리 빵처럼 쟁반에 골라 담을 수 있으며 어묵 역사 체험도 가능합니다.",
        tags: ["어묵베이커리", "어묵고로케", "역사체험"],
        img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
        phone: "051-412-5468",
        hours: "09:00 - 19:00",
        menu: "어묵고로케 6개 세트 (15,000원), 땡초/치즈/새우 어묵 (각 2,500원+)",
        color: "#06b6d4",
        icon: "fa-star"
    },
    {
        id: "spot-23",
        name: "거인통닭",
        category: "others",
        categoryKo: "그 외 맛집",
        lat: 35.1019,
        lng: 129.0289,
        rating: 4.4,
        address: "부산 중구 중구로47번길 34",
        desc: "부평깡통시장 내 전통 시장 분위기가 고스란히 묻어나는 가마솥 프라이드 치킨 명가. 커다란 가마솥에 바싹 튀겨내어 식어도 쉽게 눅눅해지지 않는 엄청난 양과 카레 맛이 은은하게 감도는 중독적인 바삭함이 특징입니다.",
        tags: ["가마솥통닭", "시장맛집", "바삭함끝판왕"],
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
        phone: "051-244-5075",
        hours: "12:00 - 21:00 (일요일 휴무)",
        menu: "켄터키 프라이드 치킨 (22,000원), 양념치킨 (23,000원)",
        color: "#06b6d4",
        icon: "fa-star"
    }
];

// Recommended Courses Data
const COURSES_DATA = [
    {
        id: "course-1",
        name: "해운대 기장 감성 바다 코스 🌊",
        desc: "푸른 바다와 고풍스러운 다이닝, 명물 철길 열차와 스페셜티 커피를 하루 만에 끝내는 해변 데이트 정석 코스",
        spots: ["spot-2", "spot-13", "spot-21", "spot-19", "spot-6"], // Blueline Park -> Geumsu -> Haemok -> Kitchen Dongbaek -> Waveon
        time: "약 7시간 소요",
        tips: "점심에는 구남로 해목에서 웨이팅을 건 뒤, 블루라인파크 스카이캡슐 탑승 시간을 예약하시는 것을 권장합니다."
    },
    {
        id: "course-2",
        name: "영도 바다 정복 & 커피 순례 코스 ☕",
        desc: "역사와 커피의 도시 영도대교를 건너, 대형 로스터리와 흰여울 절벽, 화려한 초대형 베이커리 쉼터까지 정복하는 바다 투어",
        spots: ["spot-22", "spot-9", "spot-4", "spot-8", "spot-10"], // Samjin Amook -> Momos -> Huinnyeoul -> Singi Industry -> P.ARK
        time: "약 5시간 소요",
        tips: "모모스커피에서 세계 우승자의 드립커피를 드신 후, 노을 시간에 흰여울마을을 산책하고 신기산업에서 야경을 구경하면 로맨틱합니다."
    },
    {
        id: "course-3",
        name: "부산 전통 시장 & 로컬 원조 맛집 먹방 코스 🥟",
        desc: "부산역에 내려 차이나타운 만두부터 산복도로 카페, 자갈치 시장의 고소한 불맛, 감천마을의 알록달록한 동화 뷰까지",
        spots: ["spot-12", "spot-15", "spot-7", "spot-23", "spot-14", "spot-1"], // Choryang Milmyeon -> Shinbalwon -> Choryang 845 -> Geoin Tongdak -> Baekhwa -> Gamcheon
        time: "약 6시간 소요",
        tips: "위장이 든든해야 합니다! 백화양곱창의 노포 연탄 연기를 감수할 수 있는 캐주얼한 복장을 입는 것을 추천합니다."
    }
];

// Weather Dialog / Mock Generator
const WEATHER_MESSAGES = [
    { text: "해운대에 바람이 기분 좋게 부네요. 23°C 🌤️", desc: "야외 테라스 카페가 좋은 날씨" },
    { text: "광안리 밤바다 산책하기 딱 좋은 선선함! 21°C 🌙", desc: "주말 저녁 드론쇼 관람 추천!" },
    { text: "영도 절벽 아래 파도소리가 시원합니다. 24°C 🌊", desc: "오션뷰 윈도우 시트를 찾아보세요" },
    { text: "부산의 맑은 하늘, 여행하기 최고! 25°C ☀️", desc: "도보 골목길 여행이 잘 어울려요" }
];

// App State Management
let map;
let markers = {};
let activeCategory = "all";
let activeCourseId = null;
let coursePolyline = null;
let currentTheme = localStorage.getItem("theme") || "dark";
let bookmarkedSpots = JSON.parse(localStorage.getItem("bookmarks")) || [];
let activeMarker = null;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    // 1. Setup Theme
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon();

    // 2. Initialize Leaflet Map
    initMap();

    // 3. Render Widgets
    renderWeather();

    // 4. Render Spot list & Markers
    renderSpots();

    // 5. Render Course list
    renderCourses();

    // 6. Setup Event Listeners
    setupEventListeners();
});

// Map Initialization
function initMap() {
    // Center of Busan (Yeongdo/Nam-gu border, great visibility)
    const busanCenter = [35.138, 129.095];
    const initialZoom = 12;

    map = L.map("map", {
        zoomControl: true,
        attributionControl: false
    }).setView(busanCenter, initialZoom);

    // Load Tiles based on theme
    loadMapTiles();
}

// Select Map Style depending on Light/Dark theme
function loadMapTiles() {
    // Remove existing tile layer if exists
    map.eachLayer((layer) => {
        if (layer instanceof L.TileLayer) {
            map.removeLayer(layer);
        }
    });

    let tileUrl;
    if (currentTheme === "dark") {
        // CartoDB Dark Matter
        tileUrl = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
    } else {
        // CartoDB Positron (Elegant Light style)
        tileUrl = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
    }

    L.tileLayer(tileUrl, {
        maxZoom: 19
    }).addTo(map);
}

// Render Spot List (Sidebar) & Map Markers
function renderSpots() {
    // Clear existing list and markers
    const listContainer = document.getElementById("spots-list");
    listContainer.innerHTML = "";

    // Clear existing markers from map
    Object.values(markers).forEach(marker => map.removeLayer(marker));
    markers = {};

    const searchQuery = document.getElementById("search-input").value.toLowerCase();

    // Filter spots based on active category & search query
    const filteredSpots = SPOTS_DATA.filter(spot => {
        const matchesCategory = (activeCategory === "all" || spot.category === activeCategory);
        const matchesSearch = (
            spot.name.toLowerCase().includes(searchQuery) ||
            spot.address.toLowerCase().includes(searchQuery) ||
            spot.desc.toLowerCase().includes(searchQuery) ||
            spot.tags.some(tag => tag.toLowerCase().includes(searchQuery))
        );
        return matchesCategory && matchesSearch;
    });

    if (filteredSpots.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-map-location-dot"></i>
                <p>일치하는 관광지가 없습니다.<br>검색어나 카테고리를 변경해 보세요.</p>
            </div>
        `;
        return;
    }

    filteredSpots.forEach(spot => {
        // Create Marker on Map
        createSpotMarker(spot);

        // Add to List
        const isBookmarked = bookmarkedSpots.includes(spot.id);
        const card = document.createElement("div");
        card.className = "spot-card interactive";
        card.style.setProperty("--card-accent", spot.color);
        card.setAttribute("data-id", spot.id);
        
        card.innerHTML = `
            <div class="card-header">
                <div class="card-title-group">
                    <span class="card-category" style="--card-accent: ${spot.color}">${spot.categoryKo}</span>
                    <h3 style="margin-top: 0.25rem">${spot.name}</h3>
                </div>
                <button class="bookmark-btn interactive ${isBookmarked ? 'active' : ''}" data-id="${spot.id}" title="나의 찜하기">
                    <i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>
            <div class="card-meta">
                <span class="rating">
                    <i class="fa-solid fa-star"></i> ${spot.rating}
                </span>
                <span><i class="fa-solid fa-location-dot"></i> ${spot.address.split(' ')[1]} ${spot.address.split(' ')[2]}</span>
            </div>
            <p class="spot-desc">${spot.desc}</p>
            <div class="card-tags">
                ${spot.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
        `;

        // Click handler to zoom map and open detail panel
        card.addEventListener("click", (e) => {
            // Check if user clicked bookmark button
            if (e.target.closest(".bookmark-btn")) return;
            showSpotDetail(spot);
        });

        // Bookmark Toggle logic
        const bmkBtn = card.querySelector(".bookmark-btn");
        bmkBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleBookmark(spot.id, bmkBtn);
        });

        listContainer.appendChild(card);
    });
}

// Create custom leaflet marker with Category color & FontAwesome icon
function createSpotMarker(spot) {
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
            <div class="marker-pin" style="--marker-color: ${spot.color}" id="pin-${spot.id}">
                <i class="fa-solid ${spot.icon} marker-icon"></i>
            </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    const marker = L.marker([spot.lat, spot.lng], { icon: customIcon }).addTo(map);

    // Marker Click Handler
    marker.on("click", () => {
        showSpotDetail(spot);
    });

    // Marker Hover Popup
    marker.bindPopup(`
        <div class="popup-title">${spot.name}</div>
        <div class="popup-category" style="--marker-color: ${spot.color}">${spot.categoryKo}</div>
    `, {
        closeButton: false,
        offset: L.point(0, -6)
    });

    marker.on("mouseover", function (e) {
        this.openPopup();
    });
    marker.on("mouseout", function (e) {
        this.closePopup();
    });

    markers[spot.id] = marker;
}

// Render Bookmark (나만의 저장) Tab content
function renderBookmarks() {
    const bmkContainer = document.getElementById("bookmarks-list");
    bmkContainer.innerHTML = "";

    const bookmarkedSpotsData = SPOTS_DATA.filter(spot => bookmarkedSpots.includes(spot.id));

    if (bookmarkedSpotsData.length === 0) {
        bmkContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-heart" style="font-size: 2.5rem; margin-bottom: 0.5rem"></i>
                <p>아직 저장한 장소가 없습니다.<br>관광지 카드의 하트 아이콘을 눌러<br>나만의 즐겨찾기 리스트를 만들어보세요!</p>
            </div>
        `;
        return;
    }

    bookmarkedSpotsData.forEach(spot => {
        const card = document.createElement("div");
        card.className = "spot-card interactive";
        card.style.setProperty("--card-accent", spot.color);
        card.setAttribute("data-id", spot.id);
        
        card.innerHTML = `
            <div class="card-header">
                <div class="card-title-group">
                    <span class="card-category" style="--card-accent: ${spot.color}">${spot.categoryKo}</span>
                    <h3 style="margin-top: 0.25rem">${spot.name}</h3>
                </div>
                <button class="bookmark-btn active interactive" data-id="${spot.id}">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>
            <div class="card-meta">
                <span class="rating">
                    <i class="fa-solid fa-star"></i> ${spot.rating}
                </span>
                <span><i class="fa-solid fa-location-dot"></i> ${spot.address.split(' ')[1]}</span>
            </div>
            <p class="spot-desc">${spot.desc}</p>
        `;

        card.addEventListener("click", (e) => {
            if (e.target.closest(".bookmark-btn")) return;
            showSpotDetail(spot);
        });

        // Click handler to remove bookmark
        card.querySelector(".bookmark-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleBookmark(spot.id);
            renderBookmarks(); // re-render list
            
            // Sync active spots tab state
            const mainTabCardBtn = document.querySelector(`#spots-list .spot-card[data-id="${spot.id}"] .bookmark-btn`);
            if (mainTabCardBtn) {
                mainTabCardBtn.classList.remove("active");
                mainTabCardBtn.querySelector("i").className = "fa-regular fa-heart";
            }
        });

        bmkContainer.appendChild(card);
    });
}

// Toggle Bookmark Action
function toggleBookmark(spotId, buttonElement = null) {
    const index = bookmarkedSpots.indexOf(spotId);
    if (index > -1) {
        bookmarkedSpots.splice(index, 1);
        if (buttonElement) {
            buttonElement.classList.remove("active");
            buttonElement.querySelector("i").className = "fa-regular fa-heart";
        }
    } else {
        bookmarkedSpots.push(spotId);
        if (buttonElement) {
            buttonElement.classList.add("active");
            buttonElement.querySelector("i").className = "fa-solid fa-heart";
        }
    }
    
    // Save to LocalStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkedSpots));
    
    // Check if the current opened detail panel needs sync
    const detailBmkBtn = document.getElementById("detail-bookmark");
    if (detailBmkBtn && detailBmkBtn.getAttribute("data-id") === spotId) {
        const isNowBookmarked = bookmarkedSpots.includes(spotId);
        detailBmkBtn.classList.toggle("active", isNowBookmarked);
        detailBmkBtn.querySelector("i").className = isNowBookmarked ? "fa-solid fa-heart" : "fa-regular fa-heart";
    }

    // Refresh saved tab if open
    if (document.getElementById("tab-bookmarks").classList.contains("active")) {
        renderBookmarks();
    }
}

// Show Spot Detail Sliding Panel
function showSpotDetail(spot) {
    const detailPanel = document.getElementById("detail-panel");
    const title = document.getElementById("detail-title");
    const category = document.getElementById("detail-category");
    const image = document.getElementById("detail-image");
    const address = document.getElementById("detail-address");
    const phone = document.getElementById("detail-phone");
    const hours = document.getElementById("detail-hours");
    const desc = document.getElementById("detail-description");
    const menu = document.getElementById("detail-menu");
    const bookmarkBtn = document.getElementById("detail-bookmark");

    // Clear active marker class from previous
    if (activeMarker) {
        const pin = document.getElementById(`pin-${activeMarker}`);
        if (pin) pin.classList.remove("active");
    }

    // Set new active marker styling
    activeMarker = spot.id;
    const activePin = document.getElementById(`pin-${spot.id}`);
    if (activePin) activePin.classList.add("active");

    // Setup Panel contents
    title.textContent = spot.name;
    category.textContent = spot.categoryKo;
    category.style.backgroundColor = `${spot.color}20`; // 12% opacity
    category.style.color = spot.color;
    image.src = spot.img;
    image.alt = spot.name;

    // Fallback if image fails
    image.onerror = () => {
        image.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%231f2937'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='10'>No Image</text></svg>";
    };

    address.innerHTML = `<h4>위치</h4><p>${spot.address}</p>`;
    phone.innerHTML = `<h4>전화번호</h4><p>${spot.phone || '정보 없음'}</p>`;
    hours.innerHTML = `<h4>영업시간</h4><p>${spot.hours || '정보 없음'}</p>`;
    menu.innerHTML = `<h4>시그니처 / 가격</h4><p>${spot.menu || '정보 없음'}</p>`;
    desc.textContent = spot.desc;

    // Sync bookmark heart in details
    const isBookmarked = bookmarkedSpots.includes(spot.id);
    bookmarkBtn.setAttribute("data-id", spot.id);
    bookmarkBtn.classList.toggle("active", isBookmarked);
    bookmarkBtn.querySelector("i").className = isBookmarked ? "fa-solid fa-heart" : "fa-regular fa-heart";

    // Navigation links mapping
    const naverLink = document.getElementById("link-naver");
    const kakaoLink = document.getElementById("link-kakao");
    const googleLink = document.getElementById("link-google");

    naverLink.href = `https://map.naver.com/v5/search/${encodeURIComponent(spot.name + " " + spot.address)}`;
    kakaoLink.href = `https://map.kakao.com/?q=${encodeURIComponent(spot.name + " " + spot.address)}`;
    googleLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + " " + spot.address)}`;

    // Slide in
    detailPanel.classList.add("open");

    // Pan map to location with offset for sidebar on large screen
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        map.setView([spot.lat - 0.005, spot.lng], 14);
    } else {
        // Shift map slightly right so coordinate is not covered by sidebar
        const targetPoint = map.project([spot.lat, spot.lng], 14).subtract([150, 0]);
        const targetLatLng = map.unproject(targetPoint, 14);
        map.setView(targetLatLng, 14);
    }
}

// Close Spot Detail Sliding Panel
function closeSpotDetail() {
    document.getElementById("detail-panel").classList.remove("open");
    if (activeMarker) {
        const pin = document.getElementById(`pin-${activeMarker}`);
        if (pin) pin.classList.remove("active");
        activeMarker = null;
    }
}

// Render Courses in Sidebar
function renderCourses() {
    const courseContainer = document.getElementById("courses-list");
    courseContainer.innerHTML = "";

    COURSES_DATA.forEach(course => {
        const card = document.createElement("div");
        card.className = `course-card interactive ${activeCourseId === course.id ? 'active' : ''}`;
        card.setAttribute("data-id", course.id);

        // Map spot IDs to Spot Names in sequence
        const spotNames = course.spots.map(id => {
            const spot = SPOTS_DATA.find(s => s.id === id);
            return spot ? spot.name : "";
        });

        card.innerHTML = `
            <h3>${course.name}</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem">${course.desc}</p>
            <div class="course-timeline">
                ${spotNames.map(name => `<div class="timeline-node">${name}</div>`).join('')}
            </div>
            <div class="course-meta">
                <span><i class="fa-solid fa-clock"></i> ${course.time}</span>
                <span>지도로 코스 보기 <i class="fa-solid fa-chevron-right" style="margin-left: 2px"></i></span>
            </div>
        `;

        card.addEventListener("click", () => {
            toggleCourse(course);
        });

        courseContainer.appendChild(card);
    });
}

// Toggle Course display on map (Drawing Polyline paths)
function toggleCourse(course) {
    const isMobile = window.innerWidth <= 768;
    const detailPanel = document.getElementById("detail-panel");

    // Close spot details first if any open
    closeSpotDetail();

    // If clicking already active course, remove it
    if (activeCourseId === course.id) {
        clearActiveCourse();
        return;
    }

    // Set new active course
    activeCourseId = course.id;
    document.querySelectorAll(".course-card").forEach(c => {
        c.classList.toggle("active", c.getAttribute("data-id") === course.id);
    });

    // Remove old polyline if exists
    if (coursePolyline) {
        map.removeLayer(coursePolyline);
    }

    // Gather coordinates for this course
    const coordinates = [];
    const courseMarkers = [];

    // Filter which markers are displayed
    // When a course is selected, we want all markers inside the course to be visible and highlight sequence
    course.spots.forEach((spotId, index) => {
        const spot = SPOTS_DATA.find(s => s.id === spotId);
        if (spot) {
            coordinates.push([spot.lat, spot.lng]);
            courseMarkers.push(markers[spot.id]);
            
            // Temporarily show this spot marker if it was hidden by category filters
            if (!map.hasLayer(markers[spot.id])) {
                markers[spot.id].addTo(map);
            }

            // Animate markers sequentially on selection
            setTimeout(() => {
                const pin = document.getElementById(`pin-${spot.id}`);
                if (pin) {
                    pin.classList.add("active");
                    setTimeout(() => pin.classList.remove("active"), 1200);
                }
            }, index * 250);
        }
    });

    // Draw Polyline path
    coursePolyline = L.polyline(coordinates, {
        color: '#8b5cf6', // Violet pulse
        weight: 5,
        opacity: 0.8,
        dashArray: '8, 12',
        lineCap: 'round'
    }).addTo(map);

    // Zoom Map to fit the entire course path
    const padding = isMobile ? [30, 80] : [100, 50];
    map.fitBounds(coursePolyline.getBounds(), {
        padding: padding,
        maxZoom: 14
    });

    // Notify user with tip
    showCourseBanner(course);
}

// Show a temporary banner with course tips
function showCourseBanner(course) {
    // Check if course toast exists, delete
    const oldToast = document.getElementById("course-toast");
    if (oldToast) oldToast.remove();

    const toast = document.createElement("div");
    toast.id = "course-toast";
    toast.style.cssText = `
        position: absolute;
        bottom: 24px;
        left: calc(var(--sidebar-width) + 24px);
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 1rem 1.25rem;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        max-width: 480px;
        display: flex;
        gap: 0.75rem;
        pointer-events: auto;
        animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    `;

    // Responsive position
    if (window.innerWidth <= 768) {
        toast.style.left = "16px";
        toast.style.right = "16px";
        toast.style.bottom = "42vh";
        toast.style.maxWidth = "calc(100% - 32px)";
    }

    toast.innerHTML = `
        <div style="font-size: 1.5rem; color: #8b5cf6;"><i class="fa-solid fa-compass"></i></div>
        <div style="flex: 1">
            <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 0.2rem; display:flex; justify-content:space-between; align-items:center;">
                ${course.name.replace(/🌊|☕|🥟/, '')} 안내
                <button onclick="document.getElementById('course-toast').remove()" style="background:transparent; border:none; cursor:pointer; color:var(--text-muted);"><i class="fa-solid fa-xmark"></i></button>
            </h4>
            <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4">${course.tips}</p>
        </div>
    `;

    document.body.appendChild(toast);
}

// Clear current active travel route
function clearActiveCourse() {
    activeCourseId = null;
    document.querySelectorAll(".course-card").forEach(c => c.classList.remove("active"));
    
    if (coursePolyline) {
        map.removeLayer(coursePolyline);
        coursePolyline = null;
    }

    const toast = document.getElementById("course-toast");
    if (toast) toast.remove();

    // Reset markers display to sync with current filters
    renderSpots();
}

// Render dynamic mock weather values
function renderWeather() {
    const randomIndex = Math.floor(Math.random() * WEATHER_MESSAGES.length);
    const weather = WEATHER_MESSAGES[randomIndex];

    const widget = document.getElementById("weather-widget-container");
    widget.innerHTML = `
        <div class="weather-widget">
            <div class="weather-info">
                <i class="fa-solid fa-cloud-sun-rain" style="font-size: 1.5rem; color: var(--accent);"></i>
                <div>
                    <div class="weather-temp">${weather.text.split(' ')[weather.text.split(' ').length - 2]}</div>
                    <div class="weather-text">${weather.text.replace(/[\d]+°C/, '').trim()}</div>
                </div>
            </div>
            <div class="weather-details">
                <div>습도 62% • 풍속 3.2m/s</div>
                <div style="color: var(--text-secondary); margin-top: 0.1rem">${weather.desc}</div>
            </div>
        </div>
    `;
}

// Setup Event Listeners
function setupEventListeners() {
    // 1. Sidebar Tabs Toggle
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));

            btn.classList.add("active");
            const targetTab = btn.getAttribute("data-tab");
            document.getElementById(`tab-${targetTab}`).classList.add("active");

            // Handle sub tab-specific render
            if (targetTab === "bookmarks") {
                renderBookmarks();
            } else if (targetTab === "courses") {
                renderCourses();
            }
        });
    });

    // 2. Category Filters Click
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            activeCategory = btn.getAttribute("data-category");
            
            // Clear route path when changing categories
            clearActiveCourse();

            // Rerender markers and lists
            renderSpots();
            closeSpotDetail();
        });
    });

    // 3. Search input filtering with debounce (or simple listener)
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", () => {
        clearActiveCourse();
        renderSpots();
    });

    // 4. Detail Panel close button
    document.getElementById("detail-close-btn").addEventListener("click", closeSpotDetail);

    // 5. Details Bookmark Toggle
    document.getElementById("detail-bookmark").addEventListener("click", function() {
        const spotId = this.getAttribute("data-id");
        toggleBookmark(spotId);
        
        // Sync active spots tab state
        const mainTabCardBtn = document.querySelector(`#spots-list .spot-card[data-id="${spotId}"] .bookmark-btn`);
        if (mainTabCardBtn) {
            const isNowBookmarked = bookmarkedSpots.includes(spotId);
            mainTabCardBtn.classList.toggle("active", isNowBookmarked);
            mainTabCardBtn.querySelector("i").className = isNowBookmarked ? "fa-solid fa-heart" : "fa-regular fa-heart";
        }
    });

    // 6. Theme Toggle click
    document.getElementById("theme-toggle-btn").addEventListener("click", () => {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", currentTheme);
        localStorage.setItem("theme", currentTheme);
        updateThemeIcon();

        // Reload Map Tiles with new theme colors
        loadMapTiles();
        
        // Redraw route if path active
        if (activeCourseId) {
            const currentCourse = COURSES_DATA.find(c => c.id === activeCourseId);
            if (currentCourse) {
                // Remove existing
                if (coursePolyline) map.removeLayer(coursePolyline);
                
                // Collect coords
                const coords = [];
                currentCourse.spots.forEach(id => {
                    const spot = SPOTS_DATA.find(s => s.id === id);
                    if (spot) coords.push([spot.lat, spot.lng]);
                });
                
                // Redraw
                coursePolyline = L.polyline(coords, {
                    color: '#8b5cf6',
                    weight: 5,
                    opacity: 0.8,
                    dashArray: '8, 12',
                    lineCap: 'round'
                }).addTo(map);
            }
        }
    });

    // 7. GPS Find Location Toggle
    document.getElementById("gps-btn").addEventListener("click", locateUser);
}

// Switch FontAwesome Icon for Theme Toggle
function updateThemeIcon() {
    const icon = document.querySelector("#theme-toggle-btn i");
    if (currentTheme === "dark") {
        icon.className = "fa-solid fa-sun";
        icon.title = "라이트 모드로 보기";
    } else {
        icon.className = "fa-solid fa-moon";
        icon.title = "다크 모드로 보기";
    }
}

// User Location Tracking
let userLocationMarker = null;

function locateUser() {
    if (!navigator.geolocation) {
        alert("이 브라우저에서는 GPS 위치 확인을 지원하지 않습니다.");
        return;
    }

    // Add loading indicator class to icon
    const gpsIcon = document.querySelector("#gps-btn i");
    gpsIcon.className = "fa-solid fa-circle-notch fa-spin";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // Remove existing user marker if present
            if (userLocationMarker) {
                map.removeLayer(userLocationMarker);
            }

            // Custom GPS pulse Icon
            const gpsIconHtml = L.divIcon({
                className: 'custom-gps-marker',
                html: `<div class="gps-pulse"></div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });

            userLocationMarker = L.marker([lat, lng], { icon: gpsIconHtml }).addTo(map);
            
            // Fly map to user's location
            map.flyTo([lat, lng], 15, {
                animate: true,
                duration: 1.5
            });

            // Revert GPS icon
            gpsIcon.className = "fa-solid fa-location-crosshairs";
        },
        (error) => {
            console.error("GPS Error: ", error);
            // Default center if GPS failed - Busan Station
            const busanStation = [35.1154, 129.0422];
            map.flyTo(busanStation, 14);
            
            // Toast notification
            alert("위치 정보 접근 권한이 없거나 GPS 신호가 잡히지 않습니다. 부산역 기준으로 이동합니다.");
            gpsIcon.className = "fa-solid fa-location-crosshairs";
        },
        { enableHighAccuracy: true, timeout: 5000 }
    );
}
