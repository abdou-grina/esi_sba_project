import './FP_Email.css';
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import design from "../assets/images/image 3.png"
import {icons} from "../assets/images/icons/icons.js";
function FP_Email(){
    const Email = icons.Email;
return(
        <div className="fp-email-container">
        <div className="fp-email-frame">
            <div className="fp-email-design">
                <h1>Logo</h1>
                <img src={design} className="mthimg" alt="design" />
                <div className="lined"/>
            </div>
            <div className="fp-email-form">
                <h1 style={{textAlign:"center"}}>استعادة كلمة المرور</h1>
                <Input label="رقم الهاتف/البريد الإلكتروني" iconRight={<icons.Mail/>} helper="سنرسل إليك رمزًا للتحقق إلى رقم هاتفك/بريدك الإلكتروني"></Input>
                <Button text=" إرسال"/>
            </div>
        </div>
        </div>
    )
}
export default FP_Email;