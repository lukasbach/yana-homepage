import * as React from 'react';
import cxs from 'cxs';
import { HighlightForm } from './HighlightForm';
import { primaryColor } from '../../colors';

export const HighlightContainer: React.FC<{
  media: React.ReactNode,
  title: React.ReactNode | string,
  text: React.ReactNode | string,
  invert?: boolean,
  form: number,
}> = props => {
  const styles = {
    container: cxs({
      margin: '6em 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    }),
    inner: cxs({
      display: 'flex',
      width: '1200px',
    }),
    media: cxs({
      width: '600px',
      height: '450px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }),
    mediaInner: cxs({
      width: '600px',
      height: '450px',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }),
    text: cxs({
      width: '600px',
      color: 'white',
      alignSelf: 'center',
      '> h4': {
        fontSize: '4em'
      },
      '> p': {
        fontSize: '2em',
        lineHeight: '1.4',
      }
    }),
    textLeft: cxs({
      paddingRight: '100px',
      textAlign: 'right'
    }),
    textRight: cxs({
      paddingLeft: '200px'
    })
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        { props.invert && (
          <div
            className={[
              styles.text,
              styles.textLeft
            ].join(' ')}
          >
            <h4>{ props.title }</h4>
            <p>{ props.text }</p>
          </div>
        ) }
        <div className={styles.media}>
          <HighlightForm color={primaryColor} form={props.form} width={600} />
          <div className={styles.mediaInner}>
            { props.media }
          </div>
        </div>
        { !props.invert && (
          <div
            className={[
              styles.text,
        styles.textRight
            ].join(' ')}
          >
            <h4>{ props.title }</h4>
            <p>{ props.text }</p>
          </div>
        ) }
      </div>
    </div>
  );
};
