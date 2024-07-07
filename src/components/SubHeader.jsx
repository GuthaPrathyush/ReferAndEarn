import React from 'react';
import '../stylesheets/subheader.css';

const SubHeader = () => {
    return (
        <div className="navigationElementContainer">
            <div className="navigationElements">
                <div className="navigationElement active">
                    <a href='#'>Refer</a>
                </div>
                <div className="navigationElement">
                    <a href='#benifits'>Benifits</a>
                </div>
                <div className="navigationElement">
                    <a href='#faqs'>FAQs</a>
                </div>
                <div className="navigationElement">
                    <a href='#support'>Support</a>
                </div>
            </div>
        </div>
    )
}

export default SubHeader
