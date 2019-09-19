/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      sofa {
        tag(store: GB, url: "sofas-and-armchairs/3-seater-sofas") {
          metadata {
            store
            name
            tag
            url
          }
        }
      }
    }
  `)
  console.log("👻 data: ", data)
  console.log("💀 data.sofa.tag: ", data.sofa.tag)

  actions.createPage({
    path: "/pages-3/",
    component: path.resolve(`./src/pages/page-3.js`),
    context: {
      id: "12345678",
    },
  })
}
