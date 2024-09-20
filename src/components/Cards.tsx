import React from "react";
import "../styles/cards.css";

interface CardProps {
    Icon?: React.ReactNode;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description, Icon }) => {
    return (
        <div className="card">
            {Icon && <div className="icon">{Icon}</div>}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;