import { Link } from "react-router-dom";
import "./Login.css";
import google from "../assets/images/google.png";
import design from "../assets/images/image 3.png"
import {icons} from "../assets/images/icons/icons.js";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { BiFontFamily } from "react-icons/bi";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Navigate } from "react-router-dom";
function Login() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return(
        <div className="login-container">
        <div className="login-frame">
            <div className="login-design">
                <h1>Logo</h1>
                <img src={design} className="mthimg" alt="design" />
                <div className="lined"/>
            </div>
            <div className="login-form">
                <h1>تسجيل الدخول</h1>
                <Input placeholder="أدخل رقم هاتفك/بريدك الإلكتروني هنا" label="رقم الهاتف/البريد الإلكتروني" iconRight={<icons.Mail />}></Input>
                <Input label="كلمة المرور" type={showPassword ? "text" : "password"} placeholder="أدخل كلمة المرور الخاصة بك هنا" iconRight={<icons.Lock />} iconLeft={showPassword ? <EyeOff/> : <Eye/>} oniconLeftClick={() => setShowPassword(!showPassword)} helper={<Link to="/forgot-password">نسيت كلمة المرور؟ انقر هنا</Link>}/>
                <Button text="تسجيل الدخول" helper={<p style={{ margin: 0 }} ><span>ليس لديك حساب؟ </span> <Link to="/Signin">سجل الآن</Link></p>}   />
                <div className="line"/>            
            </div>
        </div>
        </div>
    )
}
export default Login;