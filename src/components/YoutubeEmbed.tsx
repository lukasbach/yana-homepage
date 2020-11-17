import * as React from 'react';
import cxs from 'cxs';
import YouTube from 'react-youtube';

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
    })
  };

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
        onReady={e => e.target.playVideo()}
        onEnd={e => e.target.playVideoAt(0)}
        onPause={e => e.target.playVideo()}
        onStateChange={e => e.target.playVideo()}
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
      <div className={styles.overlay} />
    </div>
  );
};
