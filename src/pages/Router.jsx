import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login.jsx";
import Signin from "./Singin.jsx";
import Courses from "./Courses.jsx";
import Settings from "./Settings.jsx"
import FP_Email from "./FP_Email.jsx";
function Router() {
    return (
        <Routes>

            <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="settings" element={<Settings />} />
                <Route path="courses" element={<Courses />} />
                <Route path="statistics" element={<Home />} />
            </Route>

            
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/forgot-password" element={<FP_Email/>} />

        </Routes>
    );
}

export default Router;