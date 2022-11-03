import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './nbtestimonial.module.css'


const Testimonial = ({ testimonialPosts }) => {
    //const photo = getImage(image)
    //console.log(posts);

    return (
        

        <div>
                  
      
             {testimonialPosts.map(post => (
              
              <div key={post.id}>
      
              <p>{post.name}</p>
              
              </div>
              
              ))}
          
          
          </div>)
}

export default Testimonial