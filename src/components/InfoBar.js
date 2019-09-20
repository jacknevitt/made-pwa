import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: lightgrey;
`

const StyledButton = styled.button`
  padding: 0;
  border: none;
  color: inherit;
  background-color: transparent;
  margin-left: 2em;
`

const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
`

const InfoBar = props => {
  console.log(props)
  const [isToggle, setToggle] = useState(true)
  return (
    <Container>
      {isToggle ? (
        <div>
          <StyledA href={props.primary.href.url}>
            {props.primary.text.text}
          </StyledA>
          <StyledButton onClick={() => setToggle(!isToggle)}>x</StyledButton>
        </div>
      ) : null}
    </Container>
  )
}

export default InfoBar
