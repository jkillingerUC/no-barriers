import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/nbheader'
import Footer from '../components/nbfooter'
import Testimonial from '../components/nbtestimonial'
import FirstTestimonial from '../components/nbfirsttestimonial'
import Section from '../components/nbsection'
import SectionRow from '../components/nbsectionrow'

const Page = ({ data }) => {

 const sectionPosts = data.allContentfulNbSection.nodes;
 const testimonialPosts = data.allContentfulNbTestimonial.nodes;

    return (
      <main>

        <Header />

        <div id="feature1" class="profile">
          <Section sectionPosts={sectionPosts[8]} />
        </div>

        <div class="container points">
            <SectionRow sectionPosts={sectionPosts} />
        </div>
        
        <FirstTestimonial testimonialPosts={testimonialPosts}/>

        <div id="feature2" class="profile">
          <Section sectionPosts={sectionPosts[2]} />
        </div> 

        <div id="difference" class="container points">
          <Section sectionPosts={sectionPosts[1]} />
        </div>

        <div id="hc2" class="highlight-container">
          <div id="highlight2" class="container">
            <Testimonial 
              testimonialPosts={testimonialPosts[1]} 
            />
          </div>
        </div>

        <div id="feature3" class="profile">
          <Section sectionPosts={sectionPosts[7]} />
        </div> 

        <div id="professional" class="container points">
          <Section sectionPosts={sectionPosts[0]} />
        </div>
        
        
        <div id="hc3" class="highlight-container">
          <div id="highlight3" class="container">
            <Testimonial 
              testimonialPosts={testimonialPosts[0]} 
            />
          </div>
        </div>

        <Footer />

      </main>
    );
};

export default Page;

export const data = graphql`
query MyQuery {

  allContentfulNbTestimonial {
    nodes {
    name
    quote {
      quote
      id
    }
    image {
      gatsbyImageData
      id
      title
    }
  }
}
 
  allContentfulNbSection {
    nodes{
      title
      subtitle
      description {
        raw
      }
      image {
        gatsbyImageData
        id
        title
      }
    } 
  }
}`