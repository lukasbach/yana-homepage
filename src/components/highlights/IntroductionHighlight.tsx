import * as React from 'react';
import cxs from 'cxs';
import { YoutubeEmbed } from '../YoutubeEmbed';

// Works with any size of notebook, from a few notes to ten thousands!
export const IntroductionHighlight: React.FC<{}> = props => {
  const styles = {
    container: cxs({
      display: 'flex',
      marginTop: '100px',
      alignItems: 'center',
      '@media (max-width: 1300px)': {
        flexDirection: 'column',
      }
    }),
    right: cxs({
      marginLeft: '3em',
      '> h2': {
        color: '#222',
        fontSize: '4em',
        lineHeight: '1',
        margin: 0,
        fontStyle: 'italic',
        fontWeight: 800,
        '@media (max-width: 1300px)': {
          color: '#fff',
          marginBottom: '.4em',
          marginTop: '.8em'
        }
      },
      '> p': {
        color: 'white',
        fontSize: '1.4em',
        lineHeight: '1.7',
        '@media (min-width: 1800px)': {
          maxWidth: '20em',
        }
      }
    })
  };

  return (
    <div className={styles.container}>
      <div>
        <YoutubeEmbed videoId={'0BUB5IprutU'} width={800} borderRadius={24} />
      </div>
      <div className={styles.right}>
        <h2>Powerful note-taking app</h2>
        <p>
          Yana is a intuitive notebook app that is easy to get started with and free to use.
          Organize your thoughts by tagging, searching and structuring your notes in tree views.
          Scribble in rich text notes, sketch scripts in code editors and more!
        </p>
      </div>
    </div>
  );
};
