import '../../styles/ContactUs.css';
import SkillGigLogo from '../../assets/skillgig-logo.svg';
import LocationIcon from '../../assets/contact/location.png';
import MailIcon from '../../assets/contact/mail.png';
import MobileIcon from '../../assets/contact/mobile.png';

const ContactUs = () => {
  return (
    <section className='contact-us-main-container'>
      <img src={SkillGigLogo} width={'264px'} height={'86px'}/>
      <div className='contact-us-container'>
        <div className='contact-us-left'>
            <h2 className='branding'>Bridiging Gaps & Building Brilliance</h2>
            <p className='brand-content'>SkillGig is your partner in achieving your professional goals. 
              We offer cutting-edge training and support to help you master new skills, 
              explore new industries or advance in your current role.
            </p>
            <div className='download-broucher'>Download Broucher</div>
        </div>
        <div className='contact-us-right'>
          <h2 className='reach-heading'>Reach us out at:</h2>
          <div className='address-section'>
                <p className='address-name address-one'>
                  <img src={LocationIcon} width={'24px'} height={'24px'} />
                  #306, 3rd Floor, Eden ECCO Greens, Uppadhyaya Nagar, Karakambadi Road, Tirupati, Andhra Pradesh - 517507</p>
                <p className='address-name address-two'>
                <img src={LocationIcon} width={'24px'} height={'24px'} />#301, GBPS Towers, Yelahanka, Bangalore, Karnataka - 560064</p>
                <p className='address-name address-three'>
                <img src={MobileIcon} width={'24px'} height={'24px'} />+91 7997991342, 9036669117</p>
                <p className='address-name address-four'><img src={MailIcon} width={'24px'} height={'24px'} />
                info@skillgig.tech</p>
          </div>
        </div>
      </div>
      <div className='separator'></div>
      <div className='copyrights'>
        © 2024 SkillGig Technologies Designed by <a href='https://shubhangisharma.com/' target='_blank'>Shubhangi</a> & Developed by <a href='https://www.linkedin.com/in/gagan-vasanth/' target='_blank'>Gagan</a>. All Rights Reserved.
      </div>
    </section>
  )
}

export default ContactUs