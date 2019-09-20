import { Link } from "gatsby"
import React from "react"
import posed from "react-pose"
import styled from "styled-components"
import madeLogo from "../images/MADE-LOGO-RGB_black.jpg"
import Icon from "./icon"

const HeaderContainer = styled.div`
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
const PosedGreyOverlay = posed(GreyOverlay)({
  open: { background: "rgba(235, 235, 235, 1)" },
  closed: { background: "rgba(235, 235, 235, 0)" },
})

const HeaderIconsContainer = styled.header`
  width: 100%;
  padding: 6px 15px 15px;
  display: flex;
  justify-content: space-between;
  background: white;
`

const EmptyDiv = styled.div`
  background-color: white;
  width: 20px;
  height: 30px;
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
`

const PosedMenuModalContainer = posed(MenuModalContainer)({
  open: { left: 0 },
  closed: { left: "-100vw" },
})

const SearchInputContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;
  margin: 0 10px;
  border: 0;
  border-bottom: 1px solid black;
`

const BasketIcon = styled(Icon)`
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

const SearchInput = styled.input`
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
  width: 70vw;
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
left: ${p => (p.modalIsOpen ? "80vw" : "102vw")}

&:before {
  font-size: 26px;
  position: absolute;
  top: 6px;
  left: 9px;
}
`

const SearchIcon = styled(Icon)`
  padding-left: 6px;
  padding-right: 6px;
  &:before {
    font-size: 18px;
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
          <EmptyDiv />
          <Link to="/">
            <MadeLogo src={madeLogo} />
          </Link>
          <Link to="/cart">
            <BasketIcon characterCode={"e907"} />
          </Link>
        </HeaderIconsContainer>
        <SearchInputContainer>
          <SearchIcon characterCode={"e900"} />
          <SearchInput placeholder={"Search for products and inspiration"} />
        </SearchInputContainer>
        <PosedMenuModalContainer
          pose={this.state.modalIsOpen ? "open" : "closed"}
        >
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
            <MenuItem to="/sofas-and-armchairs/">SOFAS</MenuItem>
            <Icon characterCode={"e901"} />
          </MenuItemContainer>
        </PosedMenuModalContainer>
        <PosedGreyOverlay pose={this.state.modalIsOpen ? "open" : "closed"} />
      </HeaderContainer>
    )
  }
}

export default Header
