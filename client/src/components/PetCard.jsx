import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";
import Path from "../appPaths";

export default function PetCard({ _ownerId, _id, name, breed, imageUrl, age, onDelete }) {

    const onClickDeleteHandler = () => {
        onDelete(_id);
    };

    const {userId} = useContext(AuthContext);

    const isOwner = userId === _ownerId;

    return (
        <Card style={{ width: "18rem", margin: "10px 0px" }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text style={{ listStyle: 'none', padding: 0 }}>
                    <li>Breed: {breed}</li>
                    <li>Age: {age}</li>
                    {/* <li>{birth_year}</li> */}
                    {/* <li>{gender}</li> */}
                </Card.Text>
                <Link to={_id}>
                    <Button variant="primary">Details</Button>
                </Link>
                {isOwner && (
                    <>
                        <Link to={`edit-pet/${_id}`}>
                            <Button variant="primary">Edit</Button>
                        </Link>
                        <Button variant="danger" onClick={onClickDeleteHandler}>Delete</Button>
                    </>
                )}
            </Card.Body>
        </Card>
    );
};
