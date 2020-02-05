module.exports = {
  siteMetadata: {
    siteUrl: `https://www.crazycode.com`
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Crazy Code`,
        short_name: `Crazy Code`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/content/assets/favicon.svg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-156495634-1',
        head: true
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`
  ]
}
