require("dotenv").config({
  path: `.env`,
})

module.exports = {
  // siteMetadata: {
  //   title: `Gatsby Default Starter`,
  //   description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  //   author: `@gatsbyjs`,
  // },
  siteMetadata: {
    title: `MADE.COM`,
    description: `Discover our range of furniture and homeware combining design and affordability. From design sofa to table and lighting create your own space with MADE.com`,
    author: `MADE.COM`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "MADE",
        fieldName: "elastigraph",
        url: "https://es-elastigraph.made.com/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-12859730-44",
        head: true,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MADE.COM`,
        short_name: `MADE`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/MADE-SCREWHEAD-RGB-fill-white.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "madecritical",
        accessToken: `${process.env.PRISMIC_TOKEN}`,
        // Set a default language when fetching documents. The default value is
        // '*' which will fetch all languages.
        // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
        lang: "*",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
