import { Link } from "gatsby"
import React from "react"

import madeLogo from "../../images/MADE-logo.svg"
import Icon from "../icon"

import {
  HeaderContainer,
  HeaderIconsContainer,
  MadeLogo,
  BasketIcon,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  PosedMenuModalContainer,
  MenuCloseButton,
  MenuTitleContainer,
  MenuTitle,
  MenuItemContainer,
  MenuItem,
  PosedGreyOverlay,
} from "./styles"

class Header extends React.Component {
  state = {
    modalIsOpen: false,
  }
  openModal = () => this.setState({ modalIsOpen: true })

  render() {
    return (
      <HeaderContainer>
        <HeaderIconsContainer>
          <button
            onClick={this.openModal}
            style={{
              appearance: "none",
              border: "none",
              background: "none",
              padding: "0",
              fontSize: "26px",
            }}
            ariaLabel="Open side menu"
          >
            <Icon characterCode="e903"></Icon>
          </button>
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
              }
              if (!this.state.modalIsOpen) {
                document.body.style.overflow = "hidden"
                document.body.style.position = "relative"
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
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                SOFAS
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                ARMCHAIRS
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                CHAIRS
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                TABLES
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                STORAGE
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                BEDS
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                MATTRESSES
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                LIGHTING
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                HOME FURNISHINGS
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                COOK &amp; DINE
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                ACCESSORIES
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                LIFESTYLE
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                CLEARANCE
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                FURNITURE BY ROOM
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer style={{ background: "rgb(255, 167, 146)" }}>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                TALENTLAB
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer style={{ background: "rgb(157, 205, 210)" }}>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
              >
                IDEAS
              </MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer style={{ background: "rgb(43, 43, 43)" }}>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
                style={{
                  color: "white",
                  lineHeight: "35px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "155px",
                }}
              >
                <Icon characterCode={"e903"} style={{ color: "white" }} />
                UNITED KINGDOM
              </MenuItem>
              <Icon characterCode={"e901"} style={{ color: "white" }} />
            </MenuItemContainer>
            <MenuItemContainer style={{ background: "rgb(43, 43, 43)" }}>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
                style={{
                  color: "white",
                  lineHeight: "35px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100px",
                }}
              >
                <Icon
                  characterCode={"e92d"}
                  style={{
                    color: "white",
                  }}
                />
                ACCOUNT
              </MenuItem>
              <Icon characterCode={"e901"} style={{ color: "white" }} />
            </MenuItemContainer>
            <MenuItemContainer style={{ background: "rgb(43, 43, 43)" }}>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
                style={{
                  color: "white",
                  lineHeight: "35px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100px",
                }}
              >
                <Icon characterCode={"e94a"} style={{ color: "white" }} />
                SUPPORT
              </MenuItem>
              <Icon characterCode={"e901"} style={{ color: "white" }} />
            </MenuItemContainer>
            <MenuItemContainer style={{ background: "rgb(43, 43, 43)" }}>
              <MenuItem
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  if (this.state.modalIsOpen) {
                    document.body.style.overflow = "auto"
                    document.body.style.position = "relative"
                  }
                  if (!this.state.modalIsOpen) {
                    document.body.style.overflow = "hidden"
                    document.body.style.position = "relative"
                  }
                }}
                to="/sofas-and-armchairs/"
                style={{
                  color: "white",
                  lineHeight: "35px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "155px",
                }}
              >
                <Icon characterCode={"e918"} style={{ color: "white" }} />
                OUR SHOWROOM
              </MenuItem>
              <Icon characterCode={"e901"} style={{ color: "white" }} />
            </MenuItemContainer>
          </div>
        </PosedMenuModalContainer>
        <PosedGreyOverlay pose={this.state.modalIsOpen ? "open" : "closed"} />
      </HeaderContainer>
    )
  }
}

export default Header
