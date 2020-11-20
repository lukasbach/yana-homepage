import * as React from 'react';
import brandIcon from '../icons/icon-white.svg';
import cxs from 'cxs';
import { primaryColor } from '../colors';
import Color from 'color';
import GatsbyLink from 'gatsby-link';

export const Navbar: React.FC<{
  canNavigateToHome?: boolean
}> = props => {
  const styles = {
    container: cxs({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: 'white',
      '@media (max-width: 750px)': {
        flexDirection: 'column',
      }
    }),
    left: cxs({
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      '> h1': {
        fontSize: '1.8em',
        margin: '0 0 0 1.4em',
        color: 'white',
        transform: 'translateY(-.2em)'
      },
      '@media (max-width: 1200px)': {
        marginBottom: '2em'
      }
    }),
    leftClickable: cxs({
      cursor: 'pointer',
    }),
    leftAnchor: cxs({
      flexGrow: 1,
      display: 'block',
      border: 'none',
      ':hover h1': {
        color: '#222 !important'
      },
      ':hover svg': {
        color: '#222 !important'
      },
    }),
    right: cxs({
      ' a': {
        textDecoration: 'none',
        border: '4px solid transparent',
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1em',
        borderRadius: '8px',
        cursor: 'pointer',
        padding: '14px 18px',
        outline: 'none',
        ':hover': {
          backgroundColor: Color(primaryColor).darken(.5).toString(),
          color: 'white'
        },
        ':active': {
          backgroundColor: Color(primaryColor).darken(.65).toString(),
          color: 'white',
          // backgroundColor: 'white',
          // color: primaryColor
        },
        ':focus': {
          // borderColor: Color(primaryColor).lighten(.4).toString(),
          // borderColor: 'white'
        }
      },
      ' button': {
      }
    })
  };

  const left = (
    <div className={styles.left + ' ' + (props.canNavigateToHome && styles.leftClickable)}>
      <img
        src={brandIcon}
        width={48}
        alt=""
      />
      <h1>yana</h1>
    </div>
  );

  return (
    <div className={styles.container}>
      { props.canNavigateToHome ? (
        <GatsbyLink to="/" className={styles.leftAnchor}>
          { left }
        </GatsbyLink>
      ) : (
        left
      ) }
      <div className={styles.right}>
        <GatsbyLink to="/download">
          Download
        </GatsbyLink>
        <GatsbyLink to="/contact">
          Contact
        </GatsbyLink>
        <GatsbyLink to="https://github.com/lukasbach/yana" target="_blank">
          GitHub
        </GatsbyLink>
      </div>
    </div>
  );
};
