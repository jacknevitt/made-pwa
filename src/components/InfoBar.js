import React, { useState } from "react"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"
import moment from "moment"

import Icon from "./icon"

const Banner = styled.div`
  background-color: #f5f5f5;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 40px;
`

const PosedBanner = posed(Banner)({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
})

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
  const [isToggle, setToggle] = useState(true)
  return (
    <PoseGroup flipMove={false}>
      {isToggle ? (
        <PosedBanner key="banner">
          <StyledA href={props.primary.href.url}>
            {props.primary.text.text}{" "}
            {moment(props.primary.countdown_end_time).fromNow()}
          </StyledA>
          <StyledButton
            onClick={() => setToggle(!isToggle)}
            aria-label="remove infobar"
          >
            <Icon characterCode="e905" />
          </StyledButton>
        </PosedBanner>
      ) : null}
    </PoseGroup>
  )
}

export default InfoBar
