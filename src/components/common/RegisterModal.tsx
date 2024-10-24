import Modal from './Modal'
import '../../styles/RegisterModal.css';
import CloseButton from '../../assets/cancel.svg';
import MultiDropDown from './MultiDropDown';
import { coursesOffered } from '../../config/dropDowns';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const RegisterModal = ({ setShowRegisterModal, setEmailSent }) => {
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        university: '',
        passedOutYear: '',
        stream: '',
        qualification: '',
        query: '',
    });
    const [enableRegisterNowButton, setEnableRegisterNowButton] = useState(false);
    const [emailError, setEmailError] = useState('');

    const updateCoursesSelected = (course) => {
        console.log(course, selectedCourses);
        const courseAlreadyPresent = selectedCourses.filter((c) => c.id === course.id) ?? []; 
        if(!courseAlreadyPresent.length) {
            return setSelectedCourses([...selectedCourses, course]);
        }
        return true;
    }

    const unSelectCourse = (course) => {
        return setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id));
    }

    useEffect(() => {
        if(formData.name.length >= 3 && 
            formData.email.includes('@gmail.com') && 
            formData.phone.length === 10 && 
            formData.university.length >= 3 &&
            formData.passedOutYear.length === 4 &&
            formData.stream.length >= 3 &&
            formData.qualification.length >= 3 &&
            selectedCourses.length > 0
        ) {
            setEnableRegisterNowButton(true);
        } else {
            setEnableRegisterNowButton(false);
        }
    }, [formData, selectedCourses]);


    const sendEmail = () => {
        const finalCourses = selectedCourses.map((c) => c.value).toString();

        return emailjs
        .send(
            'service_a87pxnd', // Replace with your EmailJS Service ID
            'skillgig_registration', // Replace with your EmailJS Template ID
            {
                ...formData,
                courses: finalCourses
            },
            'sQTOrLL5HzOk29ROR'
        )
        .then(
            (response) => {
                setShowRegisterModal(false);
                setEmailSent(true);
            },
            (err) => {
                setEmailSent(false);
                setEmailError('Something went wrong in sending the email, Please retry again!')
            }
        );
    }

    return (
        <Modal onClose={() => setShowRegisterModal(false)}>
            <div className='register-modal-left'>
                {emailError && <div className='email-error'>
                    {emailError}
                    </div>}
                <div className='user-name mandatory'>
                    <label>Name</label>
                    <input type="text" placeholder='Enter your name' onChange={(e) => setFormData({ ...formData, name: e.target.value})} value={formData.name}/>
                </div>
                <div className='user-email mandatory'>
                    <label>Email</label>
                    <input type="text" placeholder='Enter your email' onChange={(e) => setFormData({ ...formData, email: e.target.value})} value={formData.email}/>
                </div>
                <div className='user-phone mandatory'>
                    <label>Phone Number</label>
                    <input type="text" placeholder='Enter your phone number' onChange={(e) => setFormData({ ...formData, phone: e.target.value })} value={formData.phone}/>
                </div>
                <div className='university mandatory'>
                    <label>University</label>
                    <input type="text" placeholder='JNTUA' onChange={(e) => setFormData({ ...formData, university: e.target.value })} value={formData.university}/>
                </div>
                <div className='pass-out mandatory'>
                    <label>Year of Pass out</label>
                    <input type="text" placeholder='2024' onChange={(e) => setFormData({ ...formData, passedOutYear: e.target.value })} value={formData.passedOutYear}/>
                </div>
                <div className='stream mandatory'>
                    <label>Stream</label>
                    <input type="text" placeholder='Computer Science' onChange={(e) => setFormData({ ...formData, stream: e.target.value })} value={formData.stream}/>
                </div>
                <div className='qualification mandatory'>
                    <label>Qualification</label>
                    <input type="text" placeholder='B.Tech/B.Com/B.SC' onChange={(e) => setFormData({ ...formData, qualification: e.target.value})} value={formData.qualification}/>
                </div>
                {/* <div className='courses-interested mandatory'>
                    <label>Courses Interested in</label>
                    <input type="text" placeholder='Full Stack/Frontend/Backend'/>
                </div> */}
                <MultiDropDown 
                    options={coursesOffered} 
                    selectCourse={updateCoursesSelected} 
                    placeholder={'Select courses you are interested in'} 
                    label={'Course Interested in'} 
                    unSelectCourse={unSelectCourse}
                    selectedCourses={selectedCourses} 
                />
                <div className='query'>
                    <label>Query</label>
                    <input type="text" placeholder='Write your query here' onChange={(e) => setFormData({ ...formData, query: e.target.value})} value={formData.query}/>
                </div>
                <div className={enableRegisterNowButton ? `register-now-enabled` : 'register-now'} onClick={() => sendEmail()}>
                    Register Now
                </div>
                <img src={CloseButton} width={'24px'} height={'24px'} className='close-button' onClick={() => setShowRegisterModal(false)} />
            </div>
            {/* <div className='register-modal-right'></div> */}
        </Modal>
    )
}

export default RegisterModal