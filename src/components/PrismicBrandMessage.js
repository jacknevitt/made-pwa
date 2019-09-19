import React from "react"
import styled from "styled-components"

const PrismicBrandMessage = ({ main_title: title, content_text: textBody }) => (
  <div>
    <h1> {title.text}</h1>
    <p>{textBody.text}</p>
  </div>
)

export default PrismicBrandMessage
