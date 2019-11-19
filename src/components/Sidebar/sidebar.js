import React from "react"
import { PoseGroup } from "react-pose"

import Icon from "../icon"

import {
  PosedMenuModalContainer,
  MenuCloseButton,
  MenuTitleContainer,
  MenuTitle,
  MenuItemContainer,
  MenuItem,
  PosedGreyOverlay,
} from "./styles"

const Sidebar = ({ modalIsOpen, closeModal }) => {
  if (typeof window !== "undefined") {
    if (modalIsOpen) {
      window.document.body.classList.add("modal-is-open")
    } else {
      window.document.body.classList.remove("modal-is-open")
    }
  }
  return (
    <PoseGroup>
      {modalIsOpen && [
        <PosedMenuModalContainer key="modal" data-cy="sidebar">
          <MenuCloseButton
            onClick={closeModal}
            modalIsOpen={modalIsOpen}
            characterCode={modalIsOpen ? "e905" : "e903"}
            data-cy="sidebar-close-button"
          />
          <div
            style={{ overflowY: "auto", maxHeight: "100vh" }}
            onClick={closeModal}
          >
            <MenuTitleContainer>
              <MenuTitle>MENU</MenuTitle>
            </MenuTitleContainer>
            <MenuItemContainer to="/chairs/armchairs">
              <MenuItem>Armchairs</MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer to="/sofas-and-armchairs/2-seater-sofas">
              <MenuItem>Small and 2 Seater Sofas</MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer to="/sofas-and-armchairs/3-seater-sofas">
              <MenuItem>3 Seater Sofas</MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer to="/sofas-and-armchairs/4-seater-sofas">
              <MenuItem>4 Seater Sofas</MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer to="/sofas-and-armchairs/sofas">
              <MenuItem>All Sofas</MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>

            <MenuItemContainer
              style={{ background: "rgb(255, 167, 146)" }}
              to="/sofas-and-armchairs/3-seater-sofas"
            >
              <MenuItem>TALENTLAB</MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer
              style={{ background: "rgb(157, 205, 210)" }}
              to="/sofas-and-armchairs/3-seater-sofas"
            >
              <MenuItem>IDEAS</MenuItem>
              <Icon characterCode={"e901"} />
            </MenuItemContainer>
            <MenuItemContainer
              style={{ background: "rgb(43, 43, 43)" }}
              to="/sofas-and-armchairs/3-seater-sofas"
            >
              <MenuItem
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
            <MenuItemContainer
              style={{ background: "rgb(43, 43, 43)" }}
              to="/sofas-and-armchairs/3-seater-sofas"
            >
              <MenuItem
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
            <MenuItemContainer
              style={{ background: "rgb(43, 43, 43)" }}
              to="/sofas-and-armchairs/3-seater-sofas"
            >
              <MenuItem
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
            <MenuItemContainer
              style={{ background: "rgb(43, 43, 43)" }}
              to="/sofas-and-armchairs/3-seater-sofas"
            >
              <MenuItem
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
        </PosedMenuModalContainer>,
        <PosedGreyOverlay
          key="ovelay"
          onClick={closeModal}
          data-cy="sidebar-overlay"
        />,
      ]}
    </PoseGroup>
  )
}
export default Sidebar
