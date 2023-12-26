import React from "react";
import { ReactComponent as Sun } from "../Assets/Images/Sun.svg";
import { ReactComponent as Moon } from "../Assets/Images/Moon.svg";
import "../Assets/CSS/Dark.css";


const DarkMode = ({theme,setTheme}) => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                
                onChange={()=>{
                    const newTheme = theme === "light" ? "dark" : "light";
                    setTheme(newTheme);
                }}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;