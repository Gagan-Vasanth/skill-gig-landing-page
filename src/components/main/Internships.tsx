import { allServicesDetails } from '../../config/sectionDetails'
import ServicesContainer from '../common/ServicesContainer'

const Internships = () => {
  return (
    <ServicesContainer serviceDetails={allServicesDetails['internships']} />
  )
}

export default Internships