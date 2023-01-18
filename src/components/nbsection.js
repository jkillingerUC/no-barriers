import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const Section = ({ sectionPosts }) => { 
      const { title, subtitle, image, description } = sectionPosts;
      const photo = getImage(image) 

    return (
        <div> 
            {image && (
                <GatsbyImage image={photo} />
            )}
            <div class="container section">
              <div>
                <h2>{title}</h2>
                {subtitle && (
                  <h3>{subtitle}</h3>
                )}
                <p>{renderRichText(description)}</p>
              </div>
            </div>
        </div>)

}

export default Section