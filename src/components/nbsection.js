import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const Section = ({ sectionPosts }) => { 
      const { title, subtitle, image, description, callToAction } = sectionPosts;
      const photo = getImage(image) 

    return (
        <div> 
            {image && (
                <GatsbyImage image={photo} />
            )}
            <div class="container statement">
              <div>
                <h2>{title}</h2>
                {subtitle && (
                  <h3>{subtitle}</h3>
                )}
                <p>{renderRichText(description)}</p>
              </div>
            </div>



            {callToAction && (
                <p>{callToAction}</p>
            )}
        </div>)

}

export default Section