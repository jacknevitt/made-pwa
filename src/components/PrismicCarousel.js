import React from "react"
import styled from "styled-components"

const Container = styled.div`
  overflow: auto;
  position: relative;
`

const Rail = styled.div`
display: flex;
flex-flow: row nowrap
flex: none;
overflow: auto;
width: 100%;
scroll-snap-type: x mandatory;
`
const StyledContainer = styled.div`
  scroll-snap-align: center;
  flex: none;
  width: 100%;
  position: relative;
`

const PrismicCarousel = ({ items }) => {
  console.log(items)
  return (
    <Container>
      <Rail
        style={
          {
            // width: `${items.length * 100}%`,
          }
        }
      >
        {items.map((item, index) => (
          <StyledContainer
            img={item.hp_carousel_item_image_mobile.url}
            key={`carousel_${index}`}
            style={
              {
                // width: `${100 / items.length}%`,
              }
            }
          >
            <picture>
              <source
                srcSet={item.hp_carousel_item_image.url + "xxx"}
                media={`(min-width: 600px)`}
              />
              <img
                src={item.hp_carousel_item_image_mobile.url}
                alt={`Carousel Item ${index}`}
                style={{ width: "100%", objectFit: "cover", top: 0 }}
              />
            </picture>
            <PrismicCarouselCard
              color={item.hp_carousel_text_color}
              title={item.hp_carousel_item_title.text}
              subtitle={item.hp_carousel_item_subtitle.text}
              cta={item.hp_item_text_cta.text}
              link={item.hp_item_cta_link.url}
            />
          </StyledContainer>
        ))}
      </Rail>
    </Container>
  )
}

export default PrismicCarousel

const TextContainer = styled.div`
  margin: 3em;
  position: absolute;
  top: 0;
  color: ${props => (props.color === "black" ? "#2b2b2b" : "white")};
`
const TextTitle = styled.h2`
  font-size: 46px;
  line-height: 45px;
  color: inherit;
  margin: 0;
  letter-spacing: -0.3px;
`
const CtaText = styled.p`
  margin-top: 10%;
  text-decoration: underline;
  font-size: 16px;
  line-height: 24px;
`

const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
`

const PrismicCarouselCard = ({ title, cta, link, color }) => (
  <TextContainer color={color}>
    <TextTitle>{title}</TextTitle>
    <StyledA href={link}>
      <CtaText>{cta.toUpperCase()}</CtaText>
    </StyledA>
  </TextContainer>
)
