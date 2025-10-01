
import React from 'react';
import VideoPlayer from '@/components/ui/video-player';
import { VIDEOS } from '@/lib/constants';

const Videos = () => {
  return (
    <section id="videos" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-4xl font-headline mb-4">Our Videos</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            See our team in action and get a glimpse of the experiences we create.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {VIDEOS.map((video) => (
            <VideoPlayer
              key={video.videoId}
              videoId={video.videoId}
              title={video.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
