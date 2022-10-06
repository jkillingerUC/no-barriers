import React from 'react'
// import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './nbtestimonial.module.css'


const Testimonial = ({ quote, name }) => {
    return (
        <div>
            <p className={styles.font}>{quote.quote}</p>
            <p>{name}</p>
        </div>

    )
}

export default Testimonial