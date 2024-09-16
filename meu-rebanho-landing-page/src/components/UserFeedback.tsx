import React from "react";
import "../styles/feedback.css";

interface UserFeedbackProps {
    imgSrc: string;
    name: string;
    feedback: string;
}

const UserFeedback: React.FC<UserFeedbackProps> = ({ imgSrc, name, feedback }) => {
    return (
        <div className="feedback-card">
            <img src={imgSrc} alt={`Foto de ${name}`} className="user-img" />
            <div className="feedback-content">
                <h3>{name}</h3>
                <p>{feedback}</p>
            </div>
        </div>
    );
};

export default UserFeedback;
