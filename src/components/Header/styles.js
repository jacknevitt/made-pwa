import styled from "styled-components"

import Icon from "../icon"

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
`

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

export const SearchInputContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #cfcdcd;
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
  &::placeholder {
    color: #cfcdcd;
  }
`

export const SearchIcon = styled(Icon)`
  padding-left: 6px;
  padding-right: 6px;
  &:before {
    font-size: 18px;
  }
`
