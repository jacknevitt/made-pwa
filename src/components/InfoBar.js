import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: #f5f5f5;
  height: 25px;
  padding: 15px;
`

const StyledButton = styled.button`
  padding: 0;
  border: none;
  color: inherit;
  background-color: transparent;
  margin-left: 10px;
`

const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
`

const InfoBar = props => {
  console.log(props)
  const [isToggle, setToggle] = useState(true)
  return (
    <>
      {isToggle ? (
        <Container>
          <StyledA href={props.primary.href.url}>
            {props.primary.text.text}
          </StyledA>
          <StyledButton onClick={() => setToggle(!isToggle)}>x</StyledButton>
        </Container>
      ) : null}
    </>
  )
}

export default InfoBar
