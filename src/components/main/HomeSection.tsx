import TickIcon from '../../assets/tick.svg';
import StudentWithLaptop from '../../assets/student-laptop-new.png';

import '../../styles/HomeSection.css';
import { useState } from 'react';
import Modal from '../common/Modal';
import RegisterModal from '../common/RegisterModal';

const HomeSection = () => {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    return (
        <div className='home-section-container'>
            <div className='home-section-1'>
                <h1 className='home-title'>Empower Your Journey to Success</h1>
                <p className='home-description'>Take control of your future with our diverse range of courses, meticulously crafted to empower you with practical skills and strategic insights for unparalleled success.</p>
                <div className='mt-4'>
                    <div className='flex flex-row items-center justify-start'>
                        <img src={TickIcon} width={'24px'} height={'24px'} className='basic-images' />
                        <p className='ml-2 normal-text'>Unlock Your Potential with Online Learning</p>
                    </div>
                    <div className='flex flex-row items-center justify-start mt-4'>
                        <img src={TickIcon} width={'24px'} height={'24px'} className='basic-images' />
                        <p className='ml-2 normal-text'>Learn Anytime, Anywhere</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between mt-4 button-group'>
                    <div className='home-button connect-now' onClick={() => {
                        const scrollElement = document.getElementById('contact-us');
                        scrollElement?.scrollIntoView({
                            behavior: 'smooth',
                        })
                    }}>Connect Now</div>
                    <div className='home-button join-now' onClick={() => {console.log('button is clicked');setShowRegisterModal(true)}}>Register Now</div>
                </div>
            </div>
            <div className='home-section-2'>
                <img src={StudentWithLaptop} />
            </div>
            {showRegisterModal && <RegisterModal setShowRegisterModal={setShowRegisterModal} setEmailSent={setEmailSent}/>}
            {emailSent && <Modal onClose={() => setEmailSent(false)}>We have successfully received your email</Modal>}
        </div>
    )
}

export default HomeSection