import { useState, useRef, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import minhaMusica from '/music/Velocities.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);


  const volume = 0.01;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={minhaMusica} />
      <button onClick={togglePlayPause} style={{ background: 'none', border: '0', cursor: 'pointer', color: 'white' }}>
        {isPlaying ? <FaVolumeUp size={25} /> : <FaVolumeMute size={25} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
