import React from "react"
import PrismicCarouselCard from "./PrismicCarouselCard"

const PrismicCarousel = ({ items }) => (
  <div>
    {items.map((item, index) => (
      <PrismicCarouselCard
        key={`carousel_${index}`}
        title={item.hp_carousel_item_title.text}
      />
    ))}
  </div>
)

export default PrismicCarousel
