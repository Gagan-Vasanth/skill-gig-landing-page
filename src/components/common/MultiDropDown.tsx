import '../../styles/DropDown.css';
import CrossButton from '../../assets/cancel.svg';
import DownArrow from '../../assets/downArrow.png';
import { useState } from 'react';

const MultiDropDown = ({ selectedCourses, unSelectCourse, selectCourse, options, label, placeholder }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <div className='courses-interested w-full'>
        
        <div className='mandatory'>
            <label>{label}</label>
            {selectedCourses?.length ? <div className='selected-courses'>
              {selectedCourses.map((s, i) => {
                return <div key={i} className='selected-item'>
                  <span>{s.value}</span>
                  <img src={CrossButton} width={'18px'} height={'18px'} className='cursor-pointer' onClick={() => unSelectCourse(s)}/>
                </div>
              })}
            </div> : <> </>}
            <div className='input-type' onClick={() => setOpenDropDown(!openDropDown)}>{placeholder}
            <img className={`${openDropDown ? 'down-button-opened' : 'down-button'}`} src={DownArrow} width={'12px'} height={'12px'}/>
            </div>
            {openDropDown && <div className='drop-down-list'>
              {options.map((o, i) => {
                return (
                  <div key={i} className='drop-down-item' onClick={() =>  { selectCourse(o); setOpenDropDown(false) }}>{o.value}</div>
                )
              })}
            </div>}
        </div>
    </div>
  )
}

export default MultiDropDown