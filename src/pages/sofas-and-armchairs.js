import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const ProductCard = styled.div``

const Productname = styled.p`
  textalign: center;
  font-family: Meridian-Regular;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  min-height: 63px;
  paddin-gright: 2.5%;
  margin: 0px 0px 7px;
  color: black;
`

const Price = styled.p`
  font-family: "Meridian-Medium";
`

const nameLength = string =>
  string.length > 48 ? string.substring(0, 45) + "..." : string.substring(0, 47)

export default ({ data }) => {
  console.log("💀 data: ", data)

  return (
    <Layout>
      <Title>Sofas and Armchairs</Title>
      <GridContainer>
        {data.elastigraph.tag.products.edges.map(sofa => (
          <ProductCard>
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
              <Productname>{nameLength(sofa.node.name)}</Productname>
            </Link>
            <Price>
              £
              {sofa.node.promotion.price
                ? sofa.node.promotion.price.includingTax / 100
                : sofa.node.price.includingTax / 100}
            </Price>
          </ProductCard>
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
