import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Header = ({ title, logo }) => {
    const image = getImage(logo)
    
    return (
        <div>
            <h1>{title}</h1>
            <GatsbyImage image={image} />
        </div>

    )
}

export default Header