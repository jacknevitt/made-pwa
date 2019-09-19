import React, { Component } from "react"

class PrismicHomePage extends Component {
  state = {}

  componentDidMount() {
    fetch(
      "https://prod-mws.made.com/api/content/lang/en-gb/custom_type/homepage"
    )
      .then(res => res.json())
      .then(data => console.log(data.data))
      .catch(err => console.log(err))
  }
  render() {
    return <div>PrismicHomepage</div>
  }
}

export default PrismicHomePage
