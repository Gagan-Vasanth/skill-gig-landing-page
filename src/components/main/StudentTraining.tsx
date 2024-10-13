import { allServicesDetails } from "../../config/sectionDetails"
import ServicesContainer from "../common/ServicesContainer"

const StudentTraining = () => {
  return (
    <ServicesContainer serviceDetails={allServicesDetails['student-trainings']} />
  )
}

export default StudentTraining;