import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './nbfooter.module.css'

const Footer = ({ copyright, address }) => {
    const image = getImage(copyright)
    
    return (
        <div className={styles.footer}>
            <GatsbyImage image={image} />
            <p className={styles.font}>{address}</p>
        </div>
    )
}

export default Footer