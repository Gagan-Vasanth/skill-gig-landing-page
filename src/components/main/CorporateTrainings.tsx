import { allServicesDetails } from "../../config/sectionDetails"
import ServicesContainer from "../common/ServicesContainer"

const CorporateTrainings = () => {
  return (
    <ServicesContainer serviceDetails={allServicesDetails['corporate-trainings']} />
  )
}

export default CorporateTrainings