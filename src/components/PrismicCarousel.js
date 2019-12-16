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
  const handleScroll = event => {
    // console.log(event.target.scrollLeft)
  }
  return (
    <Container>
      <Rail onScroll={handleScroll}>
        {items.map((item, index) => (
          <StyledContainer
            img={item.hp_carousel_item_image_mobile.url}
            key={`carousel_${index}`}
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
  margin: 30px;
  position: absolute;
  top: 0;
  color: #2b2b2b;
`
const TextTitle = styled.h2`
  font-size: 40px;
  line-height: 1em;
  color: inherit;
  margin: 0;
  letter-spacing: -0.3px;
`
const CtaLink = styled.a`
  margin: 1em 0;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  text-decoration: none;
  color: inherit;
  border-bottom: 2px solid currentColor;
`

const PrismicCarouselCard = ({ title, subtitle, cta, link }) => (
  <TextContainer>
    <TextTitle>{title}</TextTitle>
    <p style={{ fontSize: "20px", margin: 0 }}>{subtitle}</p>
    <p>
      <CtaLink href={link}>{cta.toUpperCase()}</CtaLink>
    </p>
  </TextContainer>
)
