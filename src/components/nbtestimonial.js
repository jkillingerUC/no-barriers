import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Testimonial = ({ testimonialPosts }) => {
    const { name, quote, image } = testimonialPosts;
    const photo = getImage(image)
    console.log(testimonialPosts)

    return (
        <div>
            <div class="col-xs-12 col-sm-7 col-md-offset-1 col-lg-offset-1 col-md-6 col-lg-6">
                <p class="ss-quote">{quote.quote}</p>
                <p class="student"><strong>{name}</strong></p>
            </div>

            <div class="col-xs-offset-0 col-xs-12 col-sm-offset-0 col-sm-5 col-md-4 col-lg-4">
            <GatsbyImage image={photo} />
            </div>
        </div>)
}

export default Testimonial