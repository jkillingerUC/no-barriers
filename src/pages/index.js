import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/nbheader'
import Footer from '../components/nbfooter'

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
        <Link to="/about">About</Link>
        <Footer address={'123 Jeff lane'} />
      </main>
    );
  // }
};

export default Page;

export const data = graphql`
query headQuery {
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
}`