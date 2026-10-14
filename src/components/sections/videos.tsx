
import React from 'react';
import VideoPlayer from '@/components/ui/video-player';
import { getVideos } from '@/lib/youtube';

const Videos = async () => {
  const videos = await getVideos();
  return (
    <section id="videos" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title section-eyebrow-line">Our Event Video</h2>
          <p className="section-subtitle">
            See our team in action and get a glimpse of the experiences we create.
          </p>
        </div>
        <div className={videos.length > 1 ? 'mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8' : 'flex justify-center'}>
          <div className={videos.length > 1 ? 'contents' : 'w-full max-w-3xl'}>
            {videos.map((video) => (
              <VideoPlayer
                key={video.videoId}
                videoId={video.videoId}
                title={video.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
