/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      elastigraph {
        tag(store: GB, url: "sofas-and-armchairs") {
          products(first: 250) {
            edges {
              node {
                images {
                  lifestyleImage
                  listingImage
                }
                name
                price {
                  includingTax
                }
                promotion {
                  price {
                    includingTax
                  }
                }
                sku
                url
              }
            }
          }
        }
      }
    }
  `)

  data.elastigraph.tag.products.edges.forEach(product => {
    actions.createPage({
      path: product.node.url,
      component: path.resolve(`./src/templates/PDP.js`),
      context: {
        url: product.node.url,
      },
    })
  })
}
