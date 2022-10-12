import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as styles from './nbsection.module.css'



const Section = ({ image, title, subtitle, description, callToAction }) => {
    const photo = getImage(image)

    return (
        <div>
            {image && (
                <GatsbyImage image={photo} />
            )}
            <h2 className={styles.font}>{title}</h2>
            {subtitle && (
                <h3>{subtitle}</h3>
            )}
            <p>{renderRichText(description)}</p>
            {callToAction && (
                <p>{callToAction}</p>
            )}
        </div>

    )
}

export default Section