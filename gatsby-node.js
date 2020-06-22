/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

const locales = {
  "en-GB": {
    store: "GB",
    pathPrefix: "/",
  },
  "fr-FR": {
    store: "FR",
    pathPrefix: "fr",
  },
  "es-ES": {
    store: "ES",
    pathPrefix: "es",
  },
  "de-DE": {
    store: "DE",
    pathPrefix: "de",
  },
  "de-CH": {
    store: "CH",
    pathPrefix: "ch",
  },
  "nl-NL": {
    store: "NL",
    pathPrefix: "nl",
  },
}

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

exports.createPages = async ({ actions, graphql }) => {
  for (const [key, locale] of Object.entries(locales)) {
    actions.createPage({
      path: locale.pathPrefix,
      component: path.resolve("./src/templates/HomePage.js"),
      context: {
        ...locale,
        prismicLang: key.toLowerCase(),
      },
    })

    const { data } = await graphql(
      `
        query($prismicLang: String) {
          prismicTopnav(lang: { eq: $prismicLang }) {
            data {
              mobileLinks {
                primary {
                  mobile_main_category {
                    raw {
                      spans {
                        data {
                          url
                        }
                      }
                      text
                    }
                  }
                  main_link_background_colour
                }
              }
            }
          }
        }
      `,
      { prismicLang: key.toLowerCase() }
    )

    // const mobileLinks = data.prismicTopnav.data.mobileLinks

    // const mobileMainCategories = mobileLinks.map(
    //   link => link.primary.mobile_main_category
    // )

    // const mobileMainCategoryUrls = mobileMainCategories.map(({ raw }) => ({
    //   text: raw[0].text,
    //   url: raw[0].spans[0]
    //     ? raw[0].spans[0].data.url.split(/made\.com/i)[1]
    //     : null,
    // }))

    // console.log("DATA", mobileMainCategoryUrls)
  }

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
