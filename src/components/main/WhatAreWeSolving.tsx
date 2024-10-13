

import SolvingLogo from '../../assets/solving.png';
import Layers from '../../assets/layers.png';
import '../../styles/AboutUs.css';

const WhatAreWeSolving = () => {
    return (
        <section className='about-us-main-container solving-main-container'>
            <div className='about-us-container solving-container'>
                <div className='about-us-section-1'><img src={SolvingLogo} /></div>
                <div className='about-us-section-2'>
                    <h2 className='about-us-title'>What Are We Solving</h2>
                    <p className='about-us-desc'>The gap between academia and industry has long been a barrier to innovation and growth. Traditional education systems struggle to keep pace with the rapid advancements in technology, leaving graduates underprepared for the demands of the modern workforce. It's time to break through this barrier.
                    </p>
                    <p className='about-us-desc'>At SkillGig, we recognise the urgency of aligning education with industry needs. Our cutting-edge curriculum is designed to bridge this gap, ensuring that our students are not only knowledgeable but also equipped with practical skills that are immediately applicable in the workplace.</p>
                    <p className='about-us-desc'>By breaking through the traditional constraints of academic education, SkillGig is paving the way for a new era of learning. We are committed to producing graduates who are not just job-ready but future-proof, ready to excel and lead in their chosen fields.</p>
                </div>
                <img src={Layers} className='layers' />
            </div>
        </section>
    )
}

export default WhatAreWeSolving;
