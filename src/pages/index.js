import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrismicCarousel from "../components/PrismicCarousel"
import PrismicProductSlider from "../components/PrismicProductSlider"
import PrismicBrandMessage from "../components/PrismicBrandMessage"
import InfoBar from "../components/InfoBar"

const IndexPage = ({ data }) => {
  const {
    allPrismicHomepage: {
      edges: [prismicHomepageBody],
    },
    allPrismicInfobar: {
      edges: [prismicInfobar],
    },
  } = data

  const [
    prismicHomepageBodyHpCarousel,
    prismicHomepageBodyHpProductsSlider,
    prismicHomepageBodyHpBrandMessage,
  ] = prismicHomepageBody.node.data.body
  const infobar = prismicInfobar.node.data.infobars[0]
  return (
    <Layout>
      <SEO title="Home" />
      <InfoBar {...infobar} />
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
                  hp_carousel_item_image_mobile {
                    url
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

    allPrismicInfobar(filter: { lang: { eq: "en-gb" } }) {
      edges {
        node {
          data {
            infobars {
              items {
                href {
                  target
                }
              }
              primary {
                text {
                  text
                }
                href {
                  url
                }
                countdown_end_time
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
