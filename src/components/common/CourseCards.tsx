import '../../styles/Cards.css';
import JavaIcon from '../../assets/courses/java.png';
import DotNetIcon from '../../assets/courses/dot-net.png';
import CloudIcon from '../../assets/courses/devops.png';
import FrontendIcon from '../../assets/courses/frontend.png';
import BackendIcon from '../../assets/courses/backend.png';
import UiUxIcon from '../../assets/courses/ui-ux.png';
import BAIcon from '../../assets/courses/business.png';
import DAIcon from '../../assets/courses/data-analysis.png';
import PythonIcon from '../../assets/courses/python.png';
import SoftwareTestingIcon from '../../assets/courses/software-testing.png';
import CyberIcon from '../../assets/courses/cyber-security.png';
import EmbeddedIcon from '../../assets/courses/embedded-systems.png';
import IotIcon from '../../assets/courses/iot.png';
import DsaIcon from '../../assets/courses/dsa.png';
import AptitudeIcon from '../../assets/courses/aptitude.png';
import CampusRecuirtmentIcon from '../../assets/courses/campus-recuritment.png';

const CourseCards = ({ cards }) => {

    const renderIconBasedOnIconType = (type: string) => {
        switch (type) {
            case 'java': return <img src={JavaIcon} width={'180px'} />
            case 'dot-net': return <img src={DotNetIcon} width={'180px'} />
            case 'cloud': return <img src={CloudIcon} width={'180px'} />
            case 'frontend': return <img src={FrontendIcon} width={'180px'} />
            case 'backend': return <img src={BackendIcon} width={'180px'} />
            case 'ui-ux': return <img src={UiUxIcon} width={'180px'} />
            case 'ba': return <img src={BAIcon} width={'180px'} />
            case 'data-analysis': return <img src={DAIcon} width={'180px'} />
            case 'python': return <img src={PythonIcon} width={'180px'} />
            case 'software-testing': return <img src={SoftwareTestingIcon} width={'180px'} />
            case 'cyber': return <img src={CyberIcon} width={'180px'} />
            case 'embedded': return <img src={EmbeddedIcon} width={'180px'} className='small-height'/>
            case 'iot': return <img src={IotIcon} width={'180px'} />
            case 'dsa': return <img src={DsaIcon} width={'180px'} />
            case 'aptitude': return <img src={AptitudeIcon} width={'180px'} />
            case 'campus': return <img src={CampusRecuirtmentIcon} width={'180px'} />
        }
    }
    return (
        <div className="cards-container">
            {cards?.map(card => (
                <div className="course-card-container">
                    <p className='card-title'>{card.title}</p>
                    <p className='card-desc'>{card.description}</p>
                    {card?.iconName &&
                        <div className='mt-4 flex items-center justify-center'>
                            {renderIconBasedOnIconType(card.iconName)}
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default CourseCards;