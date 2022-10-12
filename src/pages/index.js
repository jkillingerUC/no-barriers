import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/nbheader'
import Footer from '../components/nbfooter'
import Testimonial from '../components/nbtestimonial'
import Section from '../components/nbsection'

const Page = ({ data }) => {
    return (
      <main>
        <Header 
          title={data.contentfulNbHeader.title} 
          logo={data.contentfulNbHeader.logo}
        />
        <Section 
          title={data.contentfulNbSection.title}
        />
        <Testimonial 
          quote={data.contentfulNbTestimonial.quote} 
          name={data.contentfulNbTestimonial.name}
        />
        <Footer 
          address={data.contentfulNbFooter.address} 
          copyright={data.contentfulNbFooter.copyright}
        />
      </main>
    );
  // }
};

export default Page;

export const data = graphql`
query MyQuery {
  contentfulNbHeader {
    title
    logo {
      gatsbyImageData
      id
      title
    }
  }
  contentfulNbFooter {
    address
    copyright {
      gatsbyImageData
      id
      title
    }
  }
  contentfulNbTestimonial {
    name
    quote {
      quote
      id
    }
  }
  contentfulNbSection {
    title
  }
}`