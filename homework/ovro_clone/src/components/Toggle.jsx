import { useEffect, useState } from "react";
import "../css/Toggle.css";

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        if (isToggled) {
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
        }
    }, [isToggled]);
    
    return (
        <label className="toggler-wrapper style-1">
            <input type="checkbox" onChange={() => setIsToggled(!isToggled)}/>
            <div className="toggler-slider">
                <div className="toggler-knob"></div>
            </div>
        </label>
    );
};

export default Toggle;