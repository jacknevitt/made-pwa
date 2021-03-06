import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const InfoBox = styled.p`
  background: lemonchiffon;
  display: block;
  padding: 10px;
`

const Cart = props => {
  return (
    <Layout>
      <SEO title="Shopping Basket" />
      <div style={{ padding: "0 10px 0" }}>
        <h1>Shopping Basket</h1>
        <hr />
        <InfoBox>You have no items in your shopping basket.</InfoBox>
      </div>
    </Layout>
  )
}

export default Cart
