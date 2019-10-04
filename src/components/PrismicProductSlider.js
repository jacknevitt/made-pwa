import React from "react"

import styled from "styled-components"

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  margin: 1em 0 1em;
`

const CardContainer = styled.div`
  height: 70 px;
  margin: 0.5em;
`

const StyledImg = styled.img`
  // height: 230px;
  width: 200px;
`

const StyledSliderTitle = styled.h2`
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  margin: 3vh 0 0;
`

const StyledText = styled.p`
  text-align: center;
  padding: 5px;
`

const images = [
  {
    url:
      "catalog/product/catalog/7/8/1/e/781e10284e2fa1d1323349d45a1f925708508d19_s_o_sofsct019greuk_scott_3seater_with_cushions_grass_pl.jpg",
  },
  {
    url:
      "catalog/product/catalog/2/c/0/2/2c026ecdebceaf888d5b57bd0f7cd1fcd37c29f4_CLPGLO024ZBR_UK_Globe_Large_Flush_Pendant_Black_Antique_Brass_and_Smoked_Glass_PL.jpg",
  },
  {
    url:
      "catalog/product/catalog/f/7/4/1/f74157894aa8b4cc1a81416215eb9d514650a002_BEDSKY079GRY_UK_Skye_Kingsize_Bed_With_Storage_Royal_Blue_Velvet_PL.jpg",
  },
  {
    url:
      "catalog/product/catalog/b/2/c/3/b2c3f917bef787d88a6c0b72e442b702e140e766_STOLUC002MAN_UK_Lucien_Sideboard_Dark_Mango_Wood_PL.jpg",
  },
  {
    url:
      "catalog/product/catalog/2/6/1/c/261c0339672ad441e657b998128b3f89aaf14702_DWRBUD001ZCO_UK_Bude_16_Piece_Cutlery_Set_Matt_Copper_PL.jpg",
  },
]

const ProductCard = ({ title, img }) => (
  <CardContainer>
    <StyledImg
      src={`https://res.cloudinary.com/made-com/image/upload/c_pad,d_made.svg,f_auto,w_265,dpr_1.0,q_auto:best/v4/${img}`}
      alt={title}
    />
    <StyledText>{title}</StyledText>
  </CardContainer>
)

const PrismicProductSlider = props => {
  // we need to fetch product info by sku
  const { items } = props
  return (
    <>
      <StyledSliderTitle>Best of the Bunch</StyledSliderTitle>
      <SliderContainer>
        {items.map((item, index) =>
          index <= 4 ? (
            <ProductCard
              key={item.sku}
              title={item.display_name}
              img={images[index].url}
            />
          ) : null
        )}
      </SliderContainer>
    </>
  )
}

export default PrismicProductSlider
