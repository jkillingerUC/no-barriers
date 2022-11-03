import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as styles from './nbsection.module.css'



const Section = ({ sectionPosts }) => {
   // const photo = getImage(image)
   //console.log(posts);

    return (
        

      <div>
                
    
           {sectionPosts.map(post => (
            
            <div key={post.id}>
    
            <p>{post.title}</p>
            
            </div>
            
            ))}
        
        
        </div>)
        // <div className={styles.section}>
        //     {image && (
        //         <GatsbyImage image={photo} />
        //     )}
        //     <h2 className={styles.font}>{title}</h2>
        //     {subtitle && (
        //         <h3>{subtitle}</h3>
        //     )}
        //     <p>{renderRichText(description)}</p>
        //     {callToAction && (
        //         <p>{callToAction}</p>
        //     )}
        // </div>


}

export default Section