
import SkillGigLogo from '../assets/skillgig-logo.svg';
import Hamburger from './common/Hamburger';
import '../styles/Navbar.css';
import { navTabsList } from '../config/navTabs.js';

const Navbar = ({ sideNavOpen, setSideNavOpen }) => {
  return (
    <section>
      <nav className="navbar">
        <div className="w-full flex flex-row items-center justify-between p-4">
          <img src={SkillGigLogo} width={'125px'} height={'120px'} style={{ maxHeight: '120px' }} />
          <div className="flex flex-row items-center justify-evenly" id="max-screen-nav-items">
            {navTabsList.map((navItem) => (
              <span className='nav-link' onClick={() => {
                const scrollElement = document.getElementById(navItem.id);
                scrollElement?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}>{navItem.title}</span>
            ))}
          </div>

          <div id="min-screen-nav-items">
            <Hamburger setSideNavOpen={setSideNavOpen} sideNavOpen={sideNavOpen} />
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar