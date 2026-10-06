import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Profile from "./Profile.jsx";
import "./Header.css";
import {icons} from "../../assets/images/icons/icons.js";
import streak from "/src/assets/images/icons/streak-flame.svg";    
import moon from "/src/assets/images/icons/moon.svg";    
import bell from "/src/assets/images/icons/bell.svg";    

function Header({user}) {
    
    return (
        <header className="header">
            <div className="right">
                <h1>الشعار</h1>
                <Input type="text" placeholder="ابحث هنا" iconRight={<icons.Search />}></Input>
            </div>
            
            <div className="left">
                <div className="streak">
                <span>9</span>
                <img src={streak} alt="Streak" />
                </div>
                <div className="night-mode">
                    <img src={moon} alt="night mode" />
                </div>
                <div className="notifications">
                    <img src={bell} alt="notifications" />
                </div>
                <div 
                    className="line"
                    style={{
                        width: "3px",
                        height: "60px",
                        backgroundColor: "#E2E8F0",
                        
                    }}
                />
                <button className="logout">تسجيل الخروج</button>
                <div 
                    className="line"
                    style={{
                        width: "3px",
                        height: "60px",
                        backgroundColor: "#E2E8F0",
                        
                    }}
                />
                <Profile name={user?.name || "عبد الرحمن"} />
            </div>
                
        </header>
    );

}
export default Header;