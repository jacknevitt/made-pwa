import posed from "react-pose"
import styled from "styled-components"
import { Link } from "gatsby"

import Icon from "../icon"

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
`

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

export const HeaderIconsContainer = styled.header`
  width: 100%;
  padding: 6px 15px 15px;
  display: flex;
  justify-content: space-between;
  background: white;
`

export const MadeLogo = styled.img`
  width: 110px;
  height: 29px;
`

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

export const SearchInputContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;
  margin: 0 10px;
  border: 0;
  border-bottom: 1px solid black;
`

export const BasketIcon = styled(Icon)`
  &:before {
    font-size: 26px;
    text-decoration: none;
    color: black;

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
  }
`

export const SearchInput = styled.input`
  font-size: 16px;
  font-family: "Meridian-Regular", sans-serif;
  color: rgb(43, 43, 43);
  letter-spacing: 0.5px;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  &:focus {
    outline: none;
  }
`

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

export const MenuItemContainer = styled.div`
  height: 45px;
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightGrey;
  padding-left: 18px;
  padding-right: 18px;
`

export const MenuItem = styled(Link)`
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
left: ${p => (p.modalIsOpen ? "80vw" : "102vw")}

&:before {
font-size: 26px;
position: absolute;
top: 6px;
left: 9px;
}
`

export const SearchIcon = styled(Icon)`
  padding-left: 6px;
  padding-right: 6px;
  &:before {
    font-size: 18px;
  }
`
