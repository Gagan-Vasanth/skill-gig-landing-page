import ServicesContainer from '../common/ServicesContainer'
import { allServicesDetails } from '../../config/sectionDetails'

const Lms = () => {
  return (
    <ServicesContainer serviceDetails={allServicesDetails['lms']} />
  )
}

export default Lms