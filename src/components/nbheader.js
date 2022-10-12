import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './nbheader.module.css'


const Header = ({ title, logo }) => {
    const image = getImage(logo)
    
    return (
        <div>
            <h1 className={styles.font}>{title}</h1>
            <GatsbyImage image={image} />
        </div>

    )
}

export default Header