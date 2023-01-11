import React from 'react';
import { graphql } from 'gatsby';
// import Header from '../components/nbheader'
// import Footer from '../components/nbfooter'
import Testimonial from '../components/nbtestimonial'
import FirstTestimonial from '../components/nbfirsttestimonial'
import Section from '../components/nbsection'
import SectionRow from '../components/nbsectionrow'

const Page = ({ data }) => {

 const sectionPosts = data.allContentfulNbSection.nodes;
 const testimonialPosts = data.allContentfulNbTestimonial.nodes;

    return (
      <main>

        <div id="feature1" class="profile">
          <Section sectionPosts={sectionPosts[6]} />
        </div>

        <div class="container points">
          <div class="col-md-3 col-lg-3">
            <SectionRow sectionPosts={sectionPosts} />
          </div>
        </div>
        

        <FirstTestimonial testimonialPosts={testimonialPosts}/>

        <div id="feature2" class="profile">
          <Section sectionPosts={sectionPosts[4]} />
        </div> 

        <Section sectionPosts={sectionPosts[8]} />

        <div id="hc2" class="highlight-container">
          <div id="highlight2" class="container">

            <Testimonial 
              testimonialPosts={testimonialPosts[1]} 
            />
          </div>
        </div>

        <div id="feature3" class="profile">
          <Section sectionPosts={sectionPosts[5]} />
        </div> 

        <Section sectionPosts={sectionPosts[7]} />
        
        <div id="hc3" class="highlight-container">
          <div id="highlight3" class="container">
            <Testimonial 
              testimonialPosts={testimonialPosts[0]} 
            />
          </div>
        </div>
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
      callToAction
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

  contentfulNbHeader {
    logo {
      gatsbyImageData
    }
    title
  }

}`