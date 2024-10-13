import AboutUsLogo from '../../assets/about-us.png';
import Layers from '../../assets/layers.png';
import '../../styles/AboutUs.css';

const AboutUs = () => {
    return (
        <section className='about-us-main-container'>
            <div className='about-us-container'>
                <div className='about-us-section-1'><img src={AboutUsLogo} /></div>
                <div className='about-us-section-2'>
                    <h2 className='about-us-title'>About Us</h2>
                    <p className='about-us-desc'>Welcome to SkillGig Learning and Development Center. We are your dedicated partners in unlocking your potential and fostering professional growth.</p>
                    <p className='about-us-desc'> Our mission is to equip you with the best tools, cutting-edge technology, and unparalleled opportunities to excel in your career journey. At SkillGig, we believe in empowering individuals to achieve their fullest potential through innovative learning experiences and industry-relevant training. Whether you are looking to enhance your skills, transition into a new field, or advance your career, we are here to support you every step of the way.</p>
                    <p className='about-us-desc'>Join us and transform your professional future with SkillGig.</p>
                </div>
            </div>
            <img src={Layers} className='layers-us' />
        </section>
    )
}

export default AboutUs;
