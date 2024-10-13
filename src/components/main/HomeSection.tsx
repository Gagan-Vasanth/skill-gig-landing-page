import TickIcon from '../../assets/tick.svg';
import StudentWithLaptop from '../../assets/student-laptop-new.png';

import '../../styles/HomeSection.css';

const HomeSection = () => {
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
                    <button className='home-button connect-now'>Connect Now</button>
                    <button className='home-button join-now'>Register Now</button>
                </div>
            </div>
            <div className='home-section-2'>
                <img src={StudentWithLaptop} />
            </div>
        </div>
    )
}

export default HomeSection