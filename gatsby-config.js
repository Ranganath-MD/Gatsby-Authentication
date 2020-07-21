module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `Auth-ui`,
      },
    },
  ],
}
