module.exports = {
  siteMetadata: {
    title: `Yana - Powerful note-taking app`,
    description: 'Manage your notes in a rich text editor with tons of features, or manage code snippets in the editor that powers Visual Studio Code.',
    author: 'Lukas Bach'
  },
  pathPrefix: '/yana-homepage',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yana - Powerful note-taking app`,
        short_name: `Yana`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#377cc3`,
        display: `standalone`,
        icon: 'src/icons/icon-black.svg'
      },
    }
  ],
}
