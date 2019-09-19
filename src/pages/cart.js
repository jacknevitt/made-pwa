import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const InfoBox = styled.p`
  background: lemonchiffon;
  display: block;
  padding: 10px;
`

const Cart = props => {
  return (
    <Layout>
      <SEO title="Shopping Basket" />
      <div style={{ paddingTop: "1em" }}>
        <h1>Shopping Basket</h1>
        <hr />
        <InfoBox>You have no items in your shopping basket.</InfoBox>
      </div>
    </Layout>
  )
}

export default Cart
