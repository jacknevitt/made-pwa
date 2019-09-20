import React, { Component } from "react"
import styled from "styled-components"

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  margin: 1em 0 1em;
`

const CardContainer = styled.div`
  height: 70 px;
  margin: 0.5em;
`

const StyledImg = styled.img`
  height: 150px;
  width: 100px;
`

const StyledSliderTitle = styled.p`
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  font-family: FS Neruda, sans-serif;
  margin: 3vh;
`

class PrismicProductSlider extends Component {
  // we need to fetch product info by sku
  render() {
    return (
      <>
        <StyledSliderTitle>Best of the Bunch</StyledSliderTitle>
        <SliderContainer>
          {this.props.items.map(item => (
            <ProductCard key={item.sku} title={item.display_name} />
          ))}
        </SliderContainer>
      </>
    )
  }
}

export default PrismicProductSlider

const ProductCard = ({ title }) => (
  <CardContainer>
    <StyledImg src="https://placedog.net/640/480?random" />
    <p>{title}</p>
  </CardContainer>
)
