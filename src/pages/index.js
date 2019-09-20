import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrismicCarousel from "../components/PrismicCarousel"
import PrismicProductSlider from "../components/PrismicProductSlider"
import PrismicBrandMessage from "../components/PrismicBrandMessage"
import InfoBar from "../components/InfoBar"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  const props = {
    ...data.prismicHomepageBodyHpProductsSlider,
    ...data.elastigraph,
  }
  return (
    <Layout>
      <SEO title="Home" />
      <InfoBar {...data.prismicInfobar.data.infobars[0]} />
      <PrismicCarousel {...data.prismicHomepageBodyHpCarousel} />
      <PrismicProductSlider {...props} />
      <PrismicBrandMessage
        {...data.prismicHomepageBodyHpBrandMessage.primary}
      />

      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/sofas-and-armchairs/"> Sofas and Armchairs</Link>
    </Layout>
  )
}

export default IndexPage

export const GatsbyQuery = graphql`
  query PrismicCarousel {
    prismicHomepageBodyHpCarousel {
      items {
        distance_from_top_mobile
        distance_from_top_tablet
        hp_carousel_button_text_item {
          text
        }
        hp_carousel_item_image {
          url
        }
        hp_carousel_item_image_mobile {
          url
        }
        hp_carousel_item_subtitle {
          text
        }
        hp_carousel_item_title {
          text
        }
        hp_carousel_item_title_font_size
        hp_carousel_tablet_img_position
        hp_carousel_text_color
        hp_item_cta_link {
          target
          url
          link_type
        }
        hp_item_text_cta {
          html
          text
        }
        hp_position_top
        item_image_link {
          link_type
          target
          url
        }
        position_of_copy
      }
    }

    prismicHomepageBodyHpProductsSlider {
      items {
        display_name
        sku
      }
    }

    prismicHomepageBodyHpBrandMessage {
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
          dimensions {
            height
            width
          }
          url
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

    prismicInfobar {
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
