import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const tabletLandscapeMin = 960

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

export default ({ data }) => {
  const products = data.elastigraph.tag.products.edges
  return (
    <Layout>
      <Title>Sofas</Title>
      <NumberOfProducts>{products.length} products</NumberOfProducts>
      <GridContainer>
        {products.map(sofa => (
          <div>
            <Link
              to={"/" + sofa.node.url}
              style={{
                textDecoration: "none",
              }}
            >
              <img
                src={`https://res.cloudinary.com/made-com/image/upload/c_pad,d_made.svg,f_auto,w_265,dpr_1.0,q_auto:best/v4/${sofa.node.images.listingImage}`}
                alt="sofa"
                style={{
                  maxWidth: "100%",
                }}
                loading="lazy"
              />
              <ProductName>{nameLength(sofa.node.name)}</ProductName>
            </Link>
            <Price>
              £
              {sofa.node.promotion.price
                ? sofa.node.promotion.price.includingTax / 100
                : sofa.node.price.includingTax / 100}
            </Price>
          </div>
        ))}
      </GridContainer>
    </Layout>
  )
}

export const query = graphql`
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
`
