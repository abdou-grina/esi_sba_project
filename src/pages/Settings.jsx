import './Settings.css';
import {icons} from './../assets/images/icons/icons.js';
import img from '../assets/images/luffy.jpg';
import Info from '../components/ui/Info.jsx';
import user from '../components/ui/users.js';  
import { useState } from 'react';
function Settings(){
    const [firstName, setFirstName] = useState(user[0].firstName);
    const [lastName, setLastName]   = useState(user[0].lastName);
    const [dob, setDob]             = useState(user[0].dateOfBirth);
    const [level, setLevel]         = useState(user[0].level);
    const [email, setEmail]         = useState(user[0].email);
    const [phone, setPhone]         = useState(user[0].phoneNumber);
    const [password, setPassword]   = useState(user[0].password);
    const [newPassword, setNewPassword] = useState("");
    const Edit = icons.SquarePen;
    return(
        <div className='Settings'>
            <div className='personnel-info'>
                <h1>المعلومات الشخصية</h1>
                <div className='img-container'>
                    <img src={img} alt="profile" className="profile-img" />
                    <Edit color="#475569" size={20} className="edit-icon" />
                </div>
                <Info righticon = {icons.User} value= {firstName} onChange={(e) => setFirstName(e.target.value)} />
                <Info righticon = {icons.User} value= {lastName} onChange={(e) => setLastName(e.target.value)} />
                <Info righticon = {icons.Calendar} value= {dob} onChange={(e) => setDob(e.target.value)} />
                <Info righticon = {icons.BookCheck} value= {level} onChange={(e) => setLevel(e.target.value)} />
                <button>حفظ التغييرات</button>
            </div>
            <div className='settings-line'/>
            <div className='account-info'>
                <h1>معلومات الحساب</h1>
                <Info righticon = {icons.Mail} value= {email} onChange={(e) => setEmail(e.target.value)} />
                <Info righticon = {icons.Phone} value= {phone} onChange={(e) => setPhone(e.target.value)}/>
                <Info righticon = {icons.Lock} value= {password} onChange={(e) => setPassword(e.target.value)} />
                <Info righticon = {icons.Lock} placeholder='كلمة المرور الجديدة' type='password' readonly={false}/>
                
                <button>حفظ التغييرات</button>
            </div>
        </div>
    );
}
export default Settings;