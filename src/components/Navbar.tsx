
// import SkillGigLogo from '../assets/skill_gig_logo.jpg';
// import NavDropDownItem from './common/NavDropDownItem';

const Navbar = () => {

  return (
    <section>
        <nav className="navbar">
            <div className="w-full flex flex-row items-center justify-between p-4">
                {/* <img src={SkillGigLogo} width={'125px'} height={'120px'} style={{ maxHeight: '120px'}}/> */}
                <div>Logo</div>
                <div className="flex flex-row items-center justify-evenly">
                        <span className='nav-link'>Home</span>
                        {/* <NavDropDownItem name={"IT Services"} list={[{name: 'val', path: '/'}, {name: 'val', path: '/'}, {name: 'val', path: '/'}]}/> */}
                        <span className='nav-link'>Student Trainings</span>
                        <span className='nav-link'>Corportate Trainings</span>
                        <span className='nav-link'>Internships</span>
                        <span className='nav-link'>Contact Us</span>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar