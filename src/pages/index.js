import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/nbheader'
import Footer from '../components/nbfooter'
import Testimonial from '../components/nbtestimonial'
import Section from '../components/nbsection'

const Page = ({data}) => {

 const sectionPosts = data.allContentfulNbSection.nodes;
 const testimonialPosts = data.allContentfulNbTestimonial.nodes;

    return (
      <main>
        
        <Section 
          sectionPosts={sectionPosts}
        />
        <Testimonial 
          testimonialPosts={testimonialPosts}
        />
      </main>
    );
};

export default Page;

export const data = graphql`
query MyQuery {

  allContentfulNbHeader {
    nodes{
    title
    logo {
      gatsbyImageData
      id
      title
    }
  }
}
  allContentfulNbFooter {
    nodes{
    address
    copyright {
      gatsbyImageData
      id
      title
    }
  }
}
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
}`