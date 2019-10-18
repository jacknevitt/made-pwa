import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Button from "../components/button"
import TextLink from "../components/textLink"
import Icon from "../components/icon"

const Container = styled.div`
  margin-top: 10px;
  padding: 0 15px 0;
`

const Segment = styled.div`
  padding: 10px 0;
  text-align: center;
`

const Para = styled.p`
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`
const DetailLi = styled.li`
  color: #2b2b2b;
  font-size: 16px;
  display: grid;
  grid-template-columns: 35px 1fr;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom-width: 0;
  }
`
const StyledH3 = styled.h3`
  font-size: inherit;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 0.5em;
  :first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`

const PDP = ({
  data: {
    elastigraph: { product },
  },
}) => {
  const {
    height: { value: height },
    width: { value: width },
    depth: { value: depth },
  } = product.attributes
  return (
    <Layout>
      <Container>
        <h2
          style={{
            fontSize: "40px",
            lineHeight: "3.5rem",
            margin: "0",
          }}
        >
          {product.collection}
        </h2>
        <img
          src={`https://res.cloudinary.com/made-com/image/upload/c_pad,d_made.svg,f_auto,w_1050,dpr_1.0,q_auto:best/v4/${
            product.images.gallery[0]
          }`}
          alt="sofa"
          style={{
            maxWidth: "100%",
          }}
        />
        <Segment>
          <Para>{product.name}</Para>
          <Para>
            <span
              style={{
                color: product.promotion.price ? "red" : "inherit",
                fontSize: "24px",
              }}
            >
              £
              {(product.promotion.price
                ? product.promotion.price.includingTax
                : product.price.includingTax) / 100}
            </span>
          </Para>
        </Segment>
        <Segment>
          <Button
            style={{
              width: "100%",
            }}
          >
            Add To Basket
          </Button>
        </Segment>
        <Segment style={{ padding: "20px 0 30px" }}>
          <TextLink to="/">Order a free fabric sample</TextLink>
        </Segment>
      </Container>
      <Segment style={{ backgroundColor: "#f8f8f8", textAlign: "left" }}>
        <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
          <DetailLi>
            <Icon characterCode="e90e" />
            <div>
              <StyledH3>Dispatch</StyledH3>
              <Para>We will dispatch your product within 6-8 weeks</Para>
            </div>
          </DetailLi>
          <DetailLi>
            <Icon characterCode="e935" />
            <div>
              <StyledH3>10 Year Guarantee</StyledH3>
              <Para>10 Year Guarantee</Para>
            </div>
          </DetailLi>
          <DetailLi>
            <Icon characterCode="e914" />
            <div>
              <StyledH3>Delivery</StyledH3>
              <Para>
                To a room of your choice <strong>£25</strong>
              </Para>
            </div>
          </DetailLi>
          <DetailLi>
            <Icon characterCode="e917" />
            <div>
              <StyledH3>Returns</StyledH3>
              <Para>No-hassle returns</Para>
            </div>
          </DetailLi>
          <DetailLi>
            <Icon characterCode="e941" />
            <div>
              <StyledH3>Dimensions</StyledH3>
              <Para>
                W: {width} x H: {height} x D: {depth}cm
              </Para>
            </div>
          </DetailLi>
          <DetailLi>
            <Icon characterCode="e956" />
            <div>
              <StyledH3>Product Details</StyledH3>
            </div>
          </DetailLi>
        </ul>
      </Segment>
    </Layout>
  )
}

export default PDP

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
          gallery
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
        attributes {
          height {
            value
          }
          width {
            value
          }
          depth {
            value
          }
        }
      }
    }
  }
`
