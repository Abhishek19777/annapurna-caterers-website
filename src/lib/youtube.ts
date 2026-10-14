import { VIDEOS } from '@/lib/constants';

export type SiteVideo = { videoId: string; title: string };

const decode = (s: string) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");

/**
 * Returns the videos to show on the site.
 *
 * No-code workflow: set YOUTUBE_PLAYLIST_ID (or YOUTUBE_CHANNEL_ID) in the
 * hosting environment. Every video you add to that playlist/channel then
 * appears on the website automatically (refreshed hourly) - no code edits.
 *
 * If neither is set, or YouTube can't be reached, the site falls back to the
 * fixed VIDEOS list in src/lib/constants.ts, so the section never goes empty.
 */
export async function getVideos(limit = 6): Promise<SiteVideo[]> {
  const playlistId = process.env.YOUTUBE_PLAYLIST_ID?.trim();
  const channelId = process.env.YOUTUBE_CHANNEL_ID?.trim();
  const query = playlistId
    ? `playlist_id=${encodeURIComponent(playlistId)}`
    : channelId
      ? `channel_id=${encodeURIComponent(channelId)}`
      : null;

  if (!query) return VIDEOS;

  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?${query}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return VIDEOS;
    const xml = await res.text();

    const videos: SiteVideo[] = [];
    for (const entry of xml.split('<entry>').slice(1)) {
      const id = entry.match(/<yt:videoId>([\w-]{11})<\/yt:videoId>/)?.[1];
      const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1];
      if (id && title) videos.push({ videoId: id, title: decode(title.trim()) });
      if (videos.length >= limit) break;
    }
    return videos.length ? videos : VIDEOS;
  } catch {
    return VIDEOS;
  }
}
