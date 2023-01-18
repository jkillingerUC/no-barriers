import React from 'react'
import Testimonial from './nbtestimonial'

const FirstTestimonial = ({testimonialPosts}) => { 
  return (
    <div id="hc1" class="highlight-container">
      <div id="bar1" class="bar"> </div>
      <div id="bar2" class="bar"> </div>
      <div id="bar3" class="bar"> </div>
      <div id="bar4" class="bar"> </div>
      <div id="bar5" class="bar"> </div>
      <div id="bar6" class="bar"> </div>
      <div id="bar7" class="bar"> </div>
      <div id="bar8" class="bar"> </div>
      <div id="bar9" class="bar"> </div>
      <div id="bar10" class="bar"> </div>
      <div id="bar11" class="bar"> </div>
      <div id="bar12" class="bar"> </div>
      <div id="bar13" class="bar"> </div>
      <div id="bar14" class="bar"> </div>
      <div id="bar15" class="bar"> </div>
      <div id="bar16" class="bar"> </div>
      <div id="highlight1" class="container">
        <Testimonial 
          testimonialPosts={testimonialPosts[2]}
        />
      </div>
  </div>
  )
}

export default FirstTestimonial