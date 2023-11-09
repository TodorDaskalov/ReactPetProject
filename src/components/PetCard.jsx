import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function PetCard({
    name,
    hair_color,
    eye_color,
    birth_year,
    gender,
}) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../../public/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <li>{hair_color}</li>
                    <li>{eye_color}</li>
                    <li>{birth_year}</li>
                    <li>{gender}</li>
                </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}
