const fetch = require('node-fetch');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  let releases = [];
  let nextUrl = 'https://api.github.com/repos/lukasbach/yana/releases?page=1&per_page=100';

  do {
    const result = await fetch(nextUrl, {});

    if (!result.ok) {
      process.exit(1);
    }

    const json = await result.json();
    nextUrl = (/\<([^\s]+)\>\;\s+rel=\"next\"/.exec(result.headers.get('Link')) || [])[1];

    for (const release of json) {
      releases.push({
        url: release.url,
        id: release.id,
        tagName: release.tag_name,
        name: release.name,
        created: release.created_at,
        published: release.published_at,
        assets: release.assets.map(asset => ({
          url: asset.url,
          downloadUrl: asset.browser_download_url,
          id: asset.id,
          name: asset.name,
          label: asset.label,
          size: asset.size,
        }))
      });
    }
  } while(!!nextUrl);

  releases = releases.sort((a, b) => b.created.localeCompare(a.created));

  let i = 0;
  for (const release of releases) {
    const data = {
      ...release,
      latest: i === 0,
    };

    actions.createNode({
      ...release,
      name: release.name,
      id: createNodeId(`release-${release.name}`),
      internal: {
        type: 'Release',
        contentDigest: createContentDigest(data),
      }
    });

    i++;
  }

  actions.createNode({
    ...releases[0],
    name: 'Latest Release',
    id: createNodeId(`release-latest`),
    internal: {
      type: 'ReleaseLatest',
      contentDigest: createContentDigest(releases[0]),
    }
  });
}