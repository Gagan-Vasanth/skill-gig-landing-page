import Cards from "./Cards";
import '../../styles/ServicesContainer.css';
import CourseCards from "./CourseCards";

const ServicesContainer = ({ serviceDetails }) => {
    return (
        <section className="service-section-main-container">
            <div className="service-section-container" style={serviceDetails.courseCards ? { border: '1px solid #E3E4E5', background: serviceDetails.bgColor } : { background: serviceDetails.bgColor }}>
                <div className="service-section-title" style={serviceDetails.courseCards ? { color: serviceDetails.titleColor, textAlign: 'center', width: '100%', marginLeft: '0px' } : { color: serviceDetails.titleColor }}>{serviceDetails.title}</div>
                {serviceDetails.courseCards ? <CourseCards cards={serviceDetails.cards} /> : <Cards cards={serviceDetails.cards} />}
            </div>
        </section>
    )
}

export default ServicesContainer