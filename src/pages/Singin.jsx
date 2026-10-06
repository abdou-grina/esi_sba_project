import { Link } from "react-router-dom";
import "./Singin.css";
import { useRef } from "react";
import google from "../assets/images/google.png";
import design from "../assets/images/image 3.png"
import {icons} from "../assets/images/icons/icons.js";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { BiFontFamily } from "react-icons/bi";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
function Signin() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div className="Signin-container">
        <div className="Signin-frame">
            <div className="Signin-design">
                <h1>Logo</h1>
                <img src={design} className="mthimg" alt="design" />
                <div className="lined"/>
            </div>
            <div className="Signin-form">
                <h1>إنشاء حساب</h1>
                <Input placeholder="أدخل رقم هاتفك/بريدك الإلكتروني هنا" label="رقم الهاتف/البريد الإلكتروني" iconRight={<icons.Mail />}></Input>
                <Input placeholder="أدخل اسمك الكامل هنا" label="الاسم الكامل" iconRight={<icons.User />}></Input>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} label="كلمة المرور" type={showPassword ? "text" : "password"} placeholder="أدخل كلمة المرور الخاصة بك هنا" iconRight={<icons.Lock />} iconLeft={showPassword ? <EyeOff/> : <Eye/>} oniconLeftClick={() => setShowPassword(!showPassword)}/>
                <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} error={confirmPassword !== password ? "كلمتا المرور غير متطابقتين" : ""} label="تأكيد كلمة المرور" type={showConfirmPassword ? "text" : "password"} placeholder="أدخل كلمة المرور مرة أخرى" iconRight={<icons.Lock />} iconLeft={showConfirmPassword ? <EyeOff/> : <Eye/>} oniconLeftClick={() => setShowConfirmPassword(!showConfirmPassword)}/>
                <Button text="إنشاء حساب" helper={<p style={{ margin: 0 }} ><span>لديك بالفعل حساب؟ </span> <Link to="/Login">سجل دخول</Link></p>}/>
                <div className="line"/>
            </div>
        </div>
        </div>
    )
}
export default Signin;