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

  const {
    PrismicHomepageBodyHpCarousel,
    PrismicHomepageBodyHpProductsSlider,
    PrismicHomepageBodyHpBrandMessage,
  } = prismicHomepageBody.node.data.body.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.__typename]: curr,
    }),
    {}
  )

  return (
    <Layout>
      <SEO title="Home" />
      <PrismicCarousel {...PrismicHomepageBodyHpCarousel} />
      <PrismicProductSlider
        {...PrismicHomepageBodyHpProductsSlider}
        {...data.elastigraph}
      />
      <PrismicBrandMessage {...PrismicHomepageBodyHpBrandMessage.primary} />
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
  }
`
