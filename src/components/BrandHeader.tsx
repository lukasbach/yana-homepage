import * as React from 'react';
import { primaryColor } from '../colors';
import cxs from 'cxs';

export const BrandHeader: React.FC<{
  tiny?: boolean,
}> = props => {
  const styles = {
    container: cxs({
      overflow: 'hidden'
    }),
    content: cxs({
      backgroundColor: primaryColor,
      height: '200px',
      position: 'relative'
    }),
    contentTiny: cxs({
      height: '130px !important',
    }),
    contentInner: cxs({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 20,
      margin: '2em 18em'
    }),
    svg: cxs({
      transform: 'scale(1.1)',
      width: '100%',
      ' path': {
        fill: primaryColor
      },
      zIndex: 10
    })
  };

  return (
    <div className={styles.container}>
      <div className={[
        styles.content,
        props.tiny ? styles.contentTiny : ''
      ].join(' ')}>
        <div className={styles.contentInner}>
          { props.children }
        </div>
      </div>
      { !props.tiny && (
        <svg viewBox="0 0 1942.23 500" className={styles.svg}>
          <path
            d="M1.23,99c122.39,237.32,222,292.49,295,291,101.66-2.08,128.75-113.56,242-121,167.56-11,239.82,224.35,375,206,141.9-19.27,174.71-293.85,274-287,96.84,6.68,119.39,271.51,224,277,68.78,3.61,90.62-109.2,190-146,112.67-41.72,247.39,43,341,118V0H6.23S-3.33,99,1.23,99Z"
          />
        </svg>
      )}
    </div>
  );
};
