import styled from "styled-components"
import posed from "react-pose"
import { Link } from "gatsby"

import Icon from "../icon"

const GreyOverlay = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`
export const PosedGreyOverlay = posed(GreyOverlay)({
  open: { background: "rgba(235, 235, 235, 1)", zIndex: 9, overflow: "hidden" },
  closed: {
    background: "rgba(235, 235, 235, 0)",
    zIndex: -9,
    overflow: "auto",
  },
})

const MenuModalContainer = styled.div`
  width: 80vw;
  height: 100vh;
  top: 0;
  background-color: white;
  position: absolute;
  z-index: 999;
`

export const PosedMenuModalContainer = posed(MenuModalContainer)({
  open: { left: 0 },
  closed: { left: "-100vw" },
})

export const MenuTitleContainer = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightGrey;
`

export const MenuTitle = styled.span`
  font-family: "Meridian-Regular";
`

export const MenuItemContainer = styled(Link)`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightGrey;
  padding-left: 18px;
  padding-right: 18px;
`

export const MenuItem = styled.span`
  font-family: "Meridian-Regular";
  font-size: 14px;
  text-decoration: none;
  &:visited {
    text-decoration: none;
    color: black;
  }
  &:hover {
    text-decoration: none;
    color: black;
  }
  &:focus {
    text-decoration: none;
    color: black;
  }
  &:hover,
  &:active {
    text-decoration: none;
    color: black;
  }
`

export const MenuCloseButton = styled(Icon)`
color: ${p => (p.modalIsOpen ? "white" : "black")};
background: ${p => (p.modalIsOpen ? "black" : "white")};
width: 45px;
height: 45px;
position: absolute;
top: 0;
left:  "80vw" : "102vw")}

&:before {
font-size: 26px;
position: absolute;
top: 6px;
left: 9px;
}
`
