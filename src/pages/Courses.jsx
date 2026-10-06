import CourseCard from "../components/ui/CourseCard.jsx";
import courses from "../components/ui/courses.js";
import "./Courses.css";

function Courses() {
    return (
        <div className="courses-page">
            <h1 className="courses-title">الدورات</h1>

            <div className="courses-grid">
                {courses.map((course) => (
                    <CourseCard
                        course={course}
                        variant="full"
                        key={course.id || course.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Courses;