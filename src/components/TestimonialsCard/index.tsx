import React from "react";
import { Card } from "./styles";

type Props = {
    img?: string;
    name: string;
    course?: string;
    text: string;
    stars?: number;
};

const TestimonialCard: React.FC<Props> = ({ img, name, course, text, stars = 5 }) => {
    return (
        <Card>
            {img && <img src={img} alt={name} className="photo" />}
            <div className="info">
                <h3 className="name">{name}</h3>
                {course && <p className="course">{course}</p>}
                <p className="feedback">“{text}”</p>
                <div className="stars" aria-label={`${stars} de 5 estrelas`}>
                    {Array.from({ length: 5 }).map((_, i) =>
                        i < stars ? <span key={i} className="star filled">★</span> : <span key={i} className="star">☆</span>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default TestimonialCard;
