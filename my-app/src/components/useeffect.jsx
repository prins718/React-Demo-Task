import { useState, useEffect } from "react";


function Timer() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {setSeconds(prev => prev + 1);}, 1000);
       
        return () => clearInterval(interval);
    }, []); 
    return <div>Timer: {seconds} seconds</div>;
}


function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        document.body.style.background = darkMode ? "#333" : "#fff";
        document.body.style.color = darkMode ? "#fff" : "#000";
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(prev => !prev)}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
    );
}


function All() {
    return (
        <div style={{ padding: "20px" }}>
            <DarkModeToggle />
            <Timer />
        </div>
    );
}

export default All;
