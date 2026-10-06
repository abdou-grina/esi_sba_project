import {icons} from "../../assets/images/icons/icons.js";
import "./CourseCard.css";

function CourseCard({ course, user, variant = "compact" }) {
    const Icon = icons[course.icon];
    return (
        <div className={`course-card course-card--${variant}`}>
            <div className="title">
                <div className="right">
                    {Icon && <Icon size={60} strokeWidth={1.5} style={{marginTop: '10px'}}/>}
                    <h2>{course.title}</h2>
                </div>
                <img src={course.img} alt='img' style={{marginLeft: '50px'}}/>
            </div>

            <div className="details">
                <div className="info">
                    <icons.ClockFading size={40} strokeWidth={1.5} color="#475569"/>
                    <span>المدة <br/>{course.time} أسابيع<br/></span>
                    <div className="line" style={{width: '2px', height: '50px', backgroundColor: '#475569'}}/>
                    <icons.BookCheck size={40} strokeWidth={1.5} color="#475569"/>
                    <span>{course.exercises} تمرينًا <br/>مختلفًا</span>
                </div>
                <span className="label">التقدم %{course.progress}</span>
                <div className="progress-bar">
                    <div className="progress" style={{width: `${course.progress}%`}}/>
                </div>
                <button className="start">ابدأ الآن</button>
            </div>

            <div className="chapters">
                {course.chapterList.map((chapter) => (
                    <div className="chapter" key={chapter.id || chapter.title}>
                        <h2>{chapter.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseCard;