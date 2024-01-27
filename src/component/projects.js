export const projects = [
  {
    name: "You & I Diary",
    description:
      "YOU & I Diary은 사용자 또는 다른 사용자와 함께 일상을 기록하는 App입니다",
    images: [
      { img: "assets/project1/main.png" },
      { img: "assets/images/background4-mobile.png" },
      { img: "assets/images/profile.jpg" },
    ],
    content: [
      "- 친구들과 어렸을때 썻던 공유 다이어리가 떠올라서 Flutter로 제작하게 된 App입니다.",
      "- 유지보수 및 중복 코드 최소화를 위해 컴포넌트 파일과 데이터를 모델로 분리하였습니다.",
      "- 상태 관리는 RiverPod provider를 사용하여 처리하였습니다. 이를 통해 상태에 더욱 쉽게 접근할 수 있게 만들었고, 위젯 간에도 상태를 쉽게 공유할 수 있도록 하였습니다.",
      "- Cloud Firestore라는 NoSQL 데이터베이스를 사용하면서, 데이터 구조를 효율적으로 설계하기 위해 고민해서 Collection을 설계했습니다.",
    ],
    implementation: [
      "- '무한 스크롤'로 일정한 데이터만 불러와 원활한 탐색 환경 제공",
      "- '구글 소셜 로그인'을 통한 '간편 로그인 및 회원가입'",
      "- 검색 기능을 통한 '친구 초대'와 '다이어리 작성'",
      "- 백그라운드 및 포그라운드 '알림 서비스'",
      "- '다중 이미지 및 동영상 지원', 날짜별 글 조회를 위한 '달력' 기능",
      "- '프로필 수정' 및 '로그아웃' 기능",
    ],
    notion:
      "https://animated-tractor-257.notion.site/e5ba9182c4ac42169d7aee51f07f9863",
    github: "https://github.com/so0ng0970/youandi_diary?tab=readme-ov-file",
  },
  {
    name: "MAAP",
    description: "MAAP은 지도에 마커를 통해 추억을 기록하는 App입니다",
    images: [{ img: "assets/images/background2.jpg" }],
    content: [
      "회원가입 & 로그인: Firebase를 활용하여 회원가입 및 로그인 기능을 구현하였습니다. 사용자의 정보(비밀번호 제외)는 Firebase의 Authentication과 Cloud Firestore에 저장되었습니다.",
      "소셜 로그인: google sign in 및 Firebase Auth 패키지를 이용하여 구글 소셜 로그인 기능을 구현하였습니다. 소셜 로그인을 통해 인증된 사용자의 정보가 Firestore에 존재하지 않는 경우, 해당 정보는 Firebase의 Authentication과 Cloud Firestore에 저장됩니다.",
      "다이어리 제작 & 친구초대: ",
    ],
    implementation: [
      "친구들과 공유 다이어리를 썻던 추억이 떠올라서 제작하게 된 다이어리 App 입니다.",
      "소셜로그인, 회원가입, 친구 추가, 무한 스크롤, 알림 , 다이어리 제작, 글 & 댓글 (쓰기,수정,삭제),프로필 수정,달력,사진,동영상 등 구현했습니다. ",
      "데이터는 Firebase로 서버를 구축했습니다.그리고 데이터 구조를 명확히 하기 위해 모델 클래스를 사용했고, 중복 코드 제거와 코드 간결성을 위해 factory 생성자와 @JsonSerializable() annotation를 활용했습니다. \n이를 통해 효율적인 데이터 처리와 유지 보수성을 높였습니다.",
      "최대한 중복 코드 제거를 위해서 component 파일에 정리를 했고 ",
    ],
  },
  {
    name: "STOCK'S TALK",
    description: "모의 주식 ",
    images: [{ img: "assets/images/background1.jpg" }],
    implementation: [
      "회원가입 & 로그인: Firebase를 활용하여 회원가입 및 로그인 기능을 구현하였습니다. 사용자의 정보(비밀번호 제외)는 Firebase의 Authentication과 Cloud Firestore에 저장되었습니다.",
      "소셜 로그인: google sign in 및 Firebase Auth 패키지를 이용하여 구글 소셜 로그인 기능을 구현하였습니다. 소셜 로그인을 통해 인증된 사용자의 정보가 Firestore에 존재하지 않는 경우, 해당 정보는 Firebase의 Authentication과 Cloud Firestore에 저장됩니다.",
      "다이어리 제작 & 친구초대: ",
    ],
    content: [
      "친구들과 공유 다이어리를 썻던 추억이 떠올라서 제작하게 된 다이어리 App 입니다.",
      "소셜로그인, 회원가입, 친구 추가, 무한 스크롤, 알림 , 다이어리 제작, 글 & 댓글 (쓰기,수정,삭제),프로필 수정,달력,사진,동영상 등 구현했습니다. ",
      "데이터는 Firebase로 서버를 구축했습니다.그리고 데이터 구조를 명확히 하기 위해 모델 클래스를 사용했고, 중복 코드 제거와 코드 간결성을 위해 factory 생성자와 @JsonSerializable() annotation를 활용했습니다. \n이를 통해 효율적인 데이터 처리와 유지 보수성을 높였습니다.",
      "최대한 중복 코드 제거를 위해서 component 파일에 정리를 했고 ",
    ],
  },
  {
    name: "PORTFOLIO",
    description: "포트폴리오 제작",
    images: [{ img: "assets/images/background2.jpg" }],
    content: [
      "회원가입 & 로그인: Firebase를 활용하여 회원가입 및 로그인 기능을 구현하였습니다. 사용자의 정보(비밀번호 제외)는 Firebase의 Authentication과 Cloud Firestore에 저장되었습니다.",
      "소셜 로그인: google sign in 및 Firebase Auth 패키지를 이용하여 구글 소셜 로그인 기능을 구현하였습니다. 소셜 로그인을 통해 인증된 사용자의 정보가 Firestore에 존재하지 않는 경우, 해당 정보는 Firebase의 Authentication과 Cloud Firestore에 저장됩니다.",
      "다이어리 제작: 다이어리의 제목, 커버 사진, 사용자, 날짜 등의 정보를 Cloud Firestore에 저장하였습니다.",
      "다이어리 친구 추가: Cloud Firestore에 저장된 사용자 이메일을 바탕으로 검색 기능을 구현하였습니다. 검색창에 글자를 입력하면 관련된 사용자들이 나타나며, 이를 통해 사용자를 추가할 수 있습니다. 추가된 사용자는 다이어리를 생성하면 Cloud Firestore의 다이어리 컬렉션에 추가됩니다.",
    ],
    implementation: [
      "친구들과 공유 다이어리를 썻던 추억이 떠올라서 제작하게 된 다이어리 App 입니다.",
      "소셜로그인, 회원가입, 친구 추가, 무한 스크롤, 알림 , 다이어리 제작, 글 & 댓글 (쓰기,수정,삭제),프로필 수정,달력,사진,동영상 등 구현했습니다. ",
      "데이터는 Firebase로 서버를 구축했습니다.그리고 데이터 구조를 명확히 하기 위해 모델 클래스를 사용했고, 중복 코드 제거와 코드 간결성을 위해 factory 생성자와 @JsonSerializable() annotation를 활용했습니다. \n이를 통해 효율적인 데이터 처리와 유지 보수성을 높였습니다.",
      "최대한 중복 코드 제거를 위해서 component 파일에 정리를 했고 ",
    ],
  },
];
