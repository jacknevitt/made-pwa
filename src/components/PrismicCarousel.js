import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  background-image: url('${prop => prop.img}');
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
`

const PrismicCarousel = ({ items }) => {
  console.log("carousel", items)

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
const TextTitle = styled.p`
  font-size: 46px;
  line-height: 45px;
  color: #2b2b2b;
  margin: 0;
  letter-spacing: -0.3px;
  font-family: FS Neruda, sans-serif;
`
const CtaText = styled.p`
  margin-top: 10%;
  text-decoration: underline;
  font-size: 16px;
  line-height: 24px;
  font-family: FS Neruda, sans-serif;
`

const PrismicCarouselCard = ({ title, cta }) => (
  <TextContainer>
    <TextTitle>{title}</TextTitle>

    <CtaText>{cta.toUpperCase()}</CtaText>
  </TextContainer>
)
