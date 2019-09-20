import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${prop => `url(${prop.img})`};
  height: ${prop => `${prop.height}px`};
  width: ${prop => `${prop.width}px`};
`
const StyledTitle = styled.h1`
  margin-top: 2em;
  flex: 1;
  width: 100%;
  color: white;
  text-align: center;
`

const StyledContentBody = styled.p`
  margin: 0;
  flex: 3;
  width: 80%;
  color: white;
  text-align: center;
  font-size:20px;
  FS Meridian Regular,sans-serif;
  padding:0 10% 0;
`

const PrismicBrandMessage = ({
  main_title: title,
  content_text: textBody,
  background_image_desktop,
}) => (
  <Container
    img={background_image_desktop.url}
    height={background_image_desktop.dimensions.height}
    wifth={background_image_desktop.dimensions.width}
  >
    <StyledTitle> {title.text}</StyledTitle>
    <StyledContentBody>{textBody.text}</StyledContentBody>
  </Container>
)

export default PrismicBrandMessage
