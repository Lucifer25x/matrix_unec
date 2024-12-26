import {RiStarFill} from "@remixicon/react";

function Stars({rating}) {
    return (
        <div className="stars">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <RiStarFill size={15} key={i} color={ratingValue <= rating ? "gold" : "gray"} />
                );
            })}
        </div>
    );
}

export default Stars;