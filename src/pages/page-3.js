import React from "react"
// import { graphql, Link } from "gatsby"

export default ({ data }) => {
  console.log("💀 data.sofa.tag: ", data.sofa.tag)
  return (
    <div>
      <h1>funziona?</h1>
      <h2>{data.sofa.tag.metadata.name}</h2>
    </div>
  )
}
export const query = graphql`
  query {
    sofa {
      tag(store: GB, url: "sofas-and-armchairs/3-seater-sofas") {
        metadata {
          store
          name
          tag
          url
        }
      }
    }
  }
`
