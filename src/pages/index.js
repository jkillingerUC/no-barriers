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

        {sectionPosts.map(sec => {
            if((sec.id) === "fd88a59d-0a83-543e-b15a-56db8451e4da" ){
              return (
                <div id="feature1" class="profile">
                  <Section sectionPosts={sec} />
                </div>
              )
            }
        })}

        <div class="container points">
            <SectionRow sectionPosts={sectionPosts} />
        </div>
        
        <FirstTestimonial testimonialPosts={testimonialPosts}/>

        {sectionPosts.map(sec => {
          if((sec.id) === "e64c2c60-fce5-5838-a172-cd01af2283c6" ){
            return (
              <div id="feature2" class="profile">
                <Section sectionPosts={sec} />
              </div> 
            ) 
          }
        })}


        {sectionPosts.map(sec => {
          if((sec.id) === "b7ced01a-f337-522a-ba85-dd88bde21eb1" ){
            return (
              <div id="difference" class="container points">
                <Section sectionPosts={sec} />
              </div>
            ) 
          }
        })}









        <div id="hc2" class="highlight-container">
          <div id="highlight2" class="container">
        <Testimonial 
              testimonialPosts={testimonialPosts[1]} 
            />
          </div>
        </div>

        {sectionPosts.map(sec => {
          if((sec.id) === "0c439502-9330-5cc7-8612-8fa15413ce7f" ){
            return (
              <div id="feature3" class="profile">
                <Section sectionPosts={sec} />
              </div> 
            )
          }
        })}




        {sectionPosts.map(sec => {
          if((sec.id) === "a97c2604-5ea8-5361-90fd-d1f3844c025a" ){
            return (
              <div id="professional" class="container points">
                <Section sectionPosts={sec} />
              </div>
            )
          }
        })}




        
        
        {testimonialPosts.map(tes => {
          if((tes.id) === "b9c45db9-a37c-5dfb-b5f3-32508465e3a3" ){
            return (
              <div id="hc3" class="highlight-container">
                <div id="highlight3" class="container">
                  <Testimonial testimonialPosts={tes} />
                </div>
              </div>
            )
          }
        })}




        <div id="hc3" class="highlight-container">
          <div id="highlight3" class="container">
            <Testimonial testimonialPosts={testimonialPosts[0]} />
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
      id
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