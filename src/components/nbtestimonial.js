import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './nbtestimonial.module.css'


const Testimonial = ({ image, quote, name }) => {
    const photo = getImage(image)

    return (
        <div className={styles.testimonial}>
            <GatsbyImage image={photo} />
            <p className={styles.font}>{quote.quote}</p>
            <p>{name}</p>
        </div>

    )
}

export default Testimonial