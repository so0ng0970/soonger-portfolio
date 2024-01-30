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
    name: "MAAP",
    description: "MAAP은 지도에 마커를 통해 추억을 기록하는 App입니다",
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
    name: "PORTFOLIO",
    description: "포트폴리오 제작",
    images: [
      { img: "assets/project1/main.png" },
      { img: "assets/images/background4-mobile.png" },
      { img: "assets/images/profile.jpg" },
    ],
    content: [
      "- 친구들과 어렸을때 썼던 공유 다이어리가 떠올라서 Flutter로 제작하게 된 App입니다.",
      "- 유지보수 및 중복 코드 최소화를 위해 컴포넌트 파일과 데이터를 모델로 분리하였습니다.",
      "- 상태 관리는 RiverPod provider를 사용하여 처리하였습니다. 이를 통해 상태에 더욱 쉽게 접근할 수 있게 만들었고, 위젯 간에도 상태를 쉽게 공유할 수 있도록 하였습니다.",
      "- Cloud Firestore라는 NoSQL 데이터베이스를 사용하면서, 데이터 구조를 효율적으로 설계하기 위해 고민하며 Collection을 설계했습니다.",
    ],
    implementation: [
      "- '무한 스크롤'로 일정한 데이터만 불러와 원활한 탐색 환경 제공",
      "- '구글 소셜 로그인'을 통한 '간편 로그인 및 회원가입'",
      "- 검색 기능을 통한 '친구 초대'와 '다이어리 작성'",
      "- 백그라운드 및 포그라운드 '알림 서비스'",
      "- '다중 이미지 및 동영상 지원', 날짜별 글 조회를 위한 '달력' 기능",
      "- '프로필 수정' 및 '로그아웃' 기능",
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
];
