import { color } from 'framer-motion';
import {icons} from '../../assets/images/icons/icons.js';
import './Info.css'
import { useState } from 'react';
function Info(props){
    const [isEditing, setIsEditing] = useState(false);
    const LeftIcon = props.lefticon || icons.SquarePen;
    const RightIcon = props.righticon;
    return(
        <div className = 'info-container'>
            <span className='label'>{props.label}</span>
            <div className='input'>
                <div className='part1'>
                    {props.righticon && <RightIcon color="#475569" size = "30px"/>}

                    <div className='divider'></div>

                    <input placeholder={props.placeholder} type={props.type} value={props.value} readOnly={!isEditing} onChange={props.onChange}/>

                </div>
                
                <LeftIcon onClick={() => setIsEditing(!isEditing)} style={{ cursor: "pointer" }} color = "#475569" size="20px"/>
            </div>
        </div>
    );
}

export default Info;