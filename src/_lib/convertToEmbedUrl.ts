export const converToEmbedUrl = (youtubeUrl: string) => {
  const url = new URL(youtubeUrl);
  const videoId = url.searchParams.get("v");
  return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
};
