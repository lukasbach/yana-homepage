import * as React from 'react';
import cxs from 'cxs';

const style = cxs({
  fontSize: '1.4em',
  lineHeight: '1.4',
});

export const BigParagraph: React.FC<{}> = props => {
  return (
    <p className={style}>
      { props.children }
    </p>
  );
};
