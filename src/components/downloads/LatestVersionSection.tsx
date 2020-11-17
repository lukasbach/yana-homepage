import * as React from 'react';
import { MarginContent } from '../MarginContent';
import cxs from 'cxs';
import { BigButton } from '../BigButton';
import { faApple, faGithub, faLinux, faUbuntu, faWindows } from '@fortawesome/free-brands-svg-icons';
import { useLatestRelease } from '../../useLatestRelease';
import { Release } from '../../types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const styles = {
  container: cxs({
    color: 'white',
    ' p': {
      fontSize: '1.2em'
    }
  }),
  buttons: cxs({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '> a': {
      margin: '1em 1em',
      width: '300px',
      border: 'none'
    },
  })
}

const DownloadButton: React.FC<{
  release: Release,
  icon: IconProp,
  assetNameInclude: string
}> = props => {
  const { release, assetNameInclude, icon } = props;
  const asset = release.assets.find(asset => asset.name.includes(assetNameInclude));

  if (!asset) return null;

  return (
    <a href={asset.downloadUrl}>
      <BigButton icon={icon}>
        { props.children }
      </BigButton>
    </a>
  )
}

export const LatestVersionSection: React.FC<{}> = props => {
  const release = useLatestRelease();
  return (
    <MarginContent>
      <div className={styles.container}>
        <h1>Download the latest version</h1>
        <p>
          Yana is completely free! Click on a button below to get the installer for your environment.
          Once the installation is finished, Yana will automatically update itself once a new version
          becomes available.
        </p>
        <div className={styles.buttons}>
          <DownloadButton release={release} icon={faWindows} assetNameInclude=".exe">
            Download for Windows
          </DownloadButton>
          <DownloadButton release={release} icon={faApple} assetNameInclude=".dmg">
            Download for Mac&nbsp;OSX
          </DownloadButton>
          <DownloadButton release={release} icon={faUbuntu} assetNameInclude=".AppImage">
            Download for Ubuntu
          </DownloadButton>
          <DownloadButton release={release} icon={faLinux} assetNameInclude=".deb">
            Download for Debian
          </DownloadButton>
          <DownloadButton release={release} icon={faLinux} assetNameInclude=".snap">
            Download for Linux Snapcraft
          </DownloadButton>
          <a href={`https://github.com/lukasbach/yana/releases/tag/${release.tagName}`} target="_blank">
            <BigButton icon={faGithub}>
              View on GitHub
            </BigButton>
          </a>
        </div>
      </div>
    </MarginContent>
  );
};
