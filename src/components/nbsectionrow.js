import React from 'react';
import Section from '../components/nbsection'



const SectionRow = ({ sectionPosts }) => {
    return (
        <div className="info-row">


            {sectionPosts.map(sec => {
                if((sec.id) === "00879e9c-cff0-59e0-b096-f3c0b9cfe734" ){
                return (
                    <div class="col-md-3 col-lg-3">
                        <Section sectionPosts={sec} />
                    </div>
                )
                }
            })}

            {sectionPosts.map(sec => {
                if((sec.id) === "717365f0-b07c-5cf5-8f8c-7ac313d9cf01" ){
                return (
                    <div class="col-md-3 col-lg-3">
                        <Section sectionPosts={sec} />
                    </div>
                )
                }
            })}

            {sectionPosts.map(sec => {
                if((sec.id) === "9a9f6725-e0cc-5841-8054-3edfa84ec583" ){
                return (
                    <div class="col-md-3 col-lg-3">
                        <Section sectionPosts={sec} />
                    </div>
                )
                }
            })}

            {sectionPosts.map(sec => {
                if((sec.id) === "9e9b28d2-75ed-5dc9-aed7-e162cf7688d1" ){
                return (
                    <div class="col-md-3 col-lg-3">
                        <Section sectionPosts={sec} />
                    </div>
                )
                }
            })}

        </div>
    )
}




export default SectionRow