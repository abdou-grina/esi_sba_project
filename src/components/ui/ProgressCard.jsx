import { icons } from "../../assets/images/icons/icons";
import "./ProgressCard.css";

function Progress({ user , course}) {
    const ArrowUp = icons.TrendingUp;
    const ChevronLast = icons.ChevronLast;
    const ClockFading = icons.ClockFading;
    const BookCheck = icons.BookCheck;
    return (
        <div className="progress-container">

            <div className="head">

                <div className="right"> 
                    <ArrowUp size={40} strokeWidth={1.5} color="black"/>
                    <div className="line" style={{width: '2px', height: '40px', backgroundColor: '#CBD5E1'}} />
                    <span>تقدم المنهج</span>
                </div>
                <div className="left">
                    <span>عرض الكل</span>
                    <ChevronLast style={{ transform: "rotate(180deg)" }} size={20} strokeWidth={1.5} color="#475569"/>  
                </div>

            </div>
            {course.map((c) =>(

            <div className="progress-line">

                <div className="infos">
                    
                    <span className='coursetitle'>{c.title}</span>
                    
                    <div className="miniInfos">
                        <span className="SpendTime"><ClockFading size={20} strokeWidth={1.5} color="#475569"/>{c.spendTime} ساعات</span>
                        <span className="FinishedChapters"><BookCheck size={20} strokeWidth={1.5} color="#475569"/> {c.finishedChapters} دروس</span>
                        <span className="TotalPercentages">{parseInt((c.finishedChapters / c.chapters)*100)}%</span>
                    </div>
                </div>
                <div className="empty">
                    <div className="progress" style={{width: `${c.progress}%`}}/>
                </div>
            
            </div>
            ))}
            
        </div>
    );
}
export default Progress;