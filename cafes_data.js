// Curated Busan Specialty Cafes (200 Shops DB)
const DISTRICTS_DATA = [
    {
        "ko": "중구",
        "en": "Jung-gu",
        "center": [
            35.106,
            129.032
        ],
        "desc": "원도심의 레트로한 노포 감성과 정취 가득한 커피방"
    },
    {
        "ko": "서구",
        "en": "Seo-gu",
        "center": [
            35.101,
            129.019
        ],
        "desc": "송도 해안가와 대학병원 인근의 숨겨진 실력파 로스터리"
    },
    {
        "ko": "동구",
        "en": "Dong-gu",
        "center": [
            35.129,
            129.045
        ],
        "desc": "초량 산복도로의 탁 트인 뷰와 빈티지 카페거리"
    },
    {
        "ko": "영도구",
        "en": "Yeongdo-gu",
        "center": [
            35.08,
            129.065
        ],
        "desc": "부두 창고를 리모델링한 대형 로스터리의 성지"
    },
    {
        "ko": "부산진구",
        "en": "Busanjin-gu",
        "center": [
            35.158,
            129.057
        ],
        "desc": "전포 카페거리로 대표되는 부산 트렌디 힙스터 커피"
    },
    {
        "ko": "동래구",
        "en": "Dongnae-gu",
        "center": [
            35.205,
            129.084
        ],
        "desc": "온천천 카페거리와 역사 깊은 전통 커피 명가"
    },
    {
        "ko": "남구",
        "en": "Nam-gu",
        "center": [
            35.127,
            129.098
        ],
        "desc": "대학가 인근의 활기찬 에스프레소 바와 디저트 핫플"
    },
    {
        "ko": "북구",
        "en": "Buk-gu",
        "center": [
            35.211,
            129.01
        ],
        "desc": "낙동강 일몰 뷰와 정겨운 아파트 숲 숨은 맛집"
    },
    {
        "ko": "해운대구",
        "en": "Haeundae-gu",
        "center": [
            35.163,
            129.163
        ],
        "desc": "해운대 해변과 달맞이길, 우동의 스페셜티 하이엔드 샵"
    },
    {
        "ko": "사하구",
        "en": "Saha-gu",
        "center": [
            35.084,
            128.969
        ],
        "desc": "다대포 낙조와 감천마을의 예술적 정취가 묻어나는 카페"
    },
    {
        "ko": "금정구",
        "en": "Geumjeong-gu",
        "center": [
            35.244,
            129.092
        ],
        "desc": "부산대 대학가와 금정산 자락의 정온한 로스팅 하우스"
    },
    {
        "ko": "강서구",
        "en": "Gangseo-gu",
        "center": [
            35.136,
            128.891
        ],
        "desc": "낙동강 삼각주와 가덕도 인근의 초대형 근외 힐링 뷰"
    },
    {
        "ko": "연제구",
        "en": "Yeonje-gu",
        "center": [
            35.176,
            129.08
        ],
        "desc": "법조타운과 행정 중심지의 깔끔하고 전문적인 오피스 카페"
    },
    {
        "ko": "수영구",
        "en": "Suyeong-gu",
        "center": [
            35.152,
            129.113
        ],
        "desc": "광안대교 뷰와 망미동 골목골목 스페셜티 브루잉 바"
    },
    {
        "ko": "사상구",
        "en": "Sasang-gu",
        "center": [
            35.152,
            128.991
        ],
        "desc": "삼락공원 벚꽃길과 공장지대를 개조한 인더스트리얼 카페"
    },
    {
        "ko": "기장군",
        "en": "Gijang-gun",
        "center": [
            35.244,
            129.223
        ],
        "desc": "동해바다를 정면으로 품은 대형 건축물과 럭셔리 드립바"
    }
];

const CAFES_DATA = [
    {
        "id": "cafe-1",
        "name": "중 엠버 컴퍼니",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.098915,
        "lng": 129.036457,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.7,
        "address": "부산광역시 중구 중앙대로 180번길 28",
        "phone": "051-677-7179",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 3,
            "sweet": 2,
            "body": 4
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 8000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "필터/브루잉",
            "친절한바리스타",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-2",
        "name": "중 단정 소사이어티",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.108797,
        "lng": 129.028158,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.4,
        "address": "부산광역시 중구 가야대로 130번길 34",
        "phone": "051-626-9985",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 4,
            "sweet": 5,
            "body": 5
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 7000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "대형",
            "친절한바리스타",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-3",
        "name": "아우어 스튜디오",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.110974,
        "lng": 129.034417,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.7,
        "address": "부산광역시 중구 달맞이길 271번길 1",
        "phone": "051-100-3248",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 5,
            "body": 1
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 8000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "필터/브루잉",
            "바다전망",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-4",
        "name": "헤리티지 스페이스",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.11119,
        "lng": 129.037765,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.9,
        "address": "부산광역시 중구 낙동남로 64번길 24",
        "phone": "051-685-1956",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 1,
            "sweet": 2,
            "body": 1
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 6500
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "스페셜티",
            "필터커피",
            "바다전망"
        ]
    },
    {
        "id": "cafe-5",
        "name": "잔잔 에스프레소바",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.100269,
        "lng": 129.037732,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.8,
        "address": "부산광역시 중구 기장해안로 193번길 1",
        "phone": "051-725-9527",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 5,
            "sweet": 4,
            "body": 1
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "대형",
            "원두판매",
            "대형매장"
        ]
    },
    {
        "id": "cafe-6",
        "name": "헤리티지 커피바",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.104357,
        "lng": 129.029415,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.2,
        "address": "부산광역시 중구 수영강변로 93번길 20",
        "phone": "051-592-5978",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 3,
            "body": 4
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7500
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "스페셜티",
            "친절한바리스타",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-7",
        "name": "브라운 커피스탠드",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.104136,
        "lng": 129.039321,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.9,
        "address": "부산광역시 중구 온천천로 14번길 9",
        "phone": "051-254-2295",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 4,
            "sweet": 5,
            "body": 3
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 7000
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "주차가능",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-8",
        "name": "웨이브 소사이어티",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.108809,
        "lng": 129.035596,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.4,
        "address": "부산광역시 중구 광안해변로 151번길 32",
        "phone": "051-771-2068",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 3,
            "sweet": 3,
            "body": 4
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 7000
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "대형",
            "재즈음악",
            "바다전망"
        ]
    },
    {
        "id": "cafe-9",
        "name": "스톤 아카이브",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.100644,
        "lng": 129.031686,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.4,
        "address": "부산광역시 중구 온천천로 256번길 24",
        "phone": "051-664-5652",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 2,
            "sweet": 2,
            "body": 4
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 8000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "원두판매",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-10",
        "name": "빈티지 스페이스",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.107534,
        "lng": 129.033906,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.9,
        "address": "부산광역시 중구 광안해변로 287번길 5",
        "phone": "051-669-3634",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 4,
            "sweet": 5,
            "body": 5
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 7000
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "스페셜티",
            "에스프레소바",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-11",
        "name": "중 리버 컴퍼니",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.109376,
        "lng": 129.035284,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.9,
        "address": "부산광역시 중구 온천천로 208번길 2",
        "phone": "051-774-8456",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 5,
            "sweet": 2,
            "body": 4
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 7500
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "대형",
            "대형매장",
            "필터커피"
        ]
    },
    {
        "id": "cafe-12",
        "name": "모먼트 로스터스",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.099476,
        "lng": 129.03904,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.4,
        "address": "부산광역시 중구 해운대해변로 92번길 5",
        "phone": "051-567-8383",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 1,
            "sweet": 4,
            "body": 4
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 7000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "에스프레소",
            "주차가능",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-13",
        "name": "브릭 로스터스",
        "districtKo": "중구",
        "districtEn": "Jung-gu",
        "lat": 35.110908,
        "lng": 129.035521,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.8,
        "address": "부산광역시 중구 달맞이길 216번길 8",
        "phone": "051-581-2343",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 2,
            "sweet": 4,
            "body": 4
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 7000
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "에스프레소",
            "반려동물동반",
            "원두판매"
        ]
    },
    {
        "id": "cafe-14",
        "name": "미드나잇 글라스",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.108482,
        "lng": 129.024964,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.3,
        "address": "부산광역시 서구 기장해안로 290번길 8",
        "phone": "051-676-5042",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 2,
            "body": 1
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 7500
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "대형매장",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-15",
        "name": "서 플랫 스튜디오",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.095666,
        "lng": 129.019631,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.2,
        "address": "부산광역시 서구 달맞이길 149번길 20",
        "phone": "051-217-1207",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 4,
            "body": 1
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 8000
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "대형",
            "대형매장",
            "주차가능"
        ]
    },
    {
        "id": "cafe-16",
        "name": "비하인드 하우스",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.100247,
        "lng": 129.022544,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.5,
        "address": "부산광역시 서구 중앙대로 299번길 13",
        "phone": "051-296-4067",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 1,
            "sweet": 4,
            "body": 2
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 6500
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "에스프레소",
            "에스프레소바",
            "필터커피"
        ]
    },
    {
        "id": "cafe-17",
        "name": "오크 랩",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.096376,
        "lng": 129.014246,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.7,
        "address": "부산광역시 서구 수영강변로 50번길 38",
        "phone": "051-651-6409",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 4,
            "body": 4
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 7000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "대형매장",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-18",
        "name": "샌드 랩",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.105269,
        "lng": 129.024922,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.6,
        "address": "부산광역시 서구 온천천로 133번길 10",
        "phone": "051-344-5435",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 1,
            "sweet": 4,
            "body": 1
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 8000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "대형",
            "에스프레소바",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-19",
        "name": "비하인드 살롱",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.095601,
        "lng": 129.018075,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.8,
        "address": "부산광역시 서구 대학로 193번길 40",
        "phone": "051-689-4505",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 1,
            "sweet": 5,
            "body": 3
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 8000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "필터/브루잉",
            "재즈음악",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-20",
        "name": "오션 포트",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.104678,
        "lng": 129.019199,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.3,
        "address": "부산광역시 서구 낙동남로 251번길 22",
        "phone": "051-975-2884",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 4,
            "sweet": 2,
            "body": 4
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 6000
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "스페셜티",
            "노키즈존",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-21",
        "name": "서 플로우 소사이어티",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.098265,
        "lng": 129.02033,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.6,
        "address": "부산광역시 서구 낙동남로 252번길 25",
        "phone": "051-401-7901",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 1,
            "sweet": 3,
            "body": 5
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 6000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "대형",
            "반려동물동반",
            "주차가능"
        ]
    },
    {
        "id": "cafe-22",
        "name": "서 모던 아틀리에",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.107844,
        "lng": 129.026419,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.6,
        "address": "부산광역시 서구 달맞이길 37번길 20",
        "phone": "051-950-5689",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 5,
            "sweet": 4,
            "body": 1
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 6000
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "스페셜티",
            "친절한바리스타",
            "원두판매"
        ]
    },
    {
        "id": "cafe-23",
        "name": "모먼트 살롱",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.093862,
        "lng": 129.023247,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.5,
        "address": "부산광역시 서구 온천천로 175번길 8",
        "phone": "051-512-4875",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 5,
            "sweet": 4,
            "body": 3
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 7000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "대형",
            "필터커피",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-24",
        "name": "딥 글라스",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.094121,
        "lng": 129.014727,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.7,
        "address": "부산광역시 서구 온천천로 213번길 32",
        "phone": "051-221-6172",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 4,
            "sweet": 4,
            "body": 2
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 6500
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "스페셜티",
            "노키즈존",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-25",
        "name": "단정 에스프레소바",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.093536,
        "lng": 129.016025,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.2,
        "address": "부산광역시 서구 태종로 3번길 12",
        "phone": "051-352-4141",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 4,
            "body": 2
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 8000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "대형",
            "재즈음악",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-26",
        "name": "서 모던 소사이어티",
        "districtKo": "서구",
        "districtEn": "Seo-gu",
        "lat": 35.107111,
        "lng": 129.015763,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.2,
        "address": "부산광역시 서구 수영강변로 151번길 10",
        "phone": "051-101-9942",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 5,
            "sweet": 3,
            "body": 4
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "필터/브루잉",
            "에스프레소바",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-27",
        "name": "선셋 소사이어티",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.136708,
        "lng": 129.04975,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.7,
        "address": "부산광역시 동구 기장해안로 98번길 34",
        "phone": "051-293-4276",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 2,
            "sweet": 5,
            "body": 5
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 8000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "친절한바리스타",
            "필터커피"
        ]
    },
    {
        "id": "cafe-28",
        "name": "딥 로스터스",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.133038,
        "lng": 129.044641,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.4,
        "address": "부산광역시 동구 달맞이길 281번길 12",
        "phone": "051-278-6847",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 3,
            "body": 4
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 8000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "대형",
            "반려동물동반",
            "대형매장"
        ]
    },
    {
        "id": "cafe-29",
        "name": "모던 룸",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.136133,
        "lng": 129.051015,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.4,
        "address": "부산광역시 동구 기장해안로 73번길 18",
        "phone": "051-869-2387",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 2,
            "sweet": 2,
            "body": 1
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 8000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "에스프레소",
            "필터커피",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-30",
        "name": "동 오션 랩",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.129503,
        "lng": 129.043405,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.5,
        "address": "부산광역시 동구 중앙대로 229번길 29",
        "phone": "051-447-1221",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 5,
            "sweet": 4,
            "body": 3
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 6500
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "대형",
            "디저트맛집",
            "바다전망"
        ]
    },
    {
        "id": "cafe-31",
        "name": "동 웨이브 글라스",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.133068,
        "lng": 129.048103,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.2,
        "address": "부산광역시 동구 수영강변로 231번길 22",
        "phone": "051-507-7372",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 2,
            "sweet": 4,
            "body": 1
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 6000
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "오션/전망",
            "원두판매",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-32",
        "name": "동 크래프트 스튜디오",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.131664,
        "lng": 129.037766,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.8,
        "address": "부산광역시 동구 기장해안로 197번길 10",
        "phone": "051-276-7021",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 3,
            "sweet": 3,
            "body": 2
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 6500
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "바다전망",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-33",
        "name": "브리즈 글라스",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.135726,
        "lng": 129.048511,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.6,
        "address": "부산광역시 동구 수영강변로 45번길 7",
        "phone": "051-844-2746",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 4,
            "sweet": 4,
            "body": 4
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 8000
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "스페셜티",
            "재즈음악",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-34",
        "name": "동 애프터 스튜디오",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.129432,
        "lng": 129.041959,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.7,
        "address": "부산광역시 동구 광안해변로 281번길 28",
        "phone": "051-847-5524",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 1,
            "sweet": 3,
            "body": 3
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 7000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "에스프레소",
            "바다전망",
            "대형매장"
        ]
    },
    {
        "id": "cafe-35",
        "name": "브릭 소사이어티",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.129028,
        "lng": 129.040199,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.7,
        "address": "부산광역시 동구 온천천로 220번길 29",
        "phone": "051-133-4957",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 5,
            "sweet": 2,
            "body": 4
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 7500
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "대형",
            "디저트맛집",
            "대형매장"
        ]
    },
    {
        "id": "cafe-36",
        "name": "동 브릭 커피바",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.136097,
        "lng": 129.039513,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.5,
        "address": "부산광역시 동구 광안해변로 89번길 18",
        "phone": "051-357-8358",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 2,
            "sweet": 4,
            "body": 2
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 7000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "스페셜티",
            "필터커피",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-37",
        "name": "필터 컴퍼니",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.124719,
        "lng": 129.052557,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.8,
        "address": "부산광역시 동구 낙동남로 11번길 15",
        "phone": "051-760-2779",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 5,
            "sweet": 3,
            "body": 5
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 7000
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "디저트맛집",
            "바다전망"
        ]
    },
    {
        "id": "cafe-38",
        "name": "동 브리즈 글라스",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.124033,
        "lng": 129.045566,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.8,
        "address": "부산광역시 동구 가야대로 75번길 2",
        "phone": "051-767-5135",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 3,
            "sweet": 2,
            "body": 1
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 8000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "원두판매",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-39",
        "name": "고요 살롱",
        "districtKo": "동구",
        "districtEn": "Dong-gu",
        "lat": 35.129335,
        "lng": 129.040685,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.3,
        "address": "부산광역시 동구 대학로 182번길 33",
        "phone": "051-302-6919",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 4,
            "sweet": 5,
            "body": 4
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "주차가능",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-40",
        "name": "영도 플랫 스튜디오",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.082791,
        "lng": 129.058879,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.1,
        "address": "부산광역시 영도구 광안해변로 175번길 28",
        "phone": "051-264-4116",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 3,
            "sweet": 3,
            "body": 3
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 7000
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "대형",
            "에스프레소바",
            "필터커피"
        ]
    },
    {
        "id": "cafe-41",
        "name": "영도 브라운 글라스",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.087537,
        "lng": 129.058859,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.1,
        "address": "부산광역시 영도구 온천천로 178번길 37",
        "phone": "051-610-1595",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 5,
            "sweet": 3,
            "body": 3
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "필터/브루잉",
            "필터커피",
            "바다전망"
        ]
    },
    {
        "id": "cafe-42",
        "name": "스톤 에스프레소바",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.086004,
        "lng": 129.062861,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.3,
        "address": "부산광역시 영도구 전포대로 24번길 7",
        "phone": "051-886-7087",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 1,
            "sweet": 5,
            "body": 2
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 8000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "필터/브루잉",
            "바다전망",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-43",
        "name": "빈티지 살롱",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.073581,
        "lng": 129.067639,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.3,
        "address": "부산광역시 영도구 중앙대로 193번길 27",
        "phone": "051-326-1671",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 1,
            "sweet": 5,
            "body": 1
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 7500
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "스페셜티",
            "친절한바리스타",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-44",
        "name": "단정 하우스",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.075493,
        "lng": 129.059737,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.5,
        "address": "부산광역시 영도구 낙동남로 157번길 15",
        "phone": "051-349-4128",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 2,
            "sweet": 2,
            "body": 5
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6500
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "에스프레소",
            "필터커피",
            "주차가능"
        ]
    },
    {
        "id": "cafe-45",
        "name": "영도 온도 커피스탠드",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.087594,
        "lng": 129.063042,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.3,
        "address": "부산광역시 영도구 달맞이길 56번길 18",
        "phone": "051-514-5216",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 4,
            "sweet": 3,
            "body": 2
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 7000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "필터/브루잉",
            "원두판매",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-46",
        "name": "잔잔 로스터스",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.078053,
        "lng": 129.061027,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.4,
        "address": "부산광역시 영도구 대학로 153번길 15",
        "phone": "051-979-3655",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 4,
            "sweet": 2,
            "body": 1
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7500
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "친절한바리스타",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-47",
        "name": "영도 블랙 스페이스",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.085791,
        "lng": 129.065404,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.3,
        "address": "부산광역시 영도구 광안해변로 138번길 29",
        "phone": "051-330-1853",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 1,
            "sweet": 2,
            "body": 2
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 7500
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "필터/브루잉",
            "친절한바리스타",
            "주차가능"
        ]
    },
    {
        "id": "cafe-48",
        "name": "영도 헤리티지 룸",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.086302,
        "lng": 129.068738,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.7,
        "address": "부산광역시 영도구 낙동남로 256번길 17",
        "phone": "051-275-5536",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 4,
            "sweet": 5,
            "body": 2
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 7000
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "대형",
            "원두판매",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-49",
        "name": "브릭 룸",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.083293,
        "lng": 129.062725,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.3,
        "address": "부산광역시 영도구 광안해변로 114번길 22",
        "phone": "051-986-7850",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 5,
            "sweet": 5,
            "body": 1
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 8000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "에스프레소",
            "주차가능",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-50",
        "name": "선셋 커피바",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.079998,
        "lng": 129.066548,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.2,
        "address": "부산광역시 영도구 광안해변로 269번길 29",
        "phone": "051-272-9398",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 2,
            "sweet": 3,
            "body": 4
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 6500
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "바다전망",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-51",
        "name": "애프터 글라스",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.073925,
        "lng": 129.061594,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.2,
        "address": "부산광역시 영도구 낙동남로 98번길 5",
        "phone": "051-396-7097",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 2,
            "sweet": 5,
            "body": 5
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 7500
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "에스프레소",
            "친절한바리스타",
            "필터커피"
        ]
    },
    {
        "id": "cafe-52",
        "name": "샌드 로스터스",
        "districtKo": "영도구",
        "districtEn": "Yeongdo-gu",
        "lat": 35.081505,
        "lng": 129.072999,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.4,
        "address": "부산광역시 영도구 대학로 86번길 30",
        "phone": "051-760-3126",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 3,
            "sweet": 3,
            "body": 3
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 6000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "대형",
            "친절한바리스타",
            "필터커피"
        ]
    },
    {
        "id": "cafe-53",
        "name": "부산진 그라운드 아카이브",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.165944,
        "lng": 129.063101,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.2,
        "address": "부산광역시 부산진구 해운대해변로 40번길 12",
        "phone": "051-573-6322",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 2,
            "sweet": 5,
            "body": 4
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 6500
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "필터커피",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-54",
        "name": "부산진 모먼트 룸",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.160551,
        "lng": 129.049333,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.6,
        "address": "부산광역시 부산진구 가야대로 134번길 17",
        "phone": "051-607-5206",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 4,
            "body": 2
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 8000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "에스프레소",
            "에스프레소바",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-55",
        "name": "프레임 랩",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.156353,
        "lng": 129.053715,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.5,
        "address": "부산광역시 부산진구 기장해안로 70번길 14",
        "phone": "051-975-1813",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 2,
            "sweet": 4,
            "body": 3
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6500
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "필터/브루잉",
            "친절한바리스타",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-56",
        "name": "웨이브 로스터스",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.158891,
        "lng": 129.061783,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.2,
        "address": "부산광역시 부산진구 태종로 208번길 22",
        "phone": "051-469-5039",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 2,
            "sweet": 2,
            "body": 1
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 8000
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "에스프레소바",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-57",
        "name": "샌드 커피스탠드",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.159344,
        "lng": 129.063844,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.4,
        "address": "부산광역시 부산진구 온천천로 246번길 35",
        "phone": "051-372-2229",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 3,
            "sweet": 3,
            "body": 4
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 7000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "필터/브루잉",
            "원두판매",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-58",
        "name": "브리즈 살롱",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.161431,
        "lng": 129.059981,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.5,
        "address": "부산광역시 부산진구 태종로 171번길 20",
        "phone": "051-910-9982",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 3,
            "sweet": 3,
            "body": 4
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "반려동물동반",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-59",
        "name": "부산진 헤이즈 로스터스",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.155842,
        "lng": 129.064966,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.4,
        "address": "부산광역시 부산진구 중앙대로 168번길 2",
        "phone": "051-900-7075",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 3,
            "sweet": 2,
            "body": 3
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 7000
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "필터/브루잉",
            "대형매장",
            "주차가능"
        ]
    },
    {
        "id": "cafe-60",
        "name": "부산진 브라운 랩",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.159331,
        "lng": 129.055967,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.2,
        "address": "부산광역시 부산진구 태종로 130번길 12",
        "phone": "051-946-8799",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 4,
            "sweet": 3,
            "body": 5
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "에스프레소바",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-61",
        "name": "오크 포트",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.159045,
        "lng": 129.05423,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.2,
        "address": "부산광역시 부산진구 중앙대로 255번길 16",
        "phone": "051-352-2459",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 1,
            "sweet": 5,
            "body": 5
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 7000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "재즈음악",
            "필터커피"
        ]
    },
    {
        "id": "cafe-62",
        "name": "부산진 브릭 포트",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.153355,
        "lng": 129.061835,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.8,
        "address": "부산광역시 부산진구 해운대해변로 142번길 34",
        "phone": "051-276-6629",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 5,
            "sweet": 4,
            "body": 2
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7000
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "대형",
            "에스프레소바",
            "대형매장"
        ]
    },
    {
        "id": "cafe-63",
        "name": "웨이브 스튜디오",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.159027,
        "lng": 129.052776,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.2,
        "address": "부산광역시 부산진구 낙동남로 132번길 18",
        "phone": "051-599-7897",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 5,
            "sweet": 5,
            "body": 3
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 7500
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "대형",
            "바다전망",
            "주차가능"
        ]
    },
    {
        "id": "cafe-64",
        "name": "피스 에스프레소바",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.158898,
        "lng": 129.057114,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.3,
        "address": "부산광역시 부산진구 수영강변로 161번길 1",
        "phone": "051-227-2554",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 1,
            "sweet": 2,
            "body": 4
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 8000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "필터/브루잉",
            "재즈음악",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-65",
        "name": "필터 로스터스",
        "districtKo": "부산진구",
        "districtEn": "Busanjin-gu",
        "lat": 35.151298,
        "lng": 129.053662,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.9,
        "address": "부산광역시 부산진구 가야대로 216번길 10",
        "phone": "051-600-2897",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 2,
            "sweet": 5,
            "body": 2
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 8000
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "대형",
            "필터커피",
            "주차가능"
        ]
    },
    {
        "id": "cafe-66",
        "name": "엠버 아카이브",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.203426,
        "lng": 129.076612,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.6,
        "address": "부산광역시 동래구 태종로 210번길 12",
        "phone": "051-196-2525",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 5,
            "body": 1
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 7500
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "필터/브루잉",
            "노키즈존",
            "원두판매"
        ]
    },
    {
        "id": "cafe-67",
        "name": "동래 헤이즈 스페이스",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.211352,
        "lng": 129.086806,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.8,
        "address": "부산광역시 동래구 가야대로 282번길 39",
        "phone": "051-260-6576",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 5,
            "sweet": 5,
            "body": 2
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 7000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "주차가능",
            "바다전망"
        ]
    },
    {
        "id": "cafe-68",
        "name": "동래 크림 커피스탠드",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.208884,
        "lng": 129.078355,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.2,
        "address": "부산광역시 동래구 낙동남로 121번길 8",
        "phone": "051-629-6299",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 2,
            "sweet": 5,
            "body": 4
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6000
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "주차가능",
            "바다전망"
        ]
    },
    {
        "id": "cafe-69",
        "name": "동래 딥 스튜디오",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.207071,
        "lng": 129.090826,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.4,
        "address": "부산광역시 동래구 온천천로 41번길 5",
        "phone": "051-524-5781",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 4,
            "body": 3
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 6500
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "에스프레소",
            "조용한분위기",
            "바다전망"
        ]
    },
    {
        "id": "cafe-70",
        "name": "헤리티지 글라스",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.205891,
        "lng": 129.088672,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.1,
        "address": "부산광역시 동래구 태종로 31번길 28",
        "phone": "051-504-6943",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 3,
            "body": 3
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 6500
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "필터커피",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-71",
        "name": "동래 어반 아틀리에",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.209095,
        "lng": 129.083762,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.5,
        "address": "부산광역시 동래구 태종로 71번길 20",
        "phone": "051-447-1712",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 3,
            "body": 4
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 7500
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "바다전망",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-72",
        "name": "질감 랩",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.212365,
        "lng": 129.090134,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.3,
        "address": "부산광역시 동래구 광안해변로 9번길 32",
        "phone": "051-459-6495",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 4,
            "sweet": 4,
            "body": 5
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 7500
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "주차가능",
            "바다전망"
        ]
    },
    {
        "id": "cafe-73",
        "name": "동래 아우어 웍스",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.205124,
        "lng": 129.089165,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.6,
        "address": "부산광역시 동래구 수영강변로 58번길 12",
        "phone": "051-483-8999",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 4,
            "sweet": 4,
            "body": 5
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 6000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "필터/브루잉",
            "대형매장",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-74",
        "name": "크래프트 컴퍼니",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.209491,
        "lng": 129.090481,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.7,
        "address": "부산광역시 동래구 태종로 274번길 23",
        "phone": "051-254-7399",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 4,
            "body": 2
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 8000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "필터/브루잉",
            "친절한바리스타",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-75",
        "name": "코지 랩",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.203646,
        "lng": 129.084168,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.8,
        "address": "부산광역시 동래구 기장해안로 212번길 22",
        "phone": "051-127-2311",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 4,
            "sweet": 2,
            "body": 5
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 6500
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "스페셜티",
            "원두판매",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-76",
        "name": "동래 모먼트 살롱",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.202515,
        "lng": 129.08803,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.3,
        "address": "부산광역시 동래구 대학로 39번길 40",
        "phone": "051-211-8597",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 5,
            "sweet": 5,
            "body": 5
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 7500
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "필터/브루잉",
            "반려동물동반",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-77",
        "name": "동래 미드나잇 살롱",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.199833,
        "lng": 129.078304,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.8,
        "address": "부산광역시 동래구 중앙대로 16번길 21",
        "phone": "051-203-4875",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 5,
            "sweet": 2,
            "body": 3
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 7500
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "필터/브루잉",
            "노키즈존",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-78",
        "name": "동래 클래식 랩",
        "districtKo": "동래구",
        "districtEn": "Dongnae-gu",
        "lat": 35.197707,
        "lng": 129.079491,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.9,
        "address": "부산광역시 동래구 전포대로 281번길 26",
        "phone": "051-480-4455",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 3,
            "sweet": 5,
            "body": 1
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 6500
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "에스프레소바",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-79",
        "name": "선셋 로스터스",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.124438,
        "lng": 129.096282,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.9,
        "address": "부산광역시 남구 가야대로 126번길 13",
        "phone": "051-617-4264",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 2,
            "sweet": 5,
            "body": 2
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 8000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "필터/브루잉",
            "디저트맛집",
            "대형매장"
        ]
    },
    {
        "id": "cafe-80",
        "name": "남 미드나잇 소사이어티",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.131324,
        "lng": 129.096669,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.5,
        "address": "부산광역시 남구 낙동남로 205번길 10",
        "phone": "051-272-3654",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 4,
            "sweet": 3,
            "body": 5
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 6500
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "에스프레소",
            "재즈음악",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-81",
        "name": "잔잔 컴퍼니",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.121716,
        "lng": 129.098152,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.8,
        "address": "부산광역시 남구 해운대해변로 93번길 36",
        "phone": "051-761-8708",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 5,
            "sweet": 4,
            "body": 2
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 6500
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "스페셜티",
            "재즈음악",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-82",
        "name": "어반 스튜디오",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.123842,
        "lng": 129.104834,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.5,
        "address": "부산광역시 남구 가야대로 195번길 22",
        "phone": "051-214-8272",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 1,
            "sweet": 2,
            "body": 3
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 6000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "주차가능",
            "원두판매"
        ]
    },
    {
        "id": "cafe-83",
        "name": "엠버 룸",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.134393,
        "lng": 129.105588,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.7,
        "address": "부산광역시 남구 달맞이길 58번길 33",
        "phone": "051-973-1787",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 4,
            "sweet": 3,
            "body": 2
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7500
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "오션/전망",
            "친절한바리스타",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-84",
        "name": "남 오크 컴퍼니",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.130621,
        "lng": 129.099559,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.5,
        "address": "부산광역시 남구 온천천로 33번길 22",
        "phone": "051-994-4997",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 2,
            "sweet": 5,
            "body": 1
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 8000
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "필터/브루잉",
            "조용한분위기",
            "바다전망"
        ]
    },
    {
        "id": "cafe-85",
        "name": "아우어 커피바",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.131491,
        "lng": 129.101674,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.4,
        "address": "부산광역시 남구 수영강변로 149번길 26",
        "phone": "051-580-4267",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 5,
            "sweet": 5,
            "body": 1
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 7500
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "스페셜티",
            "원두판매",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-86",
        "name": "남 솔트 아카이브",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.119726,
        "lng": 129.098862,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.4,
        "address": "부산광역시 남구 달맞이길 212번길 30",
        "phone": "051-950-1448",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 2,
            "sweet": 5,
            "body": 2
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "주차가능",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-87",
        "name": "남 어반 룸",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.122101,
        "lng": 129.097702,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.5,
        "address": "부산광역시 남구 전포대로 186번길 26",
        "phone": "051-349-3418",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 3,
            "sweet": 2,
            "body": 2
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 8000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "디저트맛집",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-88",
        "name": "남 빈티지 살롱",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.122312,
        "lng": 129.095381,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.7,
        "address": "부산광역시 남구 달맞이길 271번길 38",
        "phone": "051-474-3197",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 2,
            "sweet": 3,
            "body": 4
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 7500
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "스페셜티",
            "친절한바리스타",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-89",
        "name": "고요 랩",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.125046,
        "lng": 129.0985,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.4,
        "address": "부산광역시 남구 광안해변로 116번길 34",
        "phone": "051-587-7102",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 2,
            "sweet": 2,
            "body": 5
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7500
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "대형",
            "원두판매",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-90",
        "name": "남 헤리티지 커피스탠드",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.128126,
        "lng": 129.10274,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.9,
        "address": "부산광역시 남구 해운대해변로 22번길 8",
        "phone": "051-636-8570",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 2,
            "sweet": 5,
            "body": 5
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 7500
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "필터/브루잉",
            "재즈음악",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-91",
        "name": "남 플로우 살롱",
        "districtKo": "남구",
        "districtEn": "Nam-gu",
        "lat": 35.131948,
        "lng": 129.105072,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.4,
        "address": "부산광역시 남구 해운대해변로 57번길 15",
        "phone": "051-823-8826",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 5,
            "body": 2
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6500
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "필터/브루잉",
            "조용한분위기",
            "주차가능"
        ]
    },
    {
        "id": "cafe-92",
        "name": "북 로우 커피바",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.212965,
        "lng": 129.016417,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.5,
        "address": "부산광역시 북구 태종로 8번길 26",
        "phone": "051-672-9335",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 1,
            "sweet": 3,
            "body": 3
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 7000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "재즈음악",
            "대형매장"
        ]
    },
    {
        "id": "cafe-93",
        "name": "헤리티지 웍스",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.204322,
        "lng": 129.013018,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.7,
        "address": "부산광역시 북구 가야대로 173번길 7",
        "phone": "051-754-4630",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 4,
            "body": 1
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 7000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "에스프레소",
            "필터커피",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-94",
        "name": "북 브리즈 컴퍼니",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.204767,
        "lng": 129.007725,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.6,
        "address": "부산광역시 북구 해운대해변로 98번길 40",
        "phone": "051-829-3894",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 4,
            "body": 2
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 8000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "에스프레소바",
            "대형매장"
        ]
    },
    {
        "id": "cafe-95",
        "name": "샌드 에스프레소바",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.208484,
        "lng": 129.017112,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.6,
        "address": "부산광역시 북구 온천천로 239번길 7",
        "phone": "051-326-1556",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 2,
            "body": 2
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 8000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "노키즈존",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-96",
        "name": "피스 하우스",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.211088,
        "lng": 129.016588,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.1,
        "address": "부산광역시 북구 기장해안로 193번길 31",
        "phone": "051-739-9933",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 2,
            "sweet": 3,
            "body": 5
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 6000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "오션/전망",
            "반려동물동반",
            "바다전망"
        ]
    },
    {
        "id": "cafe-97",
        "name": "헤이즈 글라스",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.218809,
        "lng": 129.014516,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.1,
        "address": "부산광역시 북구 가야대로 133번길 12",
        "phone": "051-449-4736",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 1,
            "sweet": 5,
            "body": 2
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7500
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "대형",
            "반려동물동반",
            "바다전망"
        ]
    },
    {
        "id": "cafe-98",
        "name": "오션 컴퍼니",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.210101,
        "lng": 129.016534,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.7,
        "address": "부산광역시 북구 달맞이길 224번길 7",
        "phone": "051-508-7519",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 3,
            "sweet": 5,
            "body": 4
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 7500
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "에스프레소",
            "친절한바리스타",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-99",
        "name": "북 브리즈 하우스",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.217331,
        "lng": 129.007618,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.6,
        "address": "부산광역시 북구 낙동남로 215번길 24",
        "phone": "051-884-2165",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 4,
            "sweet": 5,
            "body": 1
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 8000
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "필터/브루잉",
            "필터커피",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-100",
        "name": "북 오션 스페이스",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.213745,
        "lng": 129.005189,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.7,
        "address": "부산광역시 북구 수영강변로 159번길 6",
        "phone": "051-606-2738",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 3,
            "sweet": 4,
            "body": 5
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 7500
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "에스프레소바",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-101",
        "name": "북 질감 랩",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.212434,
        "lng": 129.005577,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.8,
        "address": "부산광역시 북구 중앙대로 158번길 9",
        "phone": "051-582-7510",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 3,
            "sweet": 2,
            "body": 5
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 8000
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "오션/전망",
            "재즈음악",
            "바다전망"
        ]
    },
    {
        "id": "cafe-102",
        "name": "클래식 커피스탠드",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.207657,
        "lng": 129.002392,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.4,
        "address": "부산광역시 북구 낙동남로 105번길 40",
        "phone": "051-476-7993",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 1,
            "sweet": 2,
            "body": 2
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 6000
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "오션/전망",
            "필터커피",
            "대형매장"
        ]
    },
    {
        "id": "cafe-103",
        "name": "북 브릭 아카이브",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.20916,
        "lng": 129.004447,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.5,
        "address": "부산광역시 북구 태종로 75번길 22",
        "phone": "051-338-3098",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 5,
            "sweet": 2,
            "body": 5
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 8000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "디저트맛집",
            "바다전망"
        ]
    },
    {
        "id": "cafe-104",
        "name": "북 오크 랩",
        "districtKo": "북구",
        "districtEn": "Buk-gu",
        "lat": 35.211099,
        "lng": 129.009635,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.4,
        "address": "부산광역시 북구 광안해변로 85번길 36",
        "phone": "051-770-9877",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 5,
            "sweet": 5,
            "body": 4
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6500
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "바다전망",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-105",
        "name": "고요 에스프레소바",
        "districtKo": "해운대구",
        "districtEn": "Haeundae-gu",
        "lat": 35.15778,
        "lng": 129.159248,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.2,
        "address": "부산광역시 해운대구 태종로 261번길 29",
        "phone": "051-211-4037",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 5,
            "sweet": 3,
            "body": 4
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "오션/전망",
            "노키즈존",
            "바다전망"
        ]
    },
    {
        "id": "cafe-106",
        "name": "해운대 오션 살롱",
        "districtKo": "해운대구",
        "districtEn": "Haeundae-gu",
        "lat": 35.158037,
        "lng": 129.17037,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.8,
        "address": "부산광역시 해운대구 전포대로 178번길 23",
        "phone": "051-202-8347",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 1,
            "sweet": 4,
            "body": 4
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 7500
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "스페셜티",
            "필터커피",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-107",
        "name": "해운대 필터 룸",
        "districtKo": "해운대구",
        "districtEn": "Haeundae-gu",
        "lat": 35.168514,
        "lng": 129.168284,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.7,
        "address": "부산광역시 해운대구 온천천로 73번길 40",
        "phone": "051-851-9586",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 4,
            "body": 5
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6500
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "필터/브루잉",
            "주차가능",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-108",
        "name": "오크 아틀리에",
        "districtKo": "해운대구",
        "districtEn": "Haeundae-gu",
        "lat": 35.155905,
        "lng": 129.164981,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.2,
        "address": "부산광역시 해운대구 광안해변로 196번길 16",
        "phone": "051-587-2101",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 3,
            "sweet": 2,
            "body": 1
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 7500
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "노키즈존",
            "필터커피"
        ]
    },
    {
        "id": "cafe-109",
        "name": "헤리티지 룸",
        "districtKo": "해운대구",
        "districtEn": "Haeundae-gu",
        "lat": 35.161879,
        "lng": 129.16862,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.6,
        "address": "부산광역시 해운대구 낙동남로 72번길 7",
        "phone": "051-679-6477",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 1,
            "sweet": 2,
            "body": 1
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 7500
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "필터/브루잉",
            "친절한바리스타",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-110",
        "name": "해운대 브라운 커피스탠드",
        "districtKo": "해운대구",
        "districtEn": "Haeundae-gu",
        "lat": 35.164242,
        "lng": 129.161777,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.1,
        "address": "부산광역시 해운대구 해운대해변로 207번길 17",
        "phone": "051-468-1628",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 2,
            "sweet": 2,
            "body": 4
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "필터/브루잉",
            "필터커피",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-111",
        "name": "해운대 미드나잇 에스프레소바",
        "districtKo": "해운대구",
        "districtEn": "Haeundae-gu",
        "lat": 35.155495,
        "lng": 129.166024,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.3,
        "address": "부산광역시 해운대구 중앙대로 134번길 10",
        "phone": "051-821-5035",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 3,
            "sweet": 4,
            "body": 4
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 8000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "필터커피",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-112",
        "name": "필터 아카이브",
        "districtKo": "해운대구",
        "districtEn": "Haeundae-gu",
        "lat": 35.160268,
        "lng": 129.168613,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.4,
        "address": "부산광역시 해운대구 가야대로 28번길 16",
        "phone": "051-781-8651",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 2,
            "sweet": 5,
            "body": 5
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "대형",
            "에스프레소바",
            "대형매장"
        ]
    },
    {
        "id": "cafe-113",
        "name": "해운대 질감 랩",
        "districtKo": "해운대구",
        "districtEn": "Haeundae-gu",
        "lat": 35.164603,
        "lng": 129.160458,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.8,
        "address": "부산광역시 해운대구 전포대로 62번길 27",
        "phone": "051-948-5955",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 1,
            "sweet": 2,
            "body": 3
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 8000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "대형",
            "노키즈존",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-114",
        "name": "리버 소사이어티",
        "districtKo": "해운대구",
        "districtEn": "Haeundae-gu",
        "lat": 35.161607,
        "lng": 129.16827,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.4,
        "address": "부산광역시 해운대구 달맞이길 155번길 35",
        "phone": "051-922-4591",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 2,
            "sweet": 5,
            "body": 4
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 6500
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "필터/브루잉",
            "바다전망",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-115",
        "name": "해운대 잔잔 포트",
        "districtKo": "해운대구",
        "districtEn": "Haeundae-gu",
        "lat": 35.156983,
        "lng": 129.158428,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.1,
        "address": "부산광역시 해운대구 가야대로 119번길 29",
        "phone": "051-366-3880",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 1,
            "sweet": 5,
            "body": 3
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 7000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "스페셜티",
            "에스프레소바",
            "원두판매"
        ]
    },
    {
        "id": "cafe-116",
        "name": "해운대 브리즈 아틀리에",
        "districtKo": "해운대구",
        "districtEn": "Haeundae-gu",
        "lat": 35.156203,
        "lng": 129.161413,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.3,
        "address": "부산광역시 해운대구 광안해변로 113번길 18",
        "phone": "051-324-3109",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 2,
            "sweet": 2,
            "body": 4
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 6500
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "대형",
            "조용한분위기",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-117",
        "name": "브릭 랩",
        "districtKo": "사하구",
        "districtEn": "Saha-gu",
        "lat": 35.083446,
        "lng": 128.967296,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.8,
        "address": "부산광역시 사하구 광안해변로 135번길 39",
        "phone": "051-968-6211",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 5,
            "sweet": 2,
            "body": 4
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 8000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "필터커피",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-118",
        "name": "사하 단정 룸",
        "districtKo": "사하구",
        "districtEn": "Saha-gu",
        "lat": 35.082436,
        "lng": 128.9642,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.2,
        "address": "부산광역시 사하구 해운대해변로 68번길 5",
        "phone": "051-926-5152",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 5,
            "sweet": 2,
            "body": 2
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 6000
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "에스프레소",
            "디저트맛집",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-119",
        "name": "블랙 하우스",
        "districtKo": "사하구",
        "districtEn": "Saha-gu",
        "lat": 35.089919,
        "lng": 128.961944,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.3,
        "address": "부산광역시 사하구 기장해안로 153번길 37",
        "phone": "051-389-7241",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 3,
            "sweet": 2,
            "body": 2
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "스페셜티",
            "반려동물동반",
            "원두판매"
        ]
    },
    {
        "id": "cafe-120",
        "name": "사하 샌드 웍스",
        "districtKo": "사하구",
        "districtEn": "Saha-gu",
        "lat": 35.085641,
        "lng": 128.962147,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.3,
        "address": "부산광역시 사하구 광안해변로 64번길 13",
        "phone": "051-471-4417",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 3,
            "sweet": 2,
            "body": 5
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 7500
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "에스프레소",
            "바다전망",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-121",
        "name": "딥 웍스",
        "districtKo": "사하구",
        "districtEn": "Saha-gu",
        "lat": 35.087306,
        "lng": 128.966298,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.9,
        "address": "부산광역시 사하구 낙동남로 80번길 31",
        "phone": "051-634-8504",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 2,
            "sweet": 5,
            "body": 5
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 6000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "대형",
            "재즈음악",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-122",
        "name": "사하 선셋 에스프레소바",
        "districtKo": "사하구",
        "districtEn": "Saha-gu",
        "lat": 35.088071,
        "lng": 128.964568,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.3,
        "address": "부산광역시 사하구 태종로 257번길 35",
        "phone": "051-341-7312",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 4,
            "sweet": 4,
            "body": 4
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "에스프레소바",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-123",
        "name": "모먼트 랩",
        "districtKo": "사하구",
        "districtEn": "Saha-gu",
        "lat": 35.090748,
        "lng": 128.976449,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.4,
        "address": "부산광역시 사하구 낙동남로 35번길 15",
        "phone": "051-836-2304",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 1,
            "sweet": 2,
            "body": 2
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 8000
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "필터/브루잉",
            "조용한분위기",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-124",
        "name": "엠버 랩",
        "districtKo": "사하구",
        "districtEn": "Saha-gu",
        "lat": 35.082436,
        "lng": 128.976004,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.4,
        "address": "부산광역시 사하구 낙동남로 72번길 7",
        "phone": "051-155-2831",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 2,
            "sweet": 2,
            "body": 3
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "에스프레소",
            "에스프레소바",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-125",
        "name": "사하 플랫 스페이스",
        "districtKo": "사하구",
        "districtEn": "Saha-gu",
        "lat": 35.079837,
        "lng": 128.972198,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.7,
        "address": "부산광역시 사하구 기장해안로 231번길 2",
        "phone": "051-652-8185",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 3,
            "sweet": 3,
            "body": 4
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 8000
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "에스프레소바",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-126",
        "name": "사하 크림 커피스탠드",
        "districtKo": "사하구",
        "districtEn": "Saha-gu",
        "lat": 35.083431,
        "lng": 128.963792,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.2,
        "address": "부산광역시 사하구 대학로 240번길 39",
        "phone": "051-241-6252",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 5,
            "sweet": 4,
            "body": 2
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "필터/브루잉",
            "원두판매",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-127",
        "name": "플랫 로스터스",
        "districtKo": "사하구",
        "districtEn": "Saha-gu",
        "lat": 35.085028,
        "lng": 128.972966,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.6,
        "address": "부산광역시 사하구 태종로 44번길 32",
        "phone": "051-858-2612",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 1,
            "sweet": 5,
            "body": 3
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 6500
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "오션/전망",
            "에스프레소바",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-128",
        "name": "사하 딥 웍스",
        "districtKo": "사하구",
        "districtEn": "Saha-gu",
        "lat": 35.086291,
        "lng": 128.964779,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.7,
        "address": "부산광역시 사하구 중앙대로 32번길 24",
        "phone": "051-544-4716",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 3,
            "sweet": 3,
            "body": 4
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 7500
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "스페셜티",
            "원두판매",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-129",
        "name": "금정 스톤 글라스",
        "districtKo": "금정구",
        "districtEn": "Geumjeong-gu",
        "lat": 35.23627,
        "lng": 129.08979,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.8,
        "address": "부산광역시 금정구 달맞이길 290번길 25",
        "phone": "051-377-3332",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 4,
            "sweet": 2,
            "body": 1
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "필터/브루잉",
            "필터커피",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-130",
        "name": "금정 그라운드 스페이스",
        "districtKo": "금정구",
        "districtEn": "Geumjeong-gu",
        "lat": 35.239922,
        "lng": 129.099717,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.5,
        "address": "부산광역시 금정구 온천천로 181번길 40",
        "phone": "051-420-8009",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 4,
            "sweet": 5,
            "body": 4
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 6000
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "대형",
            "에스프레소바",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-131",
        "name": "오크 살롱",
        "districtKo": "금정구",
        "districtEn": "Geumjeong-gu",
        "lat": 35.246156,
        "lng": 129.088155,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.7,
        "address": "부산광역시 금정구 온천천로 6번길 15",
        "phone": "051-737-4186",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 1,
            "sweet": 5,
            "body": 3
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 6500
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "오션/전망",
            "원두판매",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-132",
        "name": "코지 에스프레소바",
        "districtKo": "금정구",
        "districtEn": "Geumjeong-gu",
        "lat": 35.251308,
        "lng": 129.092744,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.1,
        "address": "부산광역시 금정구 온천천로 226번길 38",
        "phone": "051-318-6308",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 2,
            "sweet": 2,
            "body": 4
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "필터/브루잉",
            "주차가능",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-133",
        "name": "엠버 하우스",
        "districtKo": "금정구",
        "districtEn": "Geumjeong-gu",
        "lat": 35.242694,
        "lng": 129.098234,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.3,
        "address": "부산광역시 금정구 중앙대로 99번길 36",
        "phone": "051-119-8775",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 3,
            "sweet": 4,
            "body": 5
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 8000
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "대형",
            "노키즈존",
            "필터커피"
        ]
    },
    {
        "id": "cafe-134",
        "name": "금정 브라운 에스프레소바",
        "districtKo": "금정구",
        "districtEn": "Geumjeong-gu",
        "lat": 35.247789,
        "lng": 129.090153,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.4,
        "address": "부산광역시 금정구 기장해안로 290번길 15",
        "phone": "051-413-8508",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 4,
            "sweet": 3,
            "body": 5
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 6500
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "필터커피",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-135",
        "name": "금정 브라운 아카이브",
        "districtKo": "금정구",
        "districtEn": "Geumjeong-gu",
        "lat": 35.243695,
        "lng": 129.08662,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.5,
        "address": "부산광역시 금정구 대학로 233번길 16",
        "phone": "051-788-1820",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 1,
            "sweet": 4,
            "body": 1
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 6000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "에스프레소",
            "대형매장",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-136",
        "name": "헤이즈 랩",
        "districtKo": "금정구",
        "districtEn": "Geumjeong-gu",
        "lat": 35.243339,
        "lng": 129.099398,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.5,
        "address": "부산광역시 금정구 온천천로 41번길 16",
        "phone": "051-981-1234",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 5,
            "sweet": 2,
            "body": 4
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 6000
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "필터커피",
            "원두판매"
        ]
    },
    {
        "id": "cafe-137",
        "name": "금정 프레임 로스터스",
        "districtKo": "금정구",
        "districtEn": "Geumjeong-gu",
        "lat": 35.251006,
        "lng": 129.094487,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.8,
        "address": "부산광역시 금정구 태종로 250번길 19",
        "phone": "051-959-6457",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 3,
            "sweet": 2,
            "body": 5
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 8000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "오션/전망",
            "조용한분위기",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-138",
        "name": "테라 포트",
        "districtKo": "금정구",
        "districtEn": "Geumjeong-gu",
        "lat": 35.249996,
        "lng": 129.095735,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.1,
        "address": "부산광역시 금정구 중앙대로 130번길 1",
        "phone": "051-867-1214",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 2,
            "body": 1
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 8000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "오션/전망",
            "조용한분위기",
            "바다전망"
        ]
    },
    {
        "id": "cafe-139",
        "name": "로우 하우스",
        "districtKo": "금정구",
        "districtEn": "Geumjeong-gu",
        "lat": 35.244325,
        "lng": 129.086135,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.4,
        "address": "부산광역시 금정구 가야대로 188번길 4",
        "phone": "051-819-1932",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 3,
            "sweet": 2,
            "body": 4
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 6000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "주차가능",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-140",
        "name": "금정 노마드 소사이어티",
        "districtKo": "금정구",
        "districtEn": "Geumjeong-gu",
        "lat": 35.237048,
        "lng": 129.096253,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.8,
        "address": "부산광역시 금정구 가야대로 79번길 33",
        "phone": "051-431-2458",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 3,
            "sweet": 5,
            "body": 2
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "대형매장",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-141",
        "name": "강서 잔잔 글라스",
        "districtKo": "강서구",
        "districtEn": "Gangseo-gu",
        "lat": 35.142168,
        "lng": 128.884271,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.9,
        "address": "부산광역시 강서구 온천천로 170번길 5",
        "phone": "051-790-3893",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 3,
            "sweet": 2,
            "body": 4
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 7000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "바다전망",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-142",
        "name": "강서 브라운 포트",
        "districtKo": "강서구",
        "districtEn": "Gangseo-gu",
        "lat": 35.141956,
        "lng": 128.897381,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.7,
        "address": "부산광역시 강서구 전포대로 231번길 35",
        "phone": "051-102-5365",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 1,
            "sweet": 3,
            "body": 1
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 6000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "오션/전망",
            "재즈음악",
            "대형매장"
        ]
    },
    {
        "id": "cafe-143",
        "name": "강서 애프터 스페이스",
        "districtKo": "강서구",
        "districtEn": "Gangseo-gu",
        "lat": 35.137962,
        "lng": 128.887435,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.1,
        "address": "부산광역시 강서구 달맞이길 16번길 26",
        "phone": "051-306-2777",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 1,
            "sweet": 4,
            "body": 3
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 8000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "에스프레소",
            "재즈음악",
            "주차가능"
        ]
    },
    {
        "id": "cafe-144",
        "name": "코지 커피바",
        "districtKo": "강서구",
        "districtEn": "Gangseo-gu",
        "lat": 35.135264,
        "lng": 128.885292,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.2,
        "address": "부산광역시 강서구 낙동남로 259번길 4",
        "phone": "051-702-3635",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 5,
            "sweet": 4,
            "body": 2
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "조용한분위기",
            "필터커피"
        ]
    },
    {
        "id": "cafe-145",
        "name": "엠버 포트",
        "districtKo": "강서구",
        "districtEn": "Gangseo-gu",
        "lat": 35.139243,
        "lng": 128.885896,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.7,
        "address": "부산광역시 강서구 수영강변로 119번길 11",
        "phone": "051-466-6586",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 5,
            "sweet": 3,
            "body": 5
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 6000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "에스프레소",
            "반려동물동반",
            "바다전망"
        ]
    },
    {
        "id": "cafe-146",
        "name": "그라운드 웍스",
        "districtKo": "강서구",
        "districtEn": "Gangseo-gu",
        "lat": 35.14238,
        "lng": 128.891619,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.7,
        "address": "부산광역시 강서구 낙동남로 277번길 29",
        "phone": "051-979-9159",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 1,
            "sweet": 5,
            "body": 2
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 7500
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "오션/전망",
            "원두판매",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-147",
        "name": "비하인드 룸",
        "districtKo": "강서구",
        "districtEn": "Gangseo-gu",
        "lat": 35.128336,
        "lng": 128.88349,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.6,
        "address": "부산광역시 강서구 낙동남로 67번길 35",
        "phone": "051-141-9521",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 4,
            "sweet": 5,
            "body": 5
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 6000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "대형",
            "조용한분위기",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-148",
        "name": "잔잔 스페이스",
        "districtKo": "강서구",
        "districtEn": "Gangseo-gu",
        "lat": 35.129751,
        "lng": 128.894273,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.4,
        "address": "부산광역시 강서구 태종로 168번길 28",
        "phone": "051-510-4806",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 1,
            "sweet": 4,
            "body": 4
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 6500
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "디저트맛집",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-149",
        "name": "강서 선셋 랩",
        "districtKo": "강서구",
        "districtEn": "Gangseo-gu",
        "lat": 35.142517,
        "lng": 128.886112,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.6,
        "address": "부산광역시 강서구 해운대해변로 254번길 28",
        "phone": "051-122-7623",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 1,
            "sweet": 3,
            "body": 1
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 7500
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "스페셜티",
            "필터커피",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-150",
        "name": "강서 질감 아틀리에",
        "districtKo": "강서구",
        "districtEn": "Gangseo-gu",
        "lat": 35.128848,
        "lng": 128.883874,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.2,
        "address": "부산광역시 강서구 낙동남로 64번길 13",
        "phone": "051-372-4882",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 3,
            "sweet": 3,
            "body": 1
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 8000
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "필터/브루잉",
            "주차가능",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-151",
        "name": "강서 헤리티지 랩",
        "districtKo": "강서구",
        "districtEn": "Gangseo-gu",
        "lat": 35.135604,
        "lng": 128.891766,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.1,
        "address": "부산광역시 강서구 태종로 266번길 7",
        "phone": "051-302-4704",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 1,
            "sweet": 4,
            "body": 4
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 8000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "조용한분위기",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-152",
        "name": "아우어 포트",
        "districtKo": "강서구",
        "districtEn": "Gangseo-gu",
        "lat": 35.137316,
        "lng": 128.883261,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.6,
        "address": "부산광역시 강서구 기장해안로 190번길 39",
        "phone": "051-449-6438",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 3,
            "sweet": 3,
            "body": 3
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 7000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "오션/전망",
            "원두판매",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-153",
        "name": "어반 포트",
        "districtKo": "연제구",
        "districtEn": "Yeonje-gu",
        "lat": 35.180761,
        "lng": 129.079992,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.4,
        "address": "부산광역시 연제구 중앙대로 97번길 36",
        "phone": "051-708-6375",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 3,
            "body": 1
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 8000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "스페셜티",
            "바다전망",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-154",
        "name": "연제 헤리티지 글라스",
        "districtKo": "연제구",
        "districtEn": "Yeonje-gu",
        "lat": 35.182651,
        "lng": 129.083621,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.6,
        "address": "부산광역시 연제구 낙동남로 237번길 39",
        "phone": "051-300-9881",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 3,
            "body": 5
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 6000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "조용한분위기",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-155",
        "name": "코지 스튜디오",
        "districtKo": "연제구",
        "districtEn": "Yeonje-gu",
        "lat": 35.177248,
        "lng": 129.087368,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.7,
        "address": "부산광역시 연제구 가야대로 63번길 29",
        "phone": "051-979-4257",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 1,
            "sweet": 4,
            "body": 3
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 6000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "디저트맛집",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-156",
        "name": "샌드 스페이스",
        "districtKo": "연제구",
        "districtEn": "Yeonje-gu",
        "lat": 35.180711,
        "lng": 129.07424,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.8,
        "address": "부산광역시 연제구 해운대해변로 193번길 36",
        "phone": "051-658-6192",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 3,
            "sweet": 3,
            "body": 5
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 8000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "필터/브루잉",
            "주차가능",
            "바다전망"
        ]
    },
    {
        "id": "cafe-157",
        "name": "헤리티지 커피스탠드",
        "districtKo": "연제구",
        "districtEn": "Yeonje-gu",
        "lat": 35.179599,
        "lng": 129.076554,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.6,
        "address": "부산광역시 연제구 수영강변로 211번길 34",
        "phone": "051-363-7716",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 1,
            "sweet": 3,
            "body": 5
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 6000
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "오션/전망",
            "노키즈존",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-158",
        "name": "딥 스튜디오",
        "districtKo": "연제구",
        "districtEn": "Yeonje-gu",
        "lat": 35.169631,
        "lng": 129.07588,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.2,
        "address": "부산광역시 연제구 온천천로 119번길 36",
        "phone": "051-115-8242",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 2,
            "sweet": 3,
            "body": 5
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 7000
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "필터/브루잉",
            "대형매장",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-159",
        "name": "플로우 컴퍼니",
        "districtKo": "연제구",
        "districtEn": "Yeonje-gu",
        "lat": 35.178183,
        "lng": 129.072663,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.5,
        "address": "부산광역시 연제구 가야대로 153번길 6",
        "phone": "051-606-9902",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 1,
            "sweet": 4,
            "body": 2
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 8000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "필터/브루잉",
            "조용한분위기",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-160",
        "name": "애프터 로스터스",
        "districtKo": "연제구",
        "districtEn": "Yeonje-gu",
        "lat": 35.178107,
        "lng": 129.078653,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.1,
        "address": "부산광역시 연제구 태종로 169번길 9",
        "phone": "051-652-9197",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 2,
            "sweet": 3,
            "body": 4
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 6500
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "스페셜티",
            "원두판매",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-161",
        "name": "브리즈 웍스",
        "districtKo": "연제구",
        "districtEn": "Yeonje-gu",
        "lat": 35.181877,
        "lng": 129.082875,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.3,
        "address": "부산광역시 연제구 해운대해변로 251번길 28",
        "phone": "051-420-4200",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 3,
            "body": 1
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 7500
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "주차가능",
            "원두판매"
        ]
    },
    {
        "id": "cafe-162",
        "name": "연제 리버 소사이어티",
        "districtKo": "연제구",
        "districtEn": "Yeonje-gu",
        "lat": 35.18311,
        "lng": 129.083834,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.6,
        "address": "부산광역시 연제구 수영강변로 90번길 24",
        "phone": "051-277-3381",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 4,
            "sweet": 4,
            "body": 4
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 8000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "오션/전망",
            "에스프레소바",
            "필터커피"
        ]
    },
    {
        "id": "cafe-163",
        "name": "연제 비하인드 아카이브",
        "districtKo": "연제구",
        "districtEn": "Yeonje-gu",
        "lat": 35.170153,
        "lng": 129.078881,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.6,
        "address": "부산광역시 연제구 수영강변로 293번길 30",
        "phone": "051-890-2652",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 5,
            "sweet": 5,
            "body": 1
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "스페셜티",
            "재즈음악",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-164",
        "name": "리버 룸",
        "districtKo": "연제구",
        "districtEn": "Yeonje-gu",
        "lat": 35.177868,
        "lng": 129.081699,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.5,
        "address": "부산광역시 연제구 대학로 145번길 23",
        "phone": "051-339-7781",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 4,
            "sweet": 3,
            "body": 3
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 6500
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "스페셜티",
            "친절한바리스타",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-165",
        "name": "로우 에스프레소바",
        "districtKo": "수영구",
        "districtEn": "Suyeong-gu",
        "lat": 35.147221,
        "lng": 129.105223,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.8,
        "address": "부산광역시 수영구 중앙대로 110번길 12",
        "phone": "051-797-9505",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 5,
            "sweet": 5,
            "body": 5
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 7500
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "스페셜티",
            "에스프레소바",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-166",
        "name": "엠버 웍스",
        "districtKo": "수영구",
        "districtEn": "Suyeong-gu",
        "lat": 35.145494,
        "lng": 129.105663,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.5,
        "address": "부산광역시 수영구 전포대로 102번길 7",
        "phone": "051-309-2598",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 1,
            "sweet": 3,
            "body": 4
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 7500
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "스페셜티",
            "친절한바리스타",
            "주차가능"
        ]
    },
    {
        "id": "cafe-167",
        "name": "수영 오크 스튜디오",
        "districtKo": "수영구",
        "districtEn": "Suyeong-gu",
        "lat": 35.150524,
        "lng": 129.109089,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.5,
        "address": "부산광역시 수영구 온천천로 274번길 34",
        "phone": "051-554-4525",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 4,
            "sweet": 3,
            "body": 2
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 6000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "스페셜티",
            "친절한바리스타",
            "필터커피"
        ]
    },
    {
        "id": "cafe-168",
        "name": "플랫 살롱",
        "districtKo": "수영구",
        "districtEn": "Suyeong-gu",
        "lat": 35.145832,
        "lng": 129.120103,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.6,
        "address": "부산광역시 수영구 달맞이길 82번길 23",
        "phone": "051-726-4148",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 1,
            "sweet": 2,
            "body": 1
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 7000
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "스페셜티",
            "바다전망",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-169",
        "name": "테라 컴퍼니",
        "districtKo": "수영구",
        "districtEn": "Suyeong-gu",
        "lat": 35.159771,
        "lng": 129.109098,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.3,
        "address": "부산광역시 수영구 광안해변로 128번길 33",
        "phone": "051-963-6708",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 5,
            "body": 4
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 6500
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "스페셜티",
            "바다전망",
            "필터커피"
        ]
    },
    {
        "id": "cafe-170",
        "name": "수영 크림 에스프레소바",
        "districtKo": "수영구",
        "districtEn": "Suyeong-gu",
        "lat": 35.158333,
        "lng": 129.113848,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.1,
        "address": "부산광역시 수영구 중앙대로 107번길 26",
        "phone": "051-919-9576",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 2,
            "sweet": 3,
            "body": 1
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 8000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "오션/전망",
            "에스프레소바",
            "대형매장"
        ]
    },
    {
        "id": "cafe-171",
        "name": "가든 아카이브",
        "districtKo": "수영구",
        "districtEn": "Suyeong-gu",
        "lat": 35.147335,
        "lng": 129.111388,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.1,
        "address": "부산광역시 수영구 태종로 40번길 40",
        "phone": "051-903-6358",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 3,
            "sweet": 2,
            "body": 2
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 7500
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "필터/브루잉",
            "노키즈존",
            "바다전망"
        ]
    },
    {
        "id": "cafe-172",
        "name": "크림 랩",
        "districtKo": "수영구",
        "districtEn": "Suyeong-gu",
        "lat": 35.147602,
        "lng": 129.114776,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.1,
        "address": "부산광역시 수영구 태종로 247번길 21",
        "phone": "051-739-7471",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 3,
            "sweet": 2,
            "body": 3
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 7500
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "주차가능",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-173",
        "name": "솔트 살롱",
        "districtKo": "수영구",
        "districtEn": "Suyeong-gu",
        "lat": 35.157648,
        "lng": 129.106271,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.7,
        "address": "부산광역시 수영구 달맞이길 68번길 38",
        "phone": "051-625-9252",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 1,
            "sweet": 3,
            "body": 3
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 6500
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "주차가능",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-174",
        "name": "수영 클래식 로스터스",
        "districtKo": "수영구",
        "districtEn": "Suyeong-gu",
        "lat": 35.155666,
        "lng": 129.106438,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.7,
        "address": "부산광역시 수영구 해운대해변로 115번길 11",
        "phone": "051-851-2509",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 3,
            "sweet": 5,
            "body": 1
        },
        "notes": "생두가 가진 본연의 화사한 꽃 향과 과일 산미를 극대화하는 약배전 싱글오리진 필터 커피가 인상적입니다. 정교하게 계량된 브루잉 차트가 바에 놓여 있어 신뢰가 갑니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "오션/전망",
            "재즈음악",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-175",
        "name": "모먼트 커피바",
        "districtKo": "수영구",
        "districtEn": "Suyeong-gu",
        "lat": 35.144506,
        "lng": 129.110678,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.7,
        "address": "부산광역시 수영구 낙동남로 90번길 4",
        "phone": "051-325-7970",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 1,
            "sweet": 4,
            "body": 1
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 6000
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "스페셜티",
            "친절한바리스타",
            "주차가능"
        ]
    },
    {
        "id": "cafe-176",
        "name": "수영 비하인드 웍스",
        "districtKo": "수영구",
        "districtEn": "Suyeong-gu",
        "lat": 35.155121,
        "lng": 129.109884,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.1,
        "address": "부산광역시 수영구 가야대로 237번길 40",
        "phone": "051-174-3031",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 4,
            "sweet": 2,
            "body": 3
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 8000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "오션/전망",
            "에스프레소바",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-177",
        "name": "사상 포레스트 글라스",
        "districtKo": "사상구",
        "districtEn": "Sasang-gu",
        "lat": 35.158683,
        "lng": 128.991996,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.8,
        "address": "부산광역시 사상구 해운대해변로 283번길 26",
        "phone": "051-424-7277",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 4,
            "sweet": 4,
            "body": 1
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 6500
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "필터/브루잉",
            "반려동물동반",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-178",
        "name": "사상 프레임 랩",
        "districtKo": "사상구",
        "districtEn": "Sasang-gu",
        "lat": 35.147961,
        "lng": 128.994278,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.2,
        "address": "부산광역시 사상구 달맞이길 278번길 26",
        "phone": "051-271-3233",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 4,
            "sweet": 4,
            "body": 2
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 8000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "반려동물동반",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-179",
        "name": "단정 컴퍼니",
        "districtKo": "사상구",
        "districtEn": "Sasang-gu",
        "lat": 35.151682,
        "lng": 128.988164,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.4,
        "address": "부산광역시 사상구 중앙대로 213번길 14",
        "phone": "051-397-1509",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 3,
            "sweet": 4,
            "body": 1
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 7000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "재즈음악",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-180",
        "name": "샌드 포트",
        "districtKo": "사상구",
        "districtEn": "Sasang-gu",
        "lat": 35.15335,
        "lng": 128.996926,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.5,
        "address": "부산광역시 사상구 전포대로 145번길 3",
        "phone": "051-191-4557",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 1,
            "sweet": 2,
            "body": 1
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 6500
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "대형",
            "노키즈존",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-181",
        "name": "사상 오션 포트",
        "districtKo": "사상구",
        "districtEn": "Sasang-gu",
        "lat": 35.15663,
        "lng": 128.983878,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.5,
        "address": "부산광역시 사상구 기장해안로 29번길 15",
        "phone": "051-487-9823",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 3,
            "sweet": 4,
            "body": 4
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 6000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "오션/전망",
            "반려동물동반",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-182",
        "name": "클래식 글라스",
        "districtKo": "사상구",
        "districtEn": "Sasang-gu",
        "lat": 35.150938,
        "lng": 128.986709,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.4,
        "address": "부산광역시 사상구 가야대로 70번길 28",
        "phone": "051-965-6850",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 5,
            "sweet": 4,
            "body": 2
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 7500
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "친절한바리스타",
            "대형매장"
        ]
    },
    {
        "id": "cafe-183",
        "name": "사상 크림 하우스",
        "districtKo": "사상구",
        "districtEn": "Sasang-gu",
        "lat": 35.14616,
        "lng": 128.993688,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.4,
        "address": "부산광역시 사상구 전포대로 177번길 25",
        "phone": "051-141-6239",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 2,
            "sweet": 4,
            "body": 4
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 7500
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "오션/전망",
            "주차가능",
            "원두판매"
        ]
    },
    {
        "id": "cafe-184",
        "name": "스톤 하우스",
        "districtKo": "사상구",
        "districtEn": "Sasang-gu",
        "lat": 35.14791,
        "lng": 128.994749,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.8,
        "address": "부산광역시 사상구 해운대해변로 125번길 12",
        "phone": "051-631-6792",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 2,
            "sweet": 4,
            "body": 2
        },
        "notes": "화려한 베이커리 라인업을 보유하고 있지만 바리스타 크루의 브루잉 추출 숙련도도 탑클래스입니다. 계절마다 시그니처 블렌드를 교체하여 지루하지 않은 선택지를 줍니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (AA)",
                "price": 6500
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "에스프레소",
            "원두판매",
            "디저트맛집"
        ]
    },
    {
        "id": "cafe-185",
        "name": "사상 빈티지 스페이스",
        "districtKo": "사상구",
        "districtEn": "Sasang-gu",
        "lat": 35.150654,
        "lng": 128.989065,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.2,
        "address": "부산광역시 사상구 가야대로 66번길 2",
        "phone": "051-621-8825",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 3,
            "sweet": 4,
            "body": 2
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 7000
            },
            {
                "item": "너티 브라운 라떼 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "노키즈존",
            "주차가능"
        ]
    },
    {
        "id": "cafe-186",
        "name": "노마드 아틀리에",
        "districtKo": "사상구",
        "districtEn": "Sasang-gu",
        "lat": 35.159844,
        "lng": 128.983495,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.8,
        "address": "부산광역시 사상구 가야대로 57번길 40",
        "phone": "051-555-6568",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 5,
            "sweet": 2,
            "body": 5
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 6500
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "반려동물동반",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-187",
        "name": "코지 룸",
        "districtKo": "사상구",
        "districtEn": "Sasang-gu",
        "lat": 35.156696,
        "lng": 128.984571,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.2,
        "address": "부산광역시 사상구 중앙대로 135번길 7",
        "phone": "051-414-3550",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 5,
            "sweet": 3,
            "body": 3
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 7500
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "바다전망",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-188",
        "name": "로우 로스터스",
        "districtKo": "사상구",
        "districtEn": "Sasang-gu",
        "lat": 35.144485,
        "lng": 128.9905,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.6,
        "address": "부산광역시 사상구 가야대로 248번길 13",
        "phone": "051-164-5701",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 4,
            "sweet": 5,
            "body": 3
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 8000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "스페셜티",
            "주차가능",
            "조용한분위기"
        ]
    },
    {
        "id": "cafe-189",
        "name": "기장 선셋 스튜디오",
        "districtKo": "기장군",
        "districtEn": "Gijang-gun",
        "lat": 35.244042,
        "lng": 129.222173,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.6,
        "address": "부산광역시 기장군 전포대로 260번길 14",
        "phone": "051-756-9152",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 4,
            "body": 3
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 7500
            },
            {
                "item": "솔티드 아인슈페너 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "스페셜티",
            "조용한분위기",
            "친절한바리스타"
        ]
    },
    {
        "id": "cafe-190",
        "name": "기장 고요 글라스",
        "districtKo": "기장군",
        "districtEn": "Gijang-gun",
        "lat": 35.239598,
        "lng": 129.219002,
        "category": "handdrip",
        "categoryKo": "필터/브루잉 전문",
        "icon": "fa-filter",
        "color": "#451a03",
        "rating": 4.3,
        "address": "부산광역시 기장군 대학로 108번길 23",
        "phone": "051-646-7160",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 3,
            "sweet": 2,
            "body": 2
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 6000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "필터/브루잉",
            "주차가능",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-191",
        "name": "기장 브릭 아카이브",
        "districtKo": "기장군",
        "districtEn": "Gijang-gun",
        "lat": 35.251967,
        "lng": 129.225804,
        "category": "espresso",
        "categoryKo": "에스프레소 바",
        "icon": "fa-mug-hot",
        "color": "#78350f",
        "rating": 4.5,
        "address": "부산광역시 기장군 달맞이길 9번길 13",
        "phone": "051-746-1336",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Sanremo Cafe Racer",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 3,
            "sweet": 2,
            "body": 1
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7500
            },
            {
                "item": "크림 아몬드 모카 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "에스프레소",
            "바다전망",
            "대형매장"
        ]
    },
    {
        "id": "cafe-192",
        "name": "빈티지 커피스탠드",
        "districtKo": "기장군",
        "districtEn": "Gijang-gun",
        "lat": 35.237584,
        "lng": 129.225719,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.8,
        "address": "부산광역시 기장군 대학로 121번길 40",
        "phone": "051-720-7802",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Kees van der Westen Spirit 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            }
        ],
        "profile": {
            "acidity": 1,
            "nutty": 2,
            "sweet": 3,
            "body": 2
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (게이샤)",
                "price": 7000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "대형",
            "원두판매",
            "대형매장"
        ]
    },
    {
        "id": "cafe-193",
        "name": "블랙 아카이브",
        "districtKo": "기장군",
        "districtEn": "Gijang-gun",
        "lat": 35.24663,
        "lng": 129.22141,
        "category": "bakery",
        "categoryKo": "대형 베이커리",
        "icon": "fa-bread-slice",
        "color": "#b45309",
        "rating": 4.6,
        "address": "부산광역시 기장군 온천천로 264번길 37",
        "phone": "051-461-5019",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            },
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 4,
            "nutty": 4,
            "sweet": 4,
            "body": 3
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (수프리모)",
                "price": 7500
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "대형",
            "친절한바리스타",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-194",
        "name": "잔잔 스튜디오",
        "districtKo": "기장군",
        "districtEn": "Gijang-gun",
        "lat": 35.249637,
        "lng": 129.223317,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.5,
        "address": "부산광역시 기장군 전포대로 9번길 26",
        "phone": "051-728-7275",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Mahlkönig E80 Supreme & EK43"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "디카페인 콜롬비아 수프리모",
                "notes": "밀크초콜릿, 보리, 둥근 마우스필, 디카페인"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 1,
            "sweet": 3,
            "body": 2
        },
        "notes": "약배전부터 강배전까지 스펙트럼이 아주 넓은 필터커피 전문점입니다. 특히 오리가미나 하리오 V60 같은 다양한 드리퍼를 기호에 맞게 선택할 수 있는 재미가 있습니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 3500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 4500
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 6000
            },
            {
                "item": "영도 블루 플로우 (Signature)",
                "price": 5500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "주차가능",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-195",
        "name": "가든 살롱",
        "districtKo": "기장군",
        "districtEn": "Gijang-gun",
        "lat": 35.246089,
        "lng": 129.224408,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.3,
        "address": "부산광역시 기장군 달맞이길 264번길 35",
        "phone": "051-350-3609",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Synesso MVP Hydra 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            },
            {
                "name": "에티오피아 게샤 빌리지 게이샤",
                "notes": "쟈스민, 복숭아, 베르가못, 화사한 산미"
            }
        ],
        "profile": {
            "acidity": 2,
            "nutty": 2,
            "sweet": 5,
            "body": 1
        },
        "notes": "에스프레소 바답게 쫀쫀하게 뽑아낸 에스프레소에 비정제 설탕이 깔려 나옵니다. 첫맛의 강렬한 쌉싸름함 뒤로 퍼지는 캐러멜 같은 단맛의 여운이 매우 깁니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (히말라야)",
                "price": 6000
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "디저트맛집",
            "재즈음악"
        ]
    },
    {
        "id": "cafe-196",
        "name": "딥 살롱",
        "districtKo": "기장군",
        "districtEn": "Gijang-gun",
        "lat": 35.238019,
        "lng": 129.227149,
        "category": "ocean",
        "categoryKo": "오션/전망 뷰맛집",
        "icon": "fa-water",
        "color": "#0369a1",
        "rating": 4.9,
        "address": "부산광역시 기장군 전포대로 68번길 33",
        "phone": "051-126-9688",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Victoria Arduino 388 Black Eagle",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "엘살바도르 핀카 히말라야",
                "notes": "카카오닙스, 허니, 건포도, 긴 피니시"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 4,
            "sweet": 3,
            "body": 5
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (와이칸)",
                "price": 7000
            },
            {
                "item": "버터스카치 밀크웨어 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "오션/전망",
            "원두판매",
            "노키즈존"
        ]
    },
    {
        "id": "cafe-197",
        "name": "애프터 커피스탠드",
        "districtKo": "기장군",
        "districtEn": "Gijang-gun",
        "lat": 35.250001,
        "lng": 129.222791,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.6,
        "address": "부산광역시 기장군 대학로 14번길 16",
        "phone": "051-554-5204",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "약배전 (Light)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mythos One & Mazzer Kony"
        },
        "beans": [
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            },
            {
                "name": "케냐 니에리 AA",
                "notes": "자몽, 다크체리, 토마토, 자일리톨, 시원한 바디"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 2,
            "sweet": 4,
            "body": 4
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5500
            },
            {
                "item": "싱글오리진 필터 커피 (네그라)",
                "price": 7000
            },
            {
                "item": "에스프레소 콘파냐 (Signature)",
                "price": 6500
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "재즈음악",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-198",
        "name": "로우 룸",
        "districtKo": "기장군",
        "districtEn": "Gijang-gun",
        "lat": 35.242988,
        "lng": 129.227162,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.7,
        "address": "부산광역시 기장군 온천천로 175번길 37",
        "phone": "051-283-7737",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "La Marzocco KB90 3-Group",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            },
            {
                "name": "코스타리카 라스 라하스 펠라 네그라",
                "notes": "자두, 포도잼, 흑설탕, 묵직하고 단맛"
            }
        ],
        "profile": {
            "acidity": 3,
            "nutty": 2,
            "sweet": 4,
            "body": 5
        },
        "notes": "오션 뷰가 넓게 보이는 멋진 공간임에도 커피 품질에 소홀함이 없습니다. 직접 스페셜티 원두를 수입/로스팅하여 독창적인 블렌딩 커피를 제공합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6500
            },
            {
                "item": "싱글오리진 필터 커피 (리치)",
                "price": 7500
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7500
            }
        ],
        "tags": [
            "스페셜티",
            "원두판매",
            "반려동물동반"
        ]
    },
    {
        "id": "cafe-199",
        "name": "기장 크림 로스터스",
        "districtKo": "기장군",
        "districtEn": "Gijang-gun",
        "lat": 35.243464,
        "lng": 129.227388,
        "category": "roastery",
        "categoryKo": "스페셜티 로스터리",
        "icon": "fa-fire",
        "color": "#c2410c",
        "rating": 4.9,
        "address": "부산광역시 기장군 해운대해변로 20번길 26",
        "phone": "051-734-4436",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "강배전 (Dark)",
        "gear": {
            "machine": "Slayer Espresso V3 2-Group",
            "grinder": "Mahlkönig EK43S & Mythos Two"
        },
        "beans": [
            {
                "name": "에티오피아 예가체프 아리차 G1",
                "notes": "블루베리, 레몬그라스, 플로럴, 부드러운 산미"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 3,
            "sweet": 4,
            "body": 2
        },
        "notes": "오래된 벽돌 주택을 리모델링한 분위기와 다르게 하이엔드 추출 머신 세팅이 돋보입니다. 묵직하고 밸런스 좋은 다크 로스트 원두의 풍미를 아주 안정적으로 추출합니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4500
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 5000
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 6000
            },
            {
                "item": "싱글오리진 필터 커피 (G1)",
                "price": 7000
            },
            {
                "item": "바닐라빈 빈티지 라떼 (Signature)",
                "price": 7000
            }
        ],
        "tags": [
            "스페셜티",
            "주차가능",
            "에스프레소바"
        ]
    },
    {
        "id": "cafe-200",
        "name": "플랫 아카이브",
        "districtKo": "기장군",
        "districtEn": "Gijang-gun",
        "lat": 35.246333,
        "lng": 129.215768,
        "category": "vintage",
        "categoryKo": "빈티지/주택개조",
        "icon": "fa-house",
        "color": "#15803d",
        "rating": 4.6,
        "address": "부산광역시 기장군 전포대로 49번길 32",
        "phone": "051-411-8037",
        "hours": "10:00 - 22:00 (라스트오더 21:30)",
        "roast": "중배전 (Medium)",
        "gear": {
            "machine": "Faema E71E",
            "grinder": "Anfim SPII & Mazzer ZM"
        },
        "beans": [
            {
                "name": "브라질 다테하 스위트 옐로우",
                "notes": "땅콩버터, 헤이즐넛, 캐러멜, 은은한 산미"
            },
            {
                "name": "콜롬비아 엘 파라이소 리치",
                "notes": "복숭아 요거트, 리치, 멜론, 독특한 아로마"
            },
            {
                "name": "과테말라 와이칸",
                "notes": "밀크초콜릿, 구운 아몬드, 브라운슈가, 오렌지"
            }
        ],
        "profile": {
            "acidity": 5,
            "nutty": 3,
            "sweet": 5,
            "body": 3
        },
        "notes": "이곳의 플랫화이트는 우유 거품의 질감이 비단처럼 매끄럽습니다. 원두의 고소하고 초콜릿 같은 풍미가 고스란히 베어나와 에스프레소 음료 전문가의 솜씨가 느껴집니다.",
        "menu": [
            {
                "item": "에스프레소 (Espresso)",
                "price": 4000
            },
            {
                "item": "아메리카노 (Americano)",
                "price": 4500
            },
            {
                "item": "카페라떼 (Cafe Latte)",
                "price": 5000
            },
            {
                "item": "싱글오리진 필터 커피 (옐로우)",
                "price": 7500
            },
            {
                "item": "시그니처 브론즈 (Signature)",
                "price": 6000
            }
        ],
        "tags": [
            "빈티지/주택개조",
            "반려동물동반",
            "에스프레소바"
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DISTRICTS_DATA, CAFES_DATA };
}
