import React from "react"

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

const PrismicCarouselCard = ({ title }) => <div>{title}</div>
