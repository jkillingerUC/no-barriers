import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './nbheader.module.css'


const Header = ({ title, logo }) => {
    return (
        <div>
            <h1 className={styles.font}>{title}</h1>
            <GatsbyImage image={logo} />
        </div>

    )
}

export default Header