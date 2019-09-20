import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
height: 600px;
  background-image: url('${prop => prop.img}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const PrismicCarousel = ({ items }) => {
  return (
    <>
      {items.map((item, index) =>
        index === 0 ? (
          <StyledContainer
            img={item.hp_carousel_item_image_mobile.url}
            key={`carousel_${index}`}
          >
            <PrismicCarouselCard
              title={item.hp_carousel_item_title.text}
              subtitle={item.hp_carousel_item_subtitle.text}
              cta={item.hp_item_text_cta.text}
              link={item.hp_item_cta_link.url}
            />
          </StyledContainer>
        ) : null
      )}
    </>
  )
}

export default PrismicCarousel

const TextContainer = styled.div`
  margin: 3em;
  position: absolute;
`
const TextTitle = styled.h2`
  font-size: 46px;
  line-height: 45px;
  color: #2b2b2b;
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

const PrismicCarouselCard = ({ title, cta, link }) => (
  <TextContainer>
    <TextTitle>{title}</TextTitle>
    <StyledA href={link}>
      <CtaText>{cta.toUpperCase()}</CtaText>
    </StyledA>
  </TextContainer>
)
