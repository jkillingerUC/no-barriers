import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './nbfooter.module.css'

const Footer = ({ copyright, address }) => {
    return (
        <div>
            <img />
            <p className={styles.bluey}>{address}</p>
        </div>
    )
}

export default Footer