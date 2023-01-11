import React from 'react';
import Section from '../components/nbsection'



const SectionRow = ({ sectionPosts }) => {
    return (
        <div className="info-row">
            <Section sectionPosts={sectionPosts[6]} />
            <Section sectionPosts={sectionPosts[5]} />
            <Section sectionPosts={sectionPosts[3]} />
            <Section sectionPosts={sectionPosts[4]} />
        </div>
    )
}

export default SectionRow