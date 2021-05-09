const basePath = '/se-microedition-template'

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    title: `Scholarly Editing: The Annual of the Association for Documentary Editing`,
    subtitle: `The Annual of the Association for Documentary Editing`,
    description: `Scholarly Editing is the annual of the Association for Documentary Editing`,
    author: `Scholarly Editing Editors`,
    menuLinks: [
      {
        name: 'home',
        link: '/'
      }
    ]
  },
  plugins: [
    `gatsby-theme-ceteicean`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `tei`,
      },
    },
  ],
}
