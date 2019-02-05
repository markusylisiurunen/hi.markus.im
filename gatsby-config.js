module.exports = {
  siteMetadata: {
    title: `Markus Ylisiurunen`,
    description: `Markus Ylisiurunen's personal website.`,
    email: `hi@markus.im`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cv`,
        path: `${__dirname}/cv`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `attachments`,
        path: `${__dirname}/attachments`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-133876555-1`,
      },
    },
  ],
}
