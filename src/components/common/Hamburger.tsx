import '../../styles/Hamburger.css';

const Hamburger = ({ sideNavOpen, setSideNavOpen }) => {
    return (
        <label>
            <div className={sideNavOpen ? 'bar bar-close' : 'bar'} onClick={() => setSideNavOpen(!sideNavOpen)}>
                <div className='top'></div>
                <div className='middle'></div>
                <div className='bottom'></div>
            </div>
        </label>
    )
}

export default Hamburger