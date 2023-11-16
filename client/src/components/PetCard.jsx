import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function PetCard({
    _id,
    name,
    breed,
    imageUrl,
    age,
}) {
    return (
        <Card style={{ width: "18rem", margin: "10px 0px" }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <li>{breed}</li>
                    <li>{age}</li>
                    {/* <li>{birth_year}</li> */}
                    {/* <li>{gender}</li> */}
                </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}
