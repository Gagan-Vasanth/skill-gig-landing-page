import { allServicesDetails } from "../../config/sectionDetails"
import ServicesContainer from "../common/ServicesContainer"

const ItServices = () => {
  return (
    <ServicesContainer serviceDetails={allServicesDetails['it-services']} />
  )
}

export default ItServices