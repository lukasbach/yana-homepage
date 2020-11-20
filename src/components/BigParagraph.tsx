import * as React from 'react';
import cxs from 'cxs';

export const BigParagraph: React.FC<{}> = props => {
  const style = cxs({
    fontSize: '1.4em',
    lineHeight: '1.4',
  });

  return (
    <p className={style}>
      { props.children }
    </p>
  );
};
