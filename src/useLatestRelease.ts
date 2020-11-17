import { useStaticQuery } from 'gatsby';
import { Release } from './types';

export const useLatestRelease = () => {
  return useStaticQuery(graphql`
    {
      allReleaseLatest {
        nodes {
          id
          name
          published
          tagName
          url
          created
          assets {
            downloadUrl
            id
            label
            name
            size
            url
          }
        }
      }
    }
  `).allReleaseLatest.nodes[0] as Release;
}