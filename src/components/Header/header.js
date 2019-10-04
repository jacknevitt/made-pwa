import { Link } from "gatsby"
import React from "react"

import madeLogo from "../../images/MADE-logo.svg"
import Icon from "../icon"
import Sidebar from "../Sidebar/sidebar"
import Container from "../Atoms/container"

import {
  HeaderContainer,
  HeaderIconsContainer,
  MadeLogo,
  BasketIcon,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
} from "./styles"

class Header extends React.Component {
  state = {
    modalIsOpen: false,
  }
  openModal = () => this.setState({ modalIsOpen: true })
  closeModal = () => this.setState({ modalIsOpen: false })

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
            aria-label="Open side menu"
          >
            <Icon characterCode="e903"></Icon>
          </button>
          <Link to="/">
            <MadeLogo src={madeLogo} alt="" />
          </Link>
          <Link to="/cart">
            <BasketIcon characterCode={"e907"} />
          </Link>
        </HeaderIconsContainer>
        <Container>
          <SearchInputContainer>
            <SearchIcon characterCode={"e900"} />
            <SearchInput placeholder={"Search for products and inspiration"} />
          </SearchInputContainer>
        </Container>
        <Sidebar
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
        />
      </HeaderContainer>
    )
  }
}

export default Header
