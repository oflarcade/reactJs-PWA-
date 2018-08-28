import React from 'react';
import './SideIcon.css';


const SideIcon = (props) => {
    return (
        <div className='icon-container' style={{backgroundColor: props.iconColor}}>
            <div><img src={props.iconSource} className='side-icon' alt='category-icon' /></div>
            <div className='icon-title'>{props.title}</div>
        </div>
    )
}


export default SideIcon