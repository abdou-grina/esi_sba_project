import './FP_Cod.css';
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import design from "../assets/images/image 3.png"
import {icons} from "../assets/images/icons/icons.js";
function FP_Cod(){
    const Email = icons.Email;
return(
        <div className="fp-cod-container">
        <div className="fp-cod-frame">
            <div className="fp-cod-design">
                <h1>Logo</h1>
                <img src={design} className="mthimg" alt="design" />
                <div className="lined"/>
            </div>
            <div className="fp-cod-form">
                <h1 style={{textAlign:"center"}}>استعادة كلمة المرور</h1>
                <Input label="يرجى إدخال رمز التحقق" iconRight={<icons.Mail/>} ></Input>
                <Button text="تحقق"/>
            </div>
        </div>
        </div>
    )
}
export default FP_Cod;