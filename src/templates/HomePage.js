import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrismicCarousel from "../components/PrismicCarousel"
import PrismicProductSlider from "../components/PrismicProductSlider"
import PrismicBrandMessage from "../components/PrismicBrandMessage"

const HomePage = ({ data, path }) => {
  const { prismicHomepage } = data

  const {
    PrismicHomepageBodyHpCarousel,
    PrismicHomepageBodyHpProductsSlider,
    PrismicHomepageBodyHpBrandMessage,
  } = prismicHomepage.data.body.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.__typename]: curr,
    }),
    {}
  )

  return (
    <Layout>
      <SEO
        title={prismicHomepage.data.meta_title}
        description={prismicHomepage.data.meta_description}
      />
      <p>{path}</p>
      <PrismicCarousel {...PrismicHomepageBodyHpCarousel} />
      <PrismicProductSlider
        {...PrismicHomepageBodyHpProductsSlider}
        {...data.elastigraph}
      />
      <PrismicBrandMessage {...PrismicHomepageBodyHpBrandMessage.primary} />
    </Layout>
  )
}

export default HomePage

export const HomePageQuery = graphql`
  query($prismicLang: String) {
    prismicHomepage(lang: { eq: $prismicLang }) {
      data {
        canonical_url
        meta_title
        meta_description
        site_name
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
`
