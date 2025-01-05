import { useEffect, useState } from "react";
import "../css/Toggle.css";

const Toggle = () => {
    // const [isToggled, setIsToggled] = useState(false);

    // useEffect(() => {
    //     if (isToggled) {
    //         document.body.classList.add("light");
    //     } else {
    //         document.body.classList.remove("light");
    //     }
    // }, [isToggled]);

    const [isToggled, setIsToggled] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "light";
    })

    const toggleTheme = () => {
        setIsToggled(prevState => {
            const newTheme = !prevState ? "light" : "dark";
            localStorage.setItem("theme", newTheme);
            return !prevState;
        })
    }

    useEffect(() => {
        if (isToggled) {
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
        }
    }, [isToggled]);
    
    return (
        <label className="toggler-wrapper style-1">
            {/* <input type="checkbox" onChange={() => setIsToggled(!isToggled)}/> */}
            <input type="checkbox" onChange={toggleTheme} checked={isToggled}/>
            <div className="toggler-slider">
                <div className="toggler-knob"></div>
            </div>
        </label>
    );
};

export default Toggle;