import * as React from 'react';
import cxs from 'cxs';
import Color from 'color';
import brandIcon from '../icons/icon-white.svg';
import GatsbyLink from 'gatsby-link';

export const Footer: React.FC<{}> = props => {
  const styles = {
    container: cxs({
      backgroundColor: Color('#222').darken(.1).toString(),
      borderRadius: '16px',
      margin: '5em 2em 1em 2em',
      padding: '1.4em 2.4em',
      color: 'white',
      fontSize: '1.4em',
      display: 'flex',
      '@media (max-width: 1100px)': {
        flexDirection: 'column',
        '> div': {
          margin: '1em 0 0 0'
        }
      }
    }),
    left: cxs({
      flexGrow: 1,
      '> div': {
        display: 'flex',
        alignItems: 'center',
        '> span': {
          marginLeft: '24px'
        }
      }
    }),
    anchorColumn: cxs({
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '64px',
      width: '7em',
      '> h4': {
        margin: '0 0 16px 0',
      },
      '> a': {
        textDecoration: 'none',
        border: 'none',
        marginBottom: '10px',
        fontSize: '.7em',
        fontWeight: 'lighter',
        color: '#aaa !important',
        ':hover': {
          color: '#fff !important'
        }
      }
    }),
    footerLine: cxs({
      color: '#aaa !important',
      fontWeight: 'lighter',
      backgroundColor: Color('#222').darken(.1).toString(),
      padding: '.8em 2.2em',
      display: 'flex',
      '> :nth-child(1)': {
        flexGrow: 1
      },
      ' a': {
        fontWeight: 'lighter',
      },
      ' a:visited': {
        fontWeight: 'lighter',
      },
    })
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div>
            <img
              src={brandIcon}
              width={24}
              alt=""
            />
            <span>yana</span>
          </div>
        </div>
        <div className={styles.anchorColumn}>
          <h4>App</h4>
          <GatsbyLink to="/download">Download</GatsbyLink>
          <a href="https://github.com/lukasbach/yana/issues" target="_blank">Issues</a>
          <GatsbyLink to="/contact">Contact</GatsbyLink>
        </div>
        <div className={styles.anchorColumn}>
          <h4>Development</h4>
          <a href="https://github.com/lukasbach/yana" target="_blank">GitHub Repo</a>
          <a href="https://travis-ci.com/github/lukasbach/yana" target="_blank">Travis</a>
        </div>
        <div className={styles.anchorColumn}>
          <h4>More Projects</h4>
          <a href="https://devsession.js.org" target="_blank">DevSession</a>
          <a href="https://lukasbach.github.io/vileo/" target="_blank">Vileo</a>
          <a href="https://lukasbach.github.io/slyder/" target="_blank">Slyder</a>
          <a href="https://lukasbach.github.io/hexagonopolis/" target="_blank">Hexagonopolis</a>
        </div>
      </div>
      <div className={styles.footerLine}>
        <div>
          &copy; 2020 Lukas Bach - More on <a href="https://lukasbach.com">lukasbach.com</a>
        </div>
        <div>
          Icons by <a href="https://fontawesome.com" target="_blank">fontawesome</a> (<a href="https://fontawesome.com/license" target="_blank">License</a>).&emsp;
          <GatsbyLink to="/privacy">Privacy Policy</GatsbyLink>&nbsp;-&nbsp;
          <a href="https://lukasbach.com/impress" target="_blank">Impress</a>
        </div>
      </div>
    </>
  );
};
