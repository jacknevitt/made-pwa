import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default ({ data }) => {
  console.log("💀 data: ", data)

  return (
    <Layout>
      <h1>Sofas and Armchairs</h1>
      <GridContainer>
        {data.elastigraph.tag.products.edges.map(sofa => (
          <div>
            <img
              src={`https://res.cloudinary.com/made-com/image/upload/c_pad,d_made.svg,f_auto,w_265,dpr_1.0,q_auto:best/v4/${sofa.node.images.listingImage}`}
              alt="sofa"
              style={{
                maxWidth: "100%",
              }}
            />
            <Link to={"/" + sofa.node.url} style={{ textAlign: "center" }}>
              {sofa.node.name}
            </Link>
            <p>
              £
              {sofa.node.promotion.price
                ? sofa.node.promotion.price.includingTax / 100
                : sofa.node.price.includingTax / 100}
            </p>
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
