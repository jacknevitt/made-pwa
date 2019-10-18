import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const tabletLandscapeMin = 960

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  padding: 0px 15px;
  @media (min-width: ${tabletLandscapeMin}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const Title = styled.div`
  font-size: 30px;
  font-family: "Neruda";
  font-variant-ligatures: no-common-ligatures;
  letter-spacing: 0.4px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 15px;
`

const NumberOfProducts = styled.div`
  font-size: 12px;
  font-family: "Meridian-Regular";
  text-align: center;
`

const ProductName = styled.p`
  font-family: "Meridian-Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  min-height: 63px;
  padding-right: 2.5%;
  margin: 0px 0px 7px;
  color: black;
  @media (min-width: ${tabletLandscapeMin}px) {
    text-align: center;
    padding-right: 2.5%;
    padding-left: 2.5%;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`

const Price = styled.p`
  font-family: "Meridian-Medium";
  font-size: 14px;
  @media (min-width: ${tabletLandscapeMin}px) {
    text-align: center;
  }
`
const nameLength = string =>
  string.length > 48 ? string.substring(0, 45) + "..." : string.substring(0, 47)

export const ProductListingPage = ({ data }) => {
  const {
    products: { edges: products },
    metadata,
  } = data.elastigraph.tag
  return (
    <Layout>
      <SEO title={metadata.metaTitle} description={metadata.metaDescription} />
      <Title>{metadata.name}</Title>
      <p style={{ textAlign: "center" }}>{metadata.description}</p>
      <NumberOfProducts>{products.length} products</NumberOfProducts>
      <GridContainer>
        {products.map(product => (
          <div key={product.node.name}>
            <Link
              to={"/" + product.node.url}
              style={{
                textDecoration: "none",
              }}
            >
              <img
                src={`https://res.cloudinary.com/made-com/image/upload/c_pad,d_made.svg,f_auto,w_265,dpr_1.0,q_auto:best/v4/${product.node.images.listingImage}`}
                alt="product"
                style={{
                  maxWidth: "100%",
                }}
                loading="lazy"
                // height="197"
                width="265"
              />
              <ProductName>{nameLength(product.node.name)}</ProductName>
            </Link>
            <Price>
              £
              {product.node.promotion.price
                ? product.node.promotion.price.includingTax / 100
                : product.node.price.includingTax / 100}
            </Price>
          </div>
        ))}
      </GridContainer>
    </Layout>
  )
}

export default ProductListingPage

export const query = graphql`
  query($url: String!) {
    elastigraph {
      tag(store: GB, url: $url) {
        metadata {
          breadcrumbs
          name
          metaDescription
          metaTitle
          description
        }
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
`
