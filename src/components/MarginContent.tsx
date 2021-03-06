import * as React from 'react';
import cxs from 'cxs';

export const MarginContent: React.FC<{}> = props => {
  const styles = {
    container: cxs({
      margin: '2em 0 2em 0',
      display: 'flex',
      justifyContent: 'center',
    }),
    inner: cxs({
      width: '840px',
      color: 'white',
      ' h1': {
        margin: '1em 0 .4em 0',
        fontSize: '3em'
      },
      '@media (max-width: 1100px)': {
        width: '100%',
        margin: '0 1em'
      },
    }),
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        { props.children }
      </div>
    </div>
  );
};
