import { Card } from "./styles";

type Props = {
    img: string;
    name: string;
    course: string;
    text: string;
    stars?: number;
};

export default function TestimonialCard({ img, name, course, text, stars = 5 }: Props) {
    return (
        <Card>
            <img src={img} alt={name} className="photo" />

            <h3 className="name">{name}</h3>
            <p className="course">{course}</p>

            <p className="text">“{text}”</p>

            <div className="stars" aria-label={`${stars} de 5 estrelas`}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`star ${i < stars ? "filled" : ""}`}>
                        ★
                    </span>
                ))}
            </div>
        </Card>
    );
}
