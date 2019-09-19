import React from "react"
import styled from 'styled-components';

const MenuModalContainer = styled.div`
width: 80vw;
height: 100vh;
top: 0;
background-color: green;
position: absolute;
z-index: 999;
left: ${p => p.modalIsOpen ? '0' : '-100vw'};
`;

const MenuModalCloseButton = styled.button`
position: absolute;
top: 0;
left: ${p => p.modalIsOpen ? '80vw' : '100vw'};
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    }
  }

  render() {


    return (
      <>
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
        </div>
      </header>
        <MenuModalContainer modalIsOpen={this.state.modalIsOpen}>
              <MenuModalCloseButton onClick={() => this.setState({modalIsOpen: !this.state.modalIsOpen})} modalIsOpen={this.state.modalIsOpen}>Menu</MenuModalCloseButton>

        </MenuModalContainer>
      </>
    );
  }
}

export default Header
