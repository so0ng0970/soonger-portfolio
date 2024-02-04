export const projects = [
  {
    name: "You & I Diary",
    description:
      "YOU & I Diary은 사용자 또는 다른 사용자와 함께 일상을 기록하는 App입니다",
    images: Array.from({ length: 11 }, (_, i) => ({
      img: `assets/project1/${i + 1}.png`,
    })),
    content: [
      "- 친구들과 어렸을때 썼던 공유 다이어리가 떠올라서 Flutter로 제작하게 된 App입니다.",
      "- 사용자의 편의성과,필요한 기능 위주로 구현하였습니다. 프로젝트 진행 중에 발생한 문제들은 메모장과 노션에 따로 정리하여 체계적으로 해결하였습니다.",
    ],
    implementation: [
      "- 유지보수 및 중복 코드 최소화를 위해 컴포넌트 파일과 데이터를 모델로 분리하였습니다.",
      "- 상태 관리는 RiverPod provider를 사용하여 처리하였습니다. 이를 통해 상태에 더욱 쉽게 접근할 수 있게 만들었고, 위젯 간에도 상태를 쉽게 공유할 수 있도록 하였습니다.",
      "- Cloud Firestore라는 NoSQL 데이터베이스를 사용하면서, 데이터 구조를 효율적으로 설계하기 위해 고민하며 Collection을 설계했습니다.",
    ],
    implement: [
      "무한 스크롤",
      "구글 소셜 로그인",
      "댓글 알림 기능",
      "사진과 동영상 불러오기, 달력, 비디오 제어 기능",
      "글 & 댓글 & 프로필 수정 및 삭제 기능",
    ],
    hoverMessages: [
      "Firestore 데이터베이스와 Infinite_scroll_pagination 패키지를 활용한 '무한 스크롤' 구현했습니다.",
      "Google Sign-In 및 Firebase Auth 패키지를 활용하여 '구글 소셜 로그인' 구현했습니다.",
      " Firebase Cloud Functions와 Firebase Messaging,flutter_local_notifications을 활용하여 '댓글 알림 기능' 구현했습니다.",
      "Image_picker, table_calendar, video_player 패키지를 활용하여 '사진과 동영상 불러오기, 달력 기능, 비디오 제어 기능'을 구현하였고, 달력에서 날짜를 선택하면 해당 날짜의 데이터를 Firestore에서 불러오는 기능을 구현했습니다.",
      "Cloud Firestore에서 데이터를 저장하며, 미디어 파일은 Firebase Storage에 보관 후 그 URL을 Firestore에 기록하고, '글 & 댓글 & 프로필 수정 및 삭제 기능' 구현했습니다.",
    ],
    stack: [
      "• Flutter",
      "• Riverpod",
      "• GoRouter",
      "• JsonSerializable",
      "• Firebase",
    ],
    notion:
      "https://animated-tractor-257.notion.site/e5ba9182c4ac42169d7aee51f07f9863",
    github: "https://github.com/so0ng0970/youandi_diary?tab=readme-ov-file",
  },
  {
    name: "MAAP:",
    description: "MAAP은 지도에 마커를 통해 추억을 기록하는 App입니다",
    images: Array.from({ length: 11 }, (_, i) => ({
      img: `assets/project2/${i + 1}.png`,
    })),
    content: [
      "- 사용자가 원하는 정보나 추억을 지도 위의 마커로 남길 수 있게 Flutter로 제작한 App입니다.",
      "- 지도 기반의 애플리케이션 제작을 하고 싶어서 만든 프로젝트입니다. 프로젝트 진행 중에 발생한 문제들은 메모장과 노션에 따로 정리하여 체계적으로 해결하였습니다.",
    ],
    implementation: [
      "- 'flutter_naver_map' 패키지를 활용하여 지도 기능을 구현하였습니다. 패키지의 예제와 소스 코드를 참조하여 애플리케이션을 제작하였습니다.",
      "- 코드의 중복을 최소화하고 유지보수를 용이하게 하기 위해, 컴포넌트 파일과 데이터를 모델로 분리하여 구조화하였습니다.",
      "- 상태 관리는 'RiverPod-provider'를 활용하였고, 데이터는 'Cloud Firestore'를 통해 저장하였습니다.",
    ],
    implement: [
      "네이버 지도 - 위치",
      "네이버 소셜 로그인",
      "로그인 & 회원가입",
      "마커 생성",
      "글 쓰기,글 수정, 글 삭제",
      "무한 스크롤",
    ],
    hoverMessages: [
      "'flutter_naver_map' 패키지와 'geolocator' 패키지를 활용하여 네이버 지도 구현하였고, 사용자의 현재 위치를 초기 설정 값으로 지정하였습니다.",
      "'Firebase Functions'와 네이버 소셜 로그인 API를 이용하여 네이버 로그인 기능을 구현하였습니다. 이후, 이를 파이어베이스 인증과 연동하였습니다.",
      "'firebase_auth' 패키지를 사용하여 회원가입과 로그인 기능을 구현하였고, 이 과정에서 유효성 검사를 추가하여 사용자의 입력값이 올바른지 확인하였습니다.",
      "'flutter_naver_map' 패키지를 사용하여 지도에 마커를 추가하는 기능을 구현하였습니다. 사용자가 지도의 특정 위치를 탭하면 'NMarker' 클래스를 통해 그 위치에 마커가 생성되며, 생성된 마커는 'NaverMapController'를 이용해 지도에 추가되도록 하였습니다.",
      "'cloud_firestore', 'firebase_storage', 'image_picker' 패키지를 활용하여 글 쓰기, 수정, 삭제 기능을 구현하였습니다.",
      "Firestore 데이터베이스와 'infinite_scroll_pagination' 패키지를 활용하여 '무한 스크롤' 기능을 이용한 글 보기 기능을 구현하였습니다.",
    ],
    stack: [
      "• Flutter",
      "• Riverpod",
      "• Flutter_naver_map",
      "• JsonSerializable",
      "• Firebase",
    ],
    notion:
      "https://animated-tractor-257.notion.site/MAAP-02d9524c7781466caf429e9c2c7dfed9",
    github: "https://github.com/so0ng0970/map_marking",
  },
  {
    name: "WTTR",
    description:
      "WTTR은 Flutter를 활용하여 현재 위치의 날씨를 다양한 이미지로 표현하는 App입니다",
    images: Array.from({ length: 10 }, (_, i) => ({
      img: `assets/project3/${i + 1}.png`,
    })),
    content: [
      "- 'Open Weather'API를 통해 날씨 정보를 보여주는 Flutter로 제작한 App입니다.",
      "- 날씨에 따라 변화하는 UI를 직접 그린 그림을 활용하여 제작하였습니다.",
    ],
    implementation: [
      "- 날씨 API를 활용하는 네트워크 요청에서 'Dio' 라이브러리를 사용함으로써 복잡성을 줄였습니다.",
      "- 모델 클래스와 @JsonSerializable() annotation를 사용해 JSON 코드를 자동 생성하며, API 응답 관리를 효율적이게 만들었습니다.",
      "- Geolocator 패키지를 활용하여 사용자의 휴대폰에 위치 권한을 요청하였고 현재 위치 정보를 받아왔습니다.",
    ],
    implement: [
      "API 데이터 관리",
      "위치 정보 처리",
      "날씨 화면 제",
      "로딩 화면 제작",
    ],
    hoverMessages: [
      "'flutter_naver_map' 패키지와 'geolocator' 패키지를 활용하여 네이버 지도 구현하였고, 사용자의 현재 위치를 초기 설정 값으로 지정하였습니다.",
      "'Firebase Functions'와 네이버 소셜 로그인 API를 이용하여 네이버 로그인 기능을 구현하였습니다. 이후, 이를 파이어베이스 인증과 연동하였습니다.",
      "'firebase_auth' 패키지를 사용하여 회원가입과 로그인 기능을 구현하였고, 이 과정에서 유효성 검사를 추가하여 사용자의 입력값이 올바른지 확인하였습니다.",
      "'flutter_naver_map' 패키지를 사용하여 지도에 마커를 추가하는 기능을 구현하였습니다. 사용자가 지도의 특정 위치를 탭하면 'NMarker' 클래스를 통해 그 위치에 마커가 생성되며, 생성된 마커는 'NaverMapController'를 이용해 지도에 추가되도록 하였습니다.",
      "'cloud_firestore', 'firebase_storage', 'image_picker' 패키지를 활용하여 글 쓰기, 수정, 삭제 기능을 구현하였습니다.",
      "Firestore 데이터베이스와 'infinite_scroll_pagination' 패키지를 활용하여 '무한 스크롤' 기능을 이용한 글 보기 기능을 구현하였습니다.",
    ],
    stack: ["• Flutter", "• JsonSerializable", "• Dio", "• Geolocator"],
    notion:
      "https://animated-tractor-257.notion.site/WTTR-0462309b2c7f4c899aa50b19ae72d854",
    github: "https://github.com/so0ng0970/WTTR",
  },
  {
    name: "STOCK'S TALK",
    description: "관심 주식 추적과 모의 투자 기능이 있는 주식 웹 서비스",
    images: Array.from({ length: 7 }, (_, i) => ({
      img: `assets/project4/${i + 1}.png`,
    })),
    content: [
      "- 팀원들과 협업해서 만든 모의 주식 웹사이트입니다.",
      "- 프로젝트 진행 중에는 노션과 깃허브를 활용하여 각자의 역할, API 명세, 와이어프레임, 그리고 트러블 슈팅 등을 체계적으로 기록하며 작업하였습니다.",
    ],
    implementation: [
      "- 라이브러리를 사용하지 않고 'useEffect' Hook과 CSS를 활용하여 슬라이드 기능을 구현하였고, 'IntersectionObserver' API를 이용하여 무한 스크롤 기능을 구현하였습니다.",
      "- 서버 상태 관리 라이브러리인 'React-Query'를 활용하게 되었습니다. 'React-Query'를 사용하니 코드가 더 간결해지고 작업이 편리해져서 이를 배우고 사용하는 경험이 좋았습니다.",
      "- 'eslint'와 'prettier'를 사용하여 코드를 깔끔하게 정리하고 일관성 있게 구현하였습니다.",
    ],
    implement: [
      "커뮤니티,계좌개설 CRUD",
      "좋아요,관심 종목",
      "SSE(Server-Sent-Event) 알람,푸시 알림",
      "계좌 정보, 뱃지 업적, 랭킹보드 정보",
      "마이페이지 유저 정보 수정",
    ],
    hoverMessages: [
      "'react-query'의 'useMutation'과 'useQueryClient', 그리고 'react-router-dom'의 'useNavigate'와 'useParams'를 활용하여 기능을 구현하였습니다.",
      "클릭 이벤트를 부여하여, 사용자가 관심 종목을 클릭하면 해당 종목의 코드를 상태로 설정하는 방식으로 좋아요 기능을 구현하였습니다.",
      "SSE(Server-Sent-Event)를 활용하여 실시간으로 알림 데이터를 받아오는 기능을 구현하였습니다. 또한, 알림이 쌓이는 개수를 로컬 스토리지에 저장하여 데이터가 지속적으로 유지되도록 처리하였습니다.",
      "뱃지 기능과 계좌 정보, 랭킹보드 정보는 'useQuery'를 활용하여 API로부터 데이터를 불러오는 방식으로 구현하였습니다.",
      "'react-query'의 'useMutation'과 'useQueryClient'를 활용하여 마이페이지의 정보 수정 기능을 구현하였습니다. 사용자의 닉네임과 자기소개를 수정할 수 있도록 상태를 관리하였고, 해당 정보를 수정하는 요청을 보낼 때는 함수를 통해 API 요청을 보내도록 하였습니다. 요청이 성공적으로 처리되면 쿼리를 무효화하여 최신 데이터로 업데이트하도록 하였습니다.",
    ],
    stack: [
      "• Javascript",
      "• React",
      "• React Query",
      "• Axios",
      "• Styled-components",
    ],
    notion:
      "https://animated-tractor-257.notion.site/STOCK-S-TALK-c2309882527741e186acb0804bc94374",
    github: "https://github.com/innovation-final/Front?tab=readme-ov-file",
  },
];
