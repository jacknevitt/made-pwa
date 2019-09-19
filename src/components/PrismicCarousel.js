import React from "react"

const PrismicCarousel = ({ items }) => {
  console.log(items)
  return (
    <div>
      {items.map((item, index) => (
        <PrismicCarouselCard
          key={`carousel_${index}`}
          title={item.hp_carousel_item_title.text}
          subtitle={item.hp_carousel_item_subtitle.text}
          cta={item.hp_item_text_cta.text}
        />
      ))}
    </div>
  )
}

export default PrismicCarousel

const PrismicCarouselCard = ({ title, subtitle, cta }) => (
  <div>
    <p>{title}</p>
    <p>{subtitle}</p>
    <p>{cta.toUpperCase()}</p>
  </div>
)
