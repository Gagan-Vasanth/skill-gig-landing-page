import { MouseEvent, useRef, useState } from "react";
import '../../styles/NavDropDown.css'

interface listProps {
    name: String;
    path: String;
}

interface NavProps {
    name: String;
    list: Array<listProps>;
}

const NavDropDownItem = ({ name, list }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const handleOutSideClick = (event: MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('modalRef', modalRef.current, 'event',  event.target, 'the main log');
    if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false); // Call the function to close the modal
    } else {
        setIsOpen(true);
    }
  }

  return (
    <div style={{ position: 'relative'}} >
        <span className={isOpen ? 'nav-drop-down-link link-hover': 'nav-drop-down-link'} onClick={(e) => handleOutSideClick(e)} ref={modalRef}>{name}<span className={isOpen ? 'caret caret-up': 'caret'}></span></span>
        {isOpen &&  <ul className="dropdown-container" onClick={() => setIsOpen(true)} >
            {list?.length && list.map((li: listProps, i) => (
                <li key={i} className="dropdown-row">{li.name}</li>
            ))}
        </ul>}
    </div>
  )
}

export default NavDropDownItem