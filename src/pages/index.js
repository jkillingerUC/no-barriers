import React from 'react';
import { graphql, Link } from 'gatsby';
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
        <h1>Index Page, perhaps</h1>
        <p>
          This is an example template for helping you to learn how to build a site
          powered by Gatsby. 
        </p>

        <Section 
          title={data.contentfulNbSection.title}
        
        />

        <Testimonial 
          quote={data.contentfulNbTestimonial.quote} 
          name={data.contentfulNbTestimonial.name}
        />

        <Link to="/about">About</Link>
        <Footer 
          address={data.contentfulNbFooter.address} 
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
      id
      file {
        url
        fileName
        contentType
      }
    }
  }
  contentfulNbFooter {
    address
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