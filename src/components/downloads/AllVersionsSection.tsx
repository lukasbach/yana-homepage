import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Release } from '../../types';
import cxs from 'cxs';
import { MarginContent } from '../MarginContent';
import { BigButton } from '../BigButton';
import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';
import { getDownloadBrandingForAsset } from '../../getDownloadBrandingForAsset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { primaryColor } from '../../colors';
import GatsbyLink from 'gatsby-link';

export const query = graphql`
  {
    allRelease {
      edges {
        node {
          id
          url
          tagName
          name
          created
          published
          assets {
            id
            url
            downloadUrl
            name
            label
            size
          }
        }
      }
    }
  }
`

const styles = {
  container: cxs({
    color: 'white',
    ' h2': {
      margin: '32px 0 10px 0',
      '> span': {
        fontSize: '.6em',
        verticalAlign: 'baseline',
        paddingLeft: '16px',
        color: '#aaa'
      }
    },
    '> div': {
      marginBottom: '100px'
    }
  }),
  assetContainer: cxs({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '32px',
    marginBottom: '28px',
    cursor: 'pointer',
    ':hover *': {
      color: `${primaryColor} !important`
    }
  }),
  assetContainerLeftIcon: cxs({
    fontSize: '48px',
    marginRight: '16px'
  }),
  assetContainerRightIcon: cxs({
    '> span': {
      paddingRight: '8px',
      color: '#aaa',
      fontSize: '.7em',
      // fontWeight: 300
    }
  }),
  assetContainerText: cxs({
    flexGrow: 1,
    '> p': {
      margin: 0
    },
    '> :nth-child(1)': {
      fontStyle: 'italic',
      fontSize: '1.1em'
    },
    '> :nth-child(2)': {
      color: '#aaa'
    },
  }),
  buttons: cxs({
    display: 'flex',
    justifyContent: 'center',
    '> button': {
      margin: '0 1em'
    }
  })
};

export const AllVersionsSection: React.FC<{}> = props => {
  const data: Release[] = useStaticQuery(query).allRelease.edges.map((edge: any) => edge.node);

  return (
    <MarginContent>
      <div className={styles.container}>
        <h1>Other versions</h1>

        { data.map(release => (
          <div>
            <h2>
              Yana { release.name }
              <span>{' '}released on { new Date(release.published).toLocaleDateString() }</span>
            </h2>

            {
              release.assets
                .map(asset => ({ ...asset, brand: getDownloadBrandingForAsset(asset.name) }))
                .filter(asset => !!asset.brand)
                .sort((a: any, b: any) => a.brand?.ordering - b.brand?.ordering)
                .map(asset => {
                  const branding: any = asset.brand;

                  return (
                    <GatsbyLink to={asset.downloadUrl}>
                      <div className={styles.assetContainer}>
                        <div className={styles.assetContainerLeftIcon}>
                          <FontAwesomeIcon icon={branding.icon} />
                        </div>
                        <div className={styles.assetContainerText}>
                          <p>{ branding.download }</p>
                          <p>{ asset.name }</p>
                        </div>
                        <div className={styles.assetContainerRightIcon}>
                          <span>{ Math.round(asset.size / (1024 * 1024)) }MB</span>
                          <FontAwesomeIcon icon={faDownload} />
                        </div>
                      </div>
                    </GatsbyLink>
                  );
                })
            }
          </div>
        )) }
      </div>
    </MarginContent>
  );
};
