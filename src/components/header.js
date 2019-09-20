import { Link } from "gatsby"
import React from "react"
import posed from "react-pose"
import styled from "styled-components"
import madeLogo from "../images/MADE-logo.svg"
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
  open: { background: "rgba(235, 235, 235, 1)", zIndex: 9, overflow: "hidden" },
  closed: {
    background: "rgba(235, 235, 235, 0)",
    zIndex: -9,
    overflow: "auto",
  },
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
  font-family: "Meridian-Regular";
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
  ${p => p.extraStyles};
`

const MenuItem = styled(Link)`
  font-family: "Meridian-Regular";
  font-size: 14px;
  text-decoration: none;
  &:visited {
    text-decoration: none;
    color: black;
    ${p => p.extraStyles};
  }
  &:hover {
    text-decoration: none;
    color: black;
    ${p => p.extraStyles};
  }
  &:focus {
    text-decoration: none;
    color: black;
    ${p => p.extraStyles};
  }
  &:hover,
  &:active {
    text-decoration: none;
    color: black;
    ${p => p.extraStyles};
  }
  ${p => p.extraStyles};
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
          className={this.state.modalIsOpen ? "open" : "closed"}
        >
          <MenuCloseButton
            onClick={() => {
              this.setState({ modalIsOpen: !this.state.modalIsOpen })
              if (this.state.modalIsOpen) {
                document.body.style.overflow = "auto"
                document.body.style.position = "relative"
                document.html.style.overflow = "auto"
              }
              if (!this.state.modalIsOpen) {
                document.body.style.overflow = "hidden"
                document.body.style.position = "relative"
                document.html.style.overflow = "hidden"
              }
            }}
            modalIsOpen={this.state.modalIsOpen}
            characterCode={this.state.modalIsOpen ? "e905" : "e903"}
          />
          <div style={{ overflowY: "scroll", maxHeight: "100vh" }}>
            <MenuTitleContainer>
              <MenuTitle>MENU</MenuTitle>
            </MenuTitleContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                SOFAS
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                ARMCHAIRS
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                CHAIRS
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                TABLES
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                STORAGE
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                BEDS
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                MATTRESSES
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                LIGHTING
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                HOME FURNISHINGS
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                COOK & DINE
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                ACCESSORIES
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                LIFESTYLE
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                CLEARANCE
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                FURNITURE BY ROOM
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer extraStyles={"background: rgb(255, 167, 146);"}>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                TALENTLAB
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer extraStyles={"background: rgb(157, 205, 210);"}>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
              >
                IDEAS
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer extraStyles={"background: rgb(43, 43, 43);"}>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
                extraStyles={
                  "color: white; line-height: 35px; display: flex;justify-content: space-between; width: 155px;"
                }
              >
                <Icon characterCode={"e903"} extraStyles={"color: white;"} />
                UNITED KINGDOM
              </MenuItem>
              <Icon characterCode={"e901"} extraStyles={"color: white"} />
            </MenuItemContainer>
            <MenuItemContainer extraStyles={"background: rgb(43, 43, 43);"}>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
                extraStyles={
                  "color: white; line-height: 35px; display: flex;justify-content: space-between; width: 100px;"
                }
              >
                <Icon characterCode={"e92d"} extraStyles={"color: white;"} />
                ACCOUNT
              </MenuItem>
              <Icon characterCode={"e901"} extraStyles={"color: white"} />
            </MenuItemContainer>
            <MenuItemContainer extraStyles={"background: rgb(43, 43, 43);"}>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
                extraStyles={
                  "color: white; line-height: 35px; display: flex;justify-content: space-between; width: 100px;"
                }
              >
                <Icon characterCode={"e94a"} extraStyles={"color: white;"} />
                SUPPORT
              </MenuItem>
              <Icon characterCode={"e901"} extraStyles={"color: white"} />
            </MenuItemContainer>
            <MenuItemContainer extraStyles={"background: rgb(43, 43, 43);"}>
              <MenuItem
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                }
                to="/sofas-and-armchairs/"
                extraStyles={
                  "color: white; line-height: 35px; display: flex;justify-content: space-between; width: 155px;"
                }
              >
                <Icon characterCode={"e918"} extraStyles={"color: white;"} />
                OUR SHOWROOM
              </MenuItem>
              <Icon characterCode={"e901"} extraStyles={"color: white"} />
            </MenuItemContainer>
          </div>
        </PosedMenuModalContainer>
        <PosedGreyOverlay pose={this.state.modalIsOpen ? "open" : "closed"} />
      </HeaderContainer>
    )
  }
}

export default Header
