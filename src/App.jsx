import Router from "./pages/Router.jsx";
import Login from "./pages/Login.jsx";
import Singin from "./pages/Singin.jsx";
import Header from "./components/ui/Header.jsx";
import SidBar from "./components/ui/SidBar.jsx";
import Layout from "./pages/Layout.jsx";
import { BrowserRouter, Routes } from "react-router-dom";
import CourseCard from "./components/ui/CourseCard.jsx";
import courses from "./components/ui/courses.js";
import ProgressCard from "./components/ui/ProgressCard.jsx";
import LeaderBoard from "./components/ui/LeaderBoard.jsx";
import topUsers from "./components/TopUsers.js";
import Streak from "./components/ui/Streak.jsx";
import Info from "./components/ui/Info.jsx";    
import {icons} from "./assets/images/icons/icons.js";
import Settings from "./pages/Settings.jsx";
import FP_Email from "./pages/FP_Email.jsx";
import FP_Cod from "./pages/FP_Cod.jsx";
import RemakP from "./pages/RemakP.jsx";
function App() {
    return (
        <div>
            <CourseCard course={courses[0]} />
        </div>
    );
}

export default App;