import * as React from 'react';
import cxs from 'cxs';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { primaryColor } from '../../colors';
import { faApple, faLinux, faUbuntu, faWindows } from '@fortawesome/free-brands-svg-icons';
import { BigButton } from '../BigButton';
import { useLatestRelease } from '../../useLatestRelease';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import GatsbyLink from 'gatsby-link';

export const DownloadHighlight: React.FC<{}> = props => {
  const styles = {
    container: cxs({
      margin: '10em 0 12em 0',
      display: 'flex',
      justifyContent: 'center',
    }),
    inner: cxs({
      width: '840px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }),
    left: cxs({}),
    right: cxs({
      flexGrow: 1,
      width: '350px',
      color: 'white',
      marginLeft: '64px',
      '> h2': {
        fontSize: '2em'
      },
      '> p': {
        marginBottom: '0'
      }
    }),
    downloadButton: cxs({
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

  let icon: IconProp;
  let downloadText: string;
  let downloadUrl: string;

  const release = useLatestRelease();
  const os = typeof window !== 'undefined' ? (navigator.platform || navigator.appVersion || (navigator as any).oscpu).toLowerCase() : '';

  if (os.includes('win') || os.includes('wow')) {
    icon = faWindows;
    downloadText = 'Download for Windows';
    downloadUrl = release.assets.find(asset => asset.name.includes('.exe'))?.downloadUrl ?? '/download';
    console.log(release.assets.find(asset => asset.name.includes('.exe'))?.downloadUrl, release.assets, release, downloadUrl, downloadText)
  } else if (os.includes('mac')) {
    icon = faApple;
    downloadText = 'Download for Mac';
    downloadUrl = release.assets.find(asset => asset.name.includes('.dmg'))?.downloadUrl ?? '/download';
  } else if (os.includes('linux')) {
    icon = faLinux;
    downloadText = 'Download for Linux';
    downloadUrl = '/download';
  } else if (os.includes('ubuntu')) {
    icon = faUbuntu;
    downloadText = 'Download for Ubuntu';
    downloadUrl = release.assets.find(asset => asset.name.includes('.AppImage'))?.downloadUrl ?? '/download';
  } else {
    icon = faDownload;
    downloadText = 'Download';
    downloadUrl = '/download';
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <a href="#" onClick={() => {
            window.open(downloadUrl, '_blank')
          }}>
            <BigButton icon={icon}>
              { downloadText }
            </BigButton>
          </a>
        </div>
        <div className={styles.right}>
          <h2>Get started within minutes</h2>
          <p>
            Just download the installer and start scribbling your notes. You can
            also <GatsbyLink to="/download">download Yana for a different platform</GatsbyLink>
          </p>
        </div>
      </div>
    </div>
  );
};
