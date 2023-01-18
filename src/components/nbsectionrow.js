import React from 'react';
import Section from '../components/nbsection'



const SectionRow = ({ sectionPosts }) => {
    return (
        <div className="info-row">
            <div class="col-md-3 col-lg-3">
                <Section sectionPosts={sectionPosts[6]} />
            </div>
            <div class="col-md-3 col-lg-3">
                <Section sectionPosts={sectionPosts[5]} />
            </div>
            <div class="col-md-3 col-lg-3">
                <Section sectionPosts={sectionPosts[3]} />
            </div>
            <div class="col-md-3 col-lg-3">
                <Section sectionPosts={sectionPosts[4]} />
            </div>
        </div>
    )
}

export default SectionRow