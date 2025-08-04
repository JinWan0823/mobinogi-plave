interface MetadataParams {
  page: string;
}

export function getMetaData({ page }: MetadataParams) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

  switch (page) {
    case "notice":
      return {
        title: "공지사항&이벤트",
        description: "모비노기,플레이브 관련 중요 공지사항&이벤트 알림",
        openGraph: {
          title: "공지사항&이벤트",
          description: "모비노기,플레이브 관련 중요 공지사항&이벤트 알림",
          images: [`${baseUrl}/og/home.png`],
        },
        twitter: {
          card: "summary_large_image",
          title: "공지사항&이벤트",
          description: "모비노기,플레이브 관련 중요 공지사항&이벤트 알림",
          images: [`${baseUrl}/og/players.png`],
        },
      };
    case "board":
      return {
        title: "자유게시판",
        description: "질문/꿀팁 공유 또는 필요한 보스/레이드 요청해주세요!",
        openGraph: {
          title: "자유게시판",
          description: "질문/꿀팁 공유 또는 필요한 보스/레이드 요청해주세요!",
          images: [`${baseUrl}/og/home.png`],
        },
        twitter: {
          card: "summary_large_image",
          title: "자유게시판",
          description: "질문/꿀팁 공유 또는 필요한 보스/레이드 요청해주세요!",
          images: [`${baseUrl}/og/home.png`],
        },
      };
    case "guide":
      return {
        title: "공략/꿀팁 동영상",
        description: "관리자용 가이드영상 관리 페이지",
        openGraph: {
          title: "공략/꿀팁 동영상",
          description: "관리자용 가이드영상 관리 페이지",
          images: [`${baseUrl}/og/home.png`],
        },
        twitter: {
          card: "summary_large_image",
          title: "공략/꿀팁 동영상",
          description: "관리자용 가이드영상 관리 페이지",
          images: [`${baseUrl}/og/home.png`],
        },
      };

    case "adm":
      return {
        title: "관리자 로그인",
        description: "관리자 전용 로그인 페이지입니다.",
        openGraph: {
          title: "관리자 로그인",
          description: "관리자 전용 로그인 페이지입니다.",
          images: [`${baseUrl}/og/home.png`],
        },
        twitter: {
          card: "summary_large_image",
          title: "관리자 로그인",
          description: "관리자 전용 로그인 페이지입니다.",
          images: [`${baseUrl}/og/home.png`],
        },
      };

    default:
      return {
        title: "MOBINOGI - PLAVE",
        description:
          "한눈에 보는 모비노기와 플레이브 소식! 모비노기 플레이브 팬 길드 홈페이지",
        openGraph: {
          title: "MOBINOGI - PLAVE",
          description:
            "한눈에 보는 모비노기와 플레이브 소식! 모비노기 플레이브 팬 길드 홈페이지",
          images: [`${baseUrl}/og/home.png`],
        },
        twitter: {
          card: "summary_large_image",
          title: "MOBINOGI - PLAVE",
          description:
            "한눈에 보는 모비노기와 플레이브 소식! 모비노기 플레이브 팬 길드 홈페이지",
          images: [`${baseUrl}/og/home.png`],
        },
      };
  }
}
