import { faApple, faLinux, faUbuntu, faWindows } from '@fortawesome/free-brands-svg-icons';

export const getDownloadBrandingForAsset = (assetName: string) => {
  if (assetName.endsWith('.dmg')) {
    return {
      os: 'apple',
      icon: faApple,
      download: 'Download installer for Mac OSX (.dmg)',
      ordering: 2,
    };
  } else if (assetName.endsWith('.exe')) {
    return {
      os: 'windows',
      icon: faWindows,
      download: 'Download installer for Windows (.exe)',
      ordering: 0,
    };
  } else if (assetName.endsWith('mac.zip')) {
    return {
      os: 'apple',
      icon: faApple,
      download: 'Download standalone app for Mac OSX (.zip)',
      ordering: 3,
    };
  } else if (assetName.endsWith('win.zip')) {
    return {
      os: 'windows',
      icon: faWindows,
      download: 'Download standalone app for Windows (.zip)',
      ordering: 1,
    };
  } else if (assetName.endsWith('tar.gz')) {
    return {
      os: 'linux',
      icon: faLinux,
      download: 'Download standalone app for Linux (.tar.gz)',
      ordering: 7,
    };
  } else if (assetName.endsWith('.deb')) {
    return {
      os: 'linux',
      icon: faLinux,
      download: 'Download installer for Debian (.deb)',
      ordering: 6,
    };
  } else if (assetName.endsWith('.snap')) {
    return {
      os: 'linux',
      icon: faLinux,
      download: 'Download Snap installer for Linux (.snap)',
      ordering: 5,
    };
  } else if (assetName.endsWith('.AppImage')) {
    return {
      os: 'linux',
      icon: faUbuntu,
      download: 'Download installer for Ubuntu (.AppImage)',
      ordering: 4,
    };
  } else {
    return false;
  }
}