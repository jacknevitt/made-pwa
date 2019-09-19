import React, { Component } from "react"
import styled from "styled-components"

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em 0 1em;
`

const CardContainer = styled.div`
  height: 15em;
  margin: 0.5em;
`

class PrismicProductSlider extends Component {
  // we need to fetch product info by sku
  render() {
    return (
      <SliderContainer>
        {this.props.items.map(item => (
          <ProductCard key={item.sku} title={item.display_name} />
        ))}
      </SliderContainer>
    )
  }
}

export default PrismicProductSlider

const ProductCard = ({ title }) => (
  <CardContainer>
    <img src="https://placedog.net/640/480?random" />
    <p>{title}</p>
  </CardContainer>
)
