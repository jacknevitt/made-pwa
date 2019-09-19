import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';
import madeLogo from '../images/MADE-LOGO-RGB_black.jpg';
import icomoonWOFF from '../fonts/icomoon.woff';
import icomoonTTF from '../fonts/icomoon.ttf';

const Icon = styled.div`
@font-face {
  font-family: 'Made-icomoon';
  src: url('${icomoonWOFF}'); /* IE9 Compat Modes */
  src: local('Made-icomoon'),
       url('${icomoonWOFF}') format('woff'), /* Modern Browsers */
       url('${icomoonTTF}') format('truetype'), /* Safari, Android, iOS */
}

font-family: Made-icomoon;
font-size: 0;

&:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}
&:before {
  font-size: 1rem;
  line-height: 30px;
  content: '\\${p => p.characterCode}';
}

${p => p.extraStyles};
`;

const HeaderContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
`;

const HeaderIconsContainer = styled.header`
width: 100%;
padding-top: 10px;
display: flex;
justify-content: space-between;
background: white;
`;

const MadeLogo = styled.img`
width: 110px;
height: 29px;
`;

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

const SearchInput = styled.input`
width: 80vw;
margin: 0 auto;
border: 0;
border-bottom: 1px solid black;

& :focus: {
  outline: none;
}
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
      <HeaderContainer>
      <HeaderIconsContainer>
        
        <MadeLogo src={madeLogo} style={{marginLeft: '35vw'}}/>
        <Icon characterCode={'e907'}/>
      </HeaderIconsContainer>
        <SearchInput placeholder={'Search for products and inspiration'}/>
        <MenuModalContainer modalIsOpen={this.state.modalIsOpen}>
              <Icon onClick={() => this.setState({modalIsOpen: !this.state.modalIsOpen})} extraStyles={this.state.modalIsOpen ? 'position: absolute; top: 0; left: 80vw' : 'position: absolute; top: 0; left: 100vw'} characterCode={this.state.modalIsOpen ? 'e905' :'e903'}/>
              <Link to="/page-2/">SOFAS</Link>
        </MenuModalContainer>
      </HeaderContainer>
    );
  }
}

export default Header
