import { useState, useRef, useEffect } from 'react';
import { Play, Pause, X } from 'lucide-react';
import vid1 from '../components/Database/Images/vid1 (1).png'
import vid2 from '../components/Database/Images/vid1 (2).png'
import vid3 from '../components/Database/Images/vid1 (3).png'
import vid4 from '../components/Database/Images/vid1 (4).png'
const videos = [
  {
    id: 1,
    src: " https://vimeo.com/800138810",
    title: "Running Shoes Close-up",
    thumbnail: vid3
  },
  {
    id: 2,
    src: " https://vimeo.com/508864124",
    title: "Person Trying On Shoes",
    thumbnail: vid2
  },
  {
    id: 3,
    src: "https://player.vimeo.com/external/494674955.sd.mp4?s=44df2e3d57be9a7cba37f0e432cde59d20b6073a&profile_id=164&oauth2_token_id=57447761",
    title: "Tying Shoelaces",
    thumbnail: vid1
  },
  {
    id: 4,
    src: " https://vimeo.com/508864124",
    title: "Shoes on Treadmill",
    thumbnail: vid4
  },
];

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const openVideo = (video) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  const closeVideo = () => {
    setActiveVideo(null);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, activeVideo]);

  return (
    <div className="video-gallery">
      <h2 className="gallery-title">Shoe Video Showcase</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-item" onClick={() => openVideo(video)}>
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <div className="video-title">{video.title}</div>
          </div>
        ))}
      </div>
      {activeVideo && (
        <div className="video-modal">
          <div className="video-container">
            <video
              ref={videoRef}
              src={activeVideo.src}
              className="active-video"
              playsInline
              onEnded={() => setIsPlaying(false)}
            />
            <button className="close-button" onClick={closeVideo}>
              <X size={24} />
            </button>
            <button className="play-pause-button" onClick={togglePlay}>
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>
          <h3 className="active-video-title">{activeVideo.title}</h3>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;