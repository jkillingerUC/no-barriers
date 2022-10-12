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
          image={data.contentfulNbSection.image}
          title={data.contentfulNbSection.title}
          subtitle={data.contentfulNbSection.subtitle}
          description={data.contentfulNbSection.description}
          callToAction={data.contentfulNbSection.callToAction}
        />
        <Testimonial 
          image={data.contentfulNbTestimonial.image}
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
    image {
      gatsbyImageData
      id
      title
    }
  }
  contentfulNbSection {
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
}`