import { ourProductDetails } from '../../config/sectionDetails';
import '../../styles/OurProducts.css';
import LmsIcon from '../../assets/products/lms-product.png';
import HrmsIcon from '../../assets/products/hrms.png';
import ErpIcon from '../../assets/products/erp.png';
import GetWheelsIcon from '../../assets/products/getwheels.png';
import SoParkIcon from '../../assets/products/so-park.png';

const OurProducts = () => {

  const getIconBasedOnIconName = (iconName: string) => {
    switch(iconName) {
      case 'lms': return <img src={LmsIcon} alt='lms' />
      case 'hrms': return <img src={HrmsIcon} alt='lms' />
      case 'erp': return <img src={ErpIcon} alt='lms' />
      case 'getwheels': return <img src={GetWheelsIcon} alt='lms' />
      case 'sopark': return <img src={SoParkIcon} alt='lms' />
    }
  }

  return (
    <section className='our-products-main-container'>
      <div className='our-products-container'>
        <h2 className='our-products-title'>{ourProductDetails.title}</h2>
        <div className='our-products-cards-container'>
          {ourProductDetails.cards.map(card => (
            <div key={card.title} className='our-products-card-container'>
              {getIconBasedOnIconName(card.iconName)}
              <h3 className='product-title'>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProducts