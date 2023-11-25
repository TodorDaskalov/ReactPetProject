import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { deletePet } from "../../services/petService";

export default function PetCard({ _id, name, breed, imageUrl, age, onDelete }) {

    const onClickDeleteHandler = () => {
        onDelete(_id);
    }

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
                <Link to={_id}>
                    <Button variant="primary">Details</Button>
                </Link>
                <Link to={""}>
                    <Button variant="primary">Edit</Button>
                </Link>
                <Button variant="danger" onClick={onClickDeleteHandler}>Delete</Button>
            </Card.Body>
        </Card>
    );
}
