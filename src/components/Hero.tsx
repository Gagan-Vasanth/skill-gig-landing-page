import { useEffect, useState } from "react";
import { navTabsList } from "../config/navTabs"
import AboutUs from "./main/AboutUs";
import ContactUs from "./main/ContactUs";
import CorporateTrainings from "./main/CorporateTrainings";
import CoursesOffered from "./main/CoursesOffered";
import HomeSection from "./main/HomeSection"
import Internships from "./main/Internships";
import ItServices from "./main/ItServices";
import Lms from "./main/Lms";
import OurProducts from "./main/OurProducts";
import OurServices from "./main/OurServices";
import StudentTraining from "./main/StudentTraining";
import WhatAreWeSolving from "./main/WhatAreWeSolving";

const Hero = () => {
  const [updatedNavTabsList, setUpdatedNavTabsList] = useState(() => navTabsList);

  useEffect(() => {
    const newNavTabsForSection = [...updatedNavTabsList, {
      id: 'what-are-we-solving',
      title: 'What are we Solving',
      bgColor: '',
      order: 3,
    }, {
      id: 'our-services',
      title: 'Our Sevices',
      bgColor: '',
      order: 4,
    }, {
      id: 'our-products',
      title: 'Our Products',
      bgColor: '',
      order: 11,
    }];
    newNavTabsForSection.sort((a, b) => a.order - b.order);
    setUpdatedNavTabsList(newNavTabsForSection);
  }, []);

  const fetchComponentBasedOnSectionId = (id: string) => {
    switch (id) {
      case 'home': return <HomeSection />;
      case 'about-us': return <AboutUs />;
      case 'what-are-we-solving': return <WhatAreWeSolving />;
      case 'our-services': return <OurServices />;
      case 'it-services': return <ItServices />;
      case 'student-trainings': return <StudentTraining />;
      case 'corporate-trainings': return <CorporateTrainings />;
      case 'lms': return <Lms />;
      case 'internships': return <Internships />;
      case 'courses-offered': return <CoursesOffered />;
      case 'our-products': return <OurProducts />;
      case 'contact-us': return <ContactUs />
    }
  }

  return (
    <>
      {updatedNavTabsList.map(section => (
        <section className="nav-section" id={section.id}>{fetchComponentBasedOnSectionId(section.id)}</section>
      ))}
    </>
  )
}

export default Hero