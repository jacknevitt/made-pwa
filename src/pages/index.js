import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrismicCarousel from "../components/PrismicCarousel"
import PrismicProductSlider from "../components/PrismicProductSlider"
import PrismicBrandMessage from "../components/PrismicBrandMessage"

const IndexPage = ({ data }) => {
  const {
    allPrismicHomepage: {
      edges: [prismicHomepageBody],
    },
  } = data

  const [
    prismicHomepageBodyHpCarousel,
    prismicHomepageBodyHpProductsSlider,
    prismicHomepageBodyHpBrandMessage,
  ] = prismicHomepageBody.node.data.body
  return (
    <Layout>
      <SEO title="Home" />
      <PrismicCarousel {...prismicHomepageBodyHpCarousel} />
      <PrismicProductSlider
        {...prismicHomepageBodyHpProductsSlider}
        {...data.elastigraph}
      />
      <PrismicBrandMessage {...prismicHomepageBodyHpBrandMessage.primary} />
    </Layout>
  )
}

export default IndexPage

export const GatsbyQuery = graphql`
  query PrismicCarousel {
    allPrismicHomepage(filter: { lang: { eq: "en-gb" } }) {
      edges {
        node {
          data {
            body {
              ... on PrismicHomepageBodyHpCarousel {
                items {
                  hp_carousel_item_image {
                    url
                    alt
                    dimensions {
                      width
                      height
                    }
                  }
                  hp_carousel_item_image_mobile {
                    url
                    alt
                    dimensions {
                      width
                      height
                    }
                  }
                  hp_carousel_item_subtitle {
                    text
                  }
                  hp_carousel_item_title {
                    text
                  }
                  hp_item_cta_link {
                    url
                  }
                  hp_item_text_cta {
                    text
                  }
                }
              }
              ... on PrismicHomepageBodyHpProductsSlider {
                items {
                  display_name
                  sku
                }
              }
              ... on PrismicHomepageBodyHpBrandMessage {
                primary {
                  bacackground_video_color_overlay_mobile
                  background_image_desktop {
                    url
                    dimensions {
                      height
                      width
                    }
                  }
                  background_image_mobile {
                    url
                    dimensions {
                      height
                      width
                    }
                  }
                  content_text_color
                  main_title {
                    text
                  }
                  content_text {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }

    elastigraph {
      products(
        store: GB
        skus: [
          "SOFSCT019GRE-UK"
          "CLPGLO024ZBR-UK"
          "BEDSKY080BLU-UK"
          "STOLUC008MAN-UK"
          "DWRBUD001ZCO-UK"
          "TBLLOM018NAT-UK"
          "STOGUN003GRY-UK"
          "BSPJUL004BLU-UK"
        ]
      ) {
        images {
          listingImage
        }
      }
    }
  }
`
