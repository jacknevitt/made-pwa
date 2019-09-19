import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import madeLogo from "../images/MADE-LOGO-RGB_black.jpg"
import Icon from "./icon"

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const HeaderIconsContainer = styled.header`
  width: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  background: white;
`

const MadeLogo = styled.img`
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
  left: ${p => (p.modalIsOpen ? "0" : "-100vw")};
`

const SearchInputContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 80vw;
  margin: 0 auto;
  border: 0;
  border-bottom: 1px solid black;
`

const BasketIcon = styled(Icon)`
  &:before {
    font-size: 26px;
  }
`

const SearchInput = styled.input`
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  & :focus {
    outline: none;
  }
`

const MenuTitleContainer = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightGrey;
`

const MenuTitle = styled.span`
  font-family: "";
`

const MenuItemContainer = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightGrey;
  padding-left: 18px;
  padding-right: 18px;
`

const MenuItem = styled(Link)`
  font-family: "";
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

const MenuCloseButton = styled(Icon)`
color: ${p => (p.modalIsOpen ? "white" : "black")};
background: ${p => (p.modalIsOpen ? "black" : "white")};
width: 45px;
height: 45px;
position: absolute;
top: 0;
left: ${p => (p.modalIsOpen ? "80vw" : "100vw")}

&:before {
  font-size: 26px;
  position: absolute;
  top: 6px;
  left: 8px;
}
`

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
    }
  }

  render() {
    return (
      <HeaderContainer>
        <HeaderIconsContainer>
          <MadeLogo src={madeLogo} style={{ marginLeft: "35vw" }} />
          <BasketIcon characterCode={"e907"} />
        </HeaderIconsContainer>
        <SearchInputContainer>
          <Icon characterCode={"e900"} />
          <SearchInput placeholder={"Search for products and inspiration"} />
        </SearchInputContainer>
        <MenuModalContainer modalIsOpen={this.state.modalIsOpen}>
          <MenuCloseButton
            onClick={() =>
              this.setState({ modalIsOpen: !this.state.modalIsOpen })
            }
            modalIsOpen={this.state.modalIsOpen}
            characterCode={this.state.modalIsOpen ? "e905" : "e903"}
          />
          <MenuTitleContainer>
            <MenuTitle>MENU</MenuTitle>
          </MenuTitleContainer>
          <MenuItemContainer>
            <MenuItem to="/page-2/">SOFAS</MenuItem>
            <Icon characterCode={"e901"} />
          </MenuItemContainer>
        </MenuModalContainer>
      </HeaderContainer>
    )
  }
}

export default Header
