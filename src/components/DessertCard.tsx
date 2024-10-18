import React from 'react'

export type DessertCardProp = {
    image: {
        thumbnail?: string,
        mobile?: string,
        tablet?: string,
        desktop: string
    },
    name: string,
    category: string,
    price: number
}

const DessertCard = (props: DessertCardProp) => {
  return (
    <div>
        <img src={props.image.desktop} alt="nigga" />
        <h1>{props.name}</h1>
        <h2>{props.category}</h2>
        <h3>{props.price}</h3>
    </div>
  )
}

export default DessertCard