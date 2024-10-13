import { OurServicesDetails } from '../../config/sectionDetails';
import '../../styles/OurServices.css';
import Cards from '../common/Cards';

const OurServices = () => {
    return (
        <section className='our-services-main-container'>
            <div className='our-services-container'>
                <h2 className='our-services-title'>{OurServicesDetails.title}</h2>
                <p className='our-services-desc'>{OurServicesDetails.description}</p>
                <Cards cards={OurServicesDetails.cards} />
            </div>
        </section>
    )
}

export default OurServices