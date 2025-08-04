interface BoardPost {
  _id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  name: string;
}

export async function getBoardPostById(id: string): Promise<BoardPost | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/board/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data as BoardPost;
  } catch (error) {
    console.error("게시글 조회 실패:", error);
    return null;
  }
}
