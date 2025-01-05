import React from "react";
import Review from "./Review";

import avatar from "../img/avatar.jpg";
import avatar2 from "../img/avatar_2.jpg";

class Reviews extends React.Component {
    render() {
        return (
            <div className="reviews">
                <Review
                    img={avatar}
                    name="Mark Jco"
                    stars={5}
                    rating="5"
                    header="Ana Studios was very logical and creative at the same time"
                    review="The client received excellent feedback on DePalma Studios’ designs due to their website's improved look and feel. The team was very communicative and collaborative, and they demonstrated a unique understanding of the client's requirements, providing very."
                />
                <Review
                    img={avatar2}
                    name="Johnny Ben"
                    stars={4}
                    rating="4.5"
                    header="Ana Studios was very logical and creative at the same time"
                    review="The client received excellent feedback on DePalma Studios’ designs due to their website's improved look and feel. The team was very communicative and collaborative, and they demonstrated a unique understanding of the client’s requirements, providing very. "
                />
            </div>
        );
    }
}

export default Reviews;