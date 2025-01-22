import React from 'react';
import { Music4 } from 'lucide-react';

const SpotifyPlayer = () => {
  return (
    <div className="spotify-player">
      <div className="spotify-header">
        <Music4 className="spotify-icon" />
        <span>Now Playing</span>
      </div>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5KpP2LN299J?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="This love(taylor-swift)"
        className="spotify-iframe"
      />
    </div>
  );
};

export default SpotifyPlayer;