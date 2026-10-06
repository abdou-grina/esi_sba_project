
import SidProfile from "./SidProfile.jsx";
import {icons} from "../../assets/images/icons/icons.js";
import { BrowserRouter, NavLink ,} from "react-router-dom";
import "./SidBar.css";
import { useState } from "react";

function SidBar({user}){

    return (
        <aside className="sidbar">
            
            <SidProfile  email="a.grina@gmail.com" name="Ahmed Grina" level="3" />
            <NavLink    to="/home" className={({ isActive }) => isActive ? "nav-item-active" : "nav-item"}><icons.House />الصفحة الرئيسية</NavLink>
            <NavLink  to="/courses" className={({ isActive }) => isActive ? "nav-item-active" : "nav-item"}><icons.BookCheck />الدورات</NavLink>
            <NavLink to="/statistics" className={({ isActive }) => isActive ? "nav-item-active" : "nav-item"}><icons.ChartNetwork />إحصائيات</NavLink>
            <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-item-active" : "nav-item"}><icons.Settings />الإعدادات</NavLink>
        </aside>
    );
}
export default SidBar;