import ProgressCard from "../components/ui/ProgressCard.jsx";
import CourseCard from "../components/ui/CourseCard.jsx";
import courses from "../components/ui/courses.js";
import LeaderBoard from "../components/ui/LeaderBoard.jsx";
import topUsers from "../components/TopUsers.js";
import Streak from "../components/ui/Streak.jsx";
import './Home.css';

function Home(){
    return(
        <div className="home">
            <div className = "rightside">
                <CourseCard course = {courses[0]} variant="compact"></CourseCard>  
                <ProgressCard course = {courses}></ProgressCard>
            </div>
            <div className = "leftside">
                <Streak></Streak>
                <LeaderBoard topUsers={topUsers}></LeaderBoard>
            </div>
        </div>
    );
}
export default Home; 