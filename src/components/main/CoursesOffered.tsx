import { allServicesDetails } from '../../config/sectionDetails'
import ServicesContainer from '../common/ServicesContainer'

const CoursesOffered = () => {
  return (
    <ServicesContainer serviceDetails={allServicesDetails['courses-offered']} />
  )
}

export default CoursesOffered