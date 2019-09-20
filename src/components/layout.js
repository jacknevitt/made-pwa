/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import NerudaTTF from "../fonts/FSNerudaWeb-Black.ttf"
import NerudaWOFF from "../fonts/FSNerudaWeb-Black.woff"
import MeridianRegTTF from "../fonts/FSMeridianWeb-Regular.ttf"
import MeridianRegWOFF from "../fonts/FSMeridianWeb-Regular.woff"
import MeridianMedTTF from "../fonts/FSMeridianWeb-Medium.ttf"
import MeridianMedWOFF from "../fonts/FSMeridianWeb-Medium.woff"
import Header from "./header"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Neruda';
  src: url('${NerudaWOFF}'); /* IE9 Compat Modes */
  src: local('Made-icomoon'),
       url('${NerudaWOFF}') format('woff'), /* Modern Browsers */
       url('${NerudaTTF}') format('truetype'), /* Safari, Android, iOS */
}
@font-face {
  font-family: 'Meridian-Regular';
  src: url('${MeridianRegWOFF}'); /* IE9 Compat Modes */
  src: local('Made-icomoon'),
       url('${MeridianRegWOFF}') format('woff'), /* Modern Browsers */
       url('${MeridianRegTTF}') format('truetype'), /* Safari, Android, iOS */
}
@font-face {
  font-family: 'Meridian-Medium';
  src: url('${MeridianMedWOFF}'); /* IE9 Compat Modes */
  src: local('Made-icomoon'),
       url('${MeridianMedWOFF}') format('woff'), /* Modern Browsers */
       url('${MeridianMedTTF}') format('truetype'), /* Safari, Android, iOS */
}

body {
  margin: 0px;
  font-family: 'Meridian-Regular', sans-serif;
}

h1 {
  font-family: 'Neruda', serif;
}

a {
  color: black;
  text-decoration: none;
}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
        <footer style={{ textAlign: "center", padding: "10px 0 0" }}></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
