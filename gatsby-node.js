/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

const tags = [
  "chairs/armchairs",
  "sofas-and-armchairs/2-seater-sofas",
  "sofas-and-armchairs/3-seater-sofas",
  "sofas-and-armchairs/4-seater-sofas",
  "sofas-and-armchairs/sofas",
]

exports.onCreateNode = ({ node }) => {
  // console.log(node.internal.type)
}

exports.onCreatePage = ({ page, actions }) => {}

exports.createPages = async ({ actions, graphql }) => {
  tags.forEach(tag => {
    actions.createPage({
      path: tag,
      component: path.resolve("./src/templates/ProductListingPage.js"),
      context: {
        url: tag,
      },
    })
  })

  const { data } = await graphql(`
    query {
      elastigraph {
        tag(store: GB, url: "sofas-and-armchairs") {
          products(first: 250) {
            edges {
              node {
                url
              }
            }
          }
        }
      }
    }
  `)

  data.elastigraph.tag.products.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.url,
      component: path.resolve(`./src/templates/ProductDisplayPage.js`),
      context: {
        url: node.url,
      },
    })
  })
}
