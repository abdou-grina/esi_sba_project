import Flame from "/src/assets/images/icons/flame.svg";
import "./Streak.css";
import { icons } from "../../assets/images/icons/icons.js";
function Streak (){
    const CheckIcon = icons.BadgeCheck;
    return (
        <div className="streak-container">
            <div className = "streak-counters">
                
                <div className="days-counter">
                   <img src={Flame} alt="flame" style={{ width: "100px", height: "100px" }}/>
                   <div className="text">
                   <span style={{fontSize:"20px" }}>الاستمرارية</span>
                    <span style={{fontSize:"30px", fontWeight:"600" }} >10 أيام</span>
                   </div>
                </div>

                <div className="min-counter">
                    <svg width="120px" height="120px" viewBox="0 0 120 120">
                        <circle
                            stroke="#E2E8F0"
                            fill="transparent"
                            strokeWidth="12.5"
                            r="53.75px"
                            cx={60}
                            cy={60}
                        />
                        <text
                            x={60}
                            y={60}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="30"
                            fontWeight="600"
                            fontFamily="cairo"
                            fill="#111"
                        >
                            اليوم
                        </text>
                        <circle
                            stroke="#056EEB"
                            fill="transparent"
                            strokeWidth="12.5"
                            strokeDasharray="314 314"
                            style={{ strokeDashoffset: 55, transition: "stroke-dashoffset 0.5s ease" }}
                            r= "53.75px"
                            cx={60}
                            cy={60}
                        />                   
                    </svg>
                </div>
            </div>
            <div className ="streak-line"/>
            <div className = "streak-days">
                <div className="day">
                    <CheckIcon className="checked"/>
                    <span>السبت</span>
                </div>
                <div className="day">
                    <CheckIcon className="checked"/>
                    <span>الأحد</span>
                </div>
                <div className="day">
                    <CheckIcon className="checked"/>
                    <span>الاثنين</span>
                </div>
                <div className="day">
                    <CheckIcon className="unchecked"/>
                    <span>الثلاثاء</span>
                </div>
                <div className="day">
                    <CheckIcon className="unchecked"/>
                    <span>الأربعاء</span>
                </div>
                <div className="day">
                    <CheckIcon className="unchecked"/>
                    <span>الخميس</span>
                </div>
                <div className="day">
                    <CheckIcon className="unchecked" />
                    <span>الجمعة</span>
                </div>
            </div>
        </div>
    );  
}

export default Streak;