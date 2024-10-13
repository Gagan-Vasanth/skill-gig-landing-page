import { navTabsList } from '../../config/navTabs';
import '../../styles/SideNav.css';

const SideNav = ({ sideNavOpen, setSideNavOpen }) => {
    return (
        <div className={`${sideNavOpen ? 'sidenav-container open' : 'sidenav-container'}`}>
            {navTabsList.map((navItem) => (
                <span className='nav-link' onClick={() => {
                    const scrollElement = document.getElementById(navItem.id);
                    scrollElement?.scrollIntoView({
                        behavior: 'smooth',
                    });
                    setSideNavOpen(false);
                }}>{navItem.title}</span>
            ))}
        </div>
    )
}

export default SideNav