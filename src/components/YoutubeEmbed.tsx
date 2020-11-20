import * as React from 'react';
import cxs from 'cxs';
import YouTube from 'react-youtube';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { YouTubePlayer } from 'youtube-player/dist/types';

// TODO YANA move to not working when invoked from "Recent items" and potentially from "more"
/*

      <iframe
        width={props.width}
        height={(props.width / 16) * 9}
        style={{
          borderRadius: props.borderRadius + 'px'
        }}
        src={`https://www.youtube.com/embed/${props.videoId}?controls=0&autoplay=1&disablekb=1&loop=1&modestbranding=1&playlist=${props.videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media;"
      />
 */
export const YoutubeEmbed: React.FC<{
  width: number,
  borderRadius: number,
  videoId: string
}> = props => {
  const styles = {
    container: cxs({
      position: 'relative'
    }),
    overlay: cxs({
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'rgba(0,0,0,.5)',
        color: 'white',
        opacity: 1,
      }
    }),
    overlayPaused: cxs({
      backgroundColor: 'rgba(0,0,0,.5)',
      color: 'white',
      opacity: 1,
    })
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const player = useRef<YouTubePlayer>();

  return (
    <div className={[
      styles.container,
      cxs({
        width: props.width + 'px',
        height: (props.width / 16) * 9 + 'px'
      })
    ].join(' ')}>
      <YouTube
        videoId={props.videoId}
        onReady={e => {
          player.current = e.target;
          e.target.playVideo();
          setTimeout(() => e.target.playVideo(), 1500);
        }}
        onEnd={e => {
          e.target.playVideoAt(0);
          e.target.playVideo();
        }}
        onPause={e => {
          setIsPlaying(false);
        }}
        onPlay={e => setIsPlaying(true)}
        onError={e => e.target.playVideo()}
        opts={{
          width: props.width + 'px',
          height: (props.width / 16) * 9 + 'px',
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            loop: 1,
            modestbranding: 1,
            showinfo: 0,
          }
        }}
        containerClassName={cxs({ borderRadius: props.borderRadius + 'px' })}
        className={cxs({ borderRadius: props.borderRadius + 'px' })}
      />
      <div
        className={[
          styles.overlay,
          !isPlaying && styles.overlayPaused,
          cxs({ borderRadius: props.borderRadius + 'px' })
        ].join(' ')}
        onClick={() => {
          if (player.current) {
            if (isPlaying) {
              player.current.pauseVideo();
            } else {
              player.current.playVideo();
            }
          }
        }}
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </div>
    </div>
  );
};
