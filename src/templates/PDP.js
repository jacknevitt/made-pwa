import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

export default ({ data }) => {
  console.log("🎃 dataPDP: ", data)
  const product = data.elastigraph.product

  return (
    <Layout>
      <Container>
        <div>
          <h2
            style={{
              fontSize: "4rem",
              lineHeight: "3.5rem",
              fontFamily: "FS Neruda,sans-serif",
              margin: "0",
            }}
          >
            {product.collection}
          </h2>
          <img
            src={`https://res.cloudinary.com/made-com/image/upload/c_pad,d_made.svg,f_auto,w_265,dpr_1.0,q_auto:best/v4/${product.images.listingImage}`}
            alt="sofa"
            style={{
              maxWidth: "100%",
            }}
          />
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($url: String!) {
    elastigraph {
      product(store: GB, url: $url) {
        availability {
          available
        }
        collection
        collectionUrl
        images {
          lifestyleImage
          listingImage
        }
        price {
          includingTax
        }
        promotion {
          price {
            includingTax
          }
        }
        url
        name
      }
    }
  }
`
