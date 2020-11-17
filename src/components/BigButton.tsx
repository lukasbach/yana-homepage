import * as React from 'react';
import cxs from 'cxs';
import { primaryColor } from '../colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const styles = {
  button: cxs({
    backgroundColor: primaryColor,
    padding: '16px 32px',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    ' :nth-child(1)': {
      fontSize: '1.6em',
      marginRight: '10px',
    },
    ' :nth-child(2)': {
      fontSize: '1.6em',
      fontWeight: 'bolder'
    },
    ':hover': {
      backgroundColor: 'white',
      color: primaryColor,
    }
  })
};

export const BigButton: React.FC<{
  icon: IconProp,
}> = props => {
  return (
    <button className={styles.button}>
      <div>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div>
        { props.children }
      </div>
    </button>
  );
};
