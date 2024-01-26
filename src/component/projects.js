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
    implementation: [
      "친구들과 공유 다이어리를 썻던 추억이 떠올라서 제작하게 된 다이어리 App 입니다.",
      "소셜로그인, 회원가입, 친구 추가, 무한 스크롤, 알림 , 다이어리 제작, 글 & 댓글 (쓰기,수정,삭제),프로필 수정,달력,사진,동영상 등 구현을 했습니다. ",
      "데이터들은 모델 클래스를 활용해 데이터의 구조를 명확하게 유지 보수성을 높였습니다. \n factory 생성자로 JSON을 모델 클래스로 변환하는 중복 코드를 제거했습니다. \n 또한, @JsonSerializable() 어노테이션을 사용해 JSON 직렬화 및 역직렬화 코드를 자동 생성하여, 코드 간결성을 유지하면서 효율적으로 데이터를 처리할 수 있었습니다.",
    ],
    notion:
      "https://animated-tractor-257.notion.site/e5ba9182c4ac42169d7aee51f07f9863",
    github: "https://github.com/so0ng0970/youandi_diary?tab=readme-ov-file",
  },
  {
    name: "MAAP",
    description: "MAAP은 지도에 마커를 통해 추억을 기록하는 App입니다",
    images: [{ img: "assets/images/background2.jpg" }],
    implementation: [
      "회원가입 & 로그인: Firebase를 활용하여 회원가입 및 로그인 기능을 구현하였습니다. 사용자의 정보(비밀번호 제외)는 Firebase의 Authentication과 Cloud Firestore에 저장되었습니다.",
      "소셜 로그인: google sign in 및 Firebase Auth 패키지를 이용하여 구글 소셜 로그인 기능을 구현하였습니다. 소셜 로그인을 통해 인증된 사용자의 정보가 Firestore에 존재하지 않는 경우, 해당 정보는 Firebase의 Authentication과 Cloud Firestore에 저장됩니다.",
      "다이어리 제작 & 친구초대: ",
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
  },
  {
    name: "PORTFOLIO",
    description: "포트폴리오 제작",
    images: [{ img: "assets/images/background2.jpg" }],
    implementation: [
      "회원가입 & 로그인: Firebase를 활용하여 회원가입 및 로그인 기능을 구현하였습니다. 사용자의 정보(비밀번호 제외)는 Firebase의 Authentication과 Cloud Firestore에 저장되었습니다.",
      "소셜 로그인: google sign in 및 Firebase Auth 패키지를 이용하여 구글 소셜 로그인 기능을 구현하였습니다. 소셜 로그인을 통해 인증된 사용자의 정보가 Firestore에 존재하지 않는 경우, 해당 정보는 Firebase의 Authentication과 Cloud Firestore에 저장됩니다.",
      "다이어리 제작: 다이어리의 제목, 커버 사진, 사용자, 날짜 등의 정보를 Cloud Firestore에 저장하였습니다.",
      "다이어리 친구 추가: Cloud Firestore에 저장된 사용자 이메일을 바탕으로 검색 기능을 구현하였습니다. 검색창에 글자를 입력하면 관련된 사용자들이 나타나며, 이를 통해 사용자를 추가할 수 있습니다. 추가된 사용자는 다이어리를 생성하면 Cloud Firestore의 다이어리 컬렉션에 추가됩니다.",
    ],
  },
];
