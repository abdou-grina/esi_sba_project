import './RemakP.css';
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import design from "../assets/images/image 3.png"
import {icons} from "../assets/images/icons/icons.js";
function RemakP(){
    const Email = icons.Lock;
return(
        <div className="remakp-container">
        <div className="remakp-frame">
            <div className="remakp-design">
                <h1>Logo</h1>
                <img src={design} className="mthimg" alt="design" />
                <div className="lined"/>
            </div>
            <div className="remakp-form">
                <h1 style={{textAlign:"center"}}>استعادة كلمة المرور</h1>
                <Input label="أدخل كلمة المرور الجديدة" iconRight={<icons.Lock/>} ></Input>
                <Input label="تأكيد كلمة المرور" iconRight={<icons.Lock/>} ></Input>
                <Button text="تأكيد"/>
            </div>
        </div>
        </div>
    )
}
export default RemakP;