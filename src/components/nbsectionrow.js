import React from 'react';
import Section from '../components/nbsection'



const SectionRow = ({ sectionPosts }) => {
    return (
        <div className="info-row">
            <Section sectionPosts={sectionPosts[3]} />
            <Section sectionPosts={sectionPosts[2]} />
            <Section sectionPosts={sectionPosts[0]} />
            <Section sectionPosts={sectionPosts[1]} />
        </div>
    )
}

export default SectionRow