import React, { Component } from "react"
import styled from "styled-components"

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em 0 1em;
`

const CardContainer = styled.div`
  height: 15em;
`

class PrismicProductSlider extends Component {
  render() {
    return (
      <SliderContainer>
        {this.props.items.map(item => (
          <ProductCard title={item.display_name} />
        ))}
      </SliderContainer>
    )
  }
}

export default PrismicProductSlider

const ProductCard = ({ title }) => (
  <CardContainer>
    <p>{title}</p>
  </CardContainer>
)
