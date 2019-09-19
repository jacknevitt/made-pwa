import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PrismicCarousel from "../components/PrismicCarousel"
import PrismicProductSlider from "../components/PrismicProductSlider"
import PrismicBrandMessage from "../components/PrismicBrandMessage"
import InfoBar from "../components/InfoBar"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <InfoBar {...data.prismicInfobar.data.infobars[0]} />
      <PrismicCarousel {...data.prismicHomepageBodyHpCarousel} />
      <PrismicProductSlider {...data.prismicHomepageBodyHpProductsSlider} />
      <PrismicBrandMessage
        {...data.prismicHomepageBodyHpBrandMessage.primary}
      />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
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
  }
`
