import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Footer = ({ copyright, address }) => {
    const image = getImage(copyright)
    
    return (
        <div>
            <GatsbyImage image={image} />
            <p>{address}</p>
        </div>
    )
}

export default Footer