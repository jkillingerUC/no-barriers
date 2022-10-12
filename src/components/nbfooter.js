import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './nbfooter.module.css'

const Footer = ({ copyright, address }) => {
    const image = getImage(copyright)
    
    return (
        <div>
            <GatsbyImage image={image} />
            <p className={styles.bluey}>{address}</p>
        </div>
    )
}

export default Footer