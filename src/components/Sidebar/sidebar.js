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
        <PosedMenuModalContainer
          className={modalIsOpen ? "open" : "closed"}
          key="modal"
        >
          <MenuCloseButton
            onClick={closeModal}
            modalIsOpen={modalIsOpen}
            characterCode={modalIsOpen ? "e905" : "e903"}
          />
          <div
            style={{ overflowY: "auto", maxHeight: "100vh" }}
            onClick={closeModal}
          >
            <MenuTitleContainer>
              <MenuTitle>MENU</MenuTitle>
            </MenuTitleContainer>
            <MenuItemContainer to="/sofas-and-armchairs/3-seater-sofas">
              <MenuItem>SOFAS</MenuItem>
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
        <PosedGreyOverlay key="ovelay" onClick={closeModal} />,
      ]}
    </PoseGroup>
  )
}
export default Sidebar
