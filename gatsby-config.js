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
        icon: `src/images/MADE-SCREWHEAD-RGB-fill-white.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
