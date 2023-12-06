import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useContext, useState } from "react";
import ConfirmationModal from "../modals/ConfirmationModal";

export default function PetCard({
    _ownerId,
    _id,
    name,
    breed,
    imageUrl,
    age,
    onDelete,
}) {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleClose = () => setShowConfirmation(false);
    const handleShow = () => setShowConfirmation(true);

    const onClickDeleteHandler = () => {
        handleShow();
    };

    const confirmationDeleteHandler = () => {
        onDelete(_id);
        handleClose();
    };

    const { userId } = useContext(AuthContext);

    const isOwner = userId === _ownerId;

    return (
        <Card style={{ width: "18rem", margin: "10px 0px" }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text style={{ listStyle: "none", padding: 0 }}>
                    <li>Breed: {breed}</li>
                    <li>Age: {age}</li>
                    {/* <li>{birth_year}</li> */}
                    {/* <li>{gender}</li> */}
                </Card.Text>
                <Link to={`/pets/${_id}`}>
                    <Button variant="primary">Details</Button>
                </Link>
                {isOwner && (
                    <>
                        <Link to={`/pets/edit-pet/${_id}`}>
                            <Button variant="primary">Edit</Button>
                        </Link>
                        <Button variant="danger" onClick={onClickDeleteHandler}>
                            Delete
                        </Button>
                        <ConfirmationModal
                            show={showConfirmation}
                            handleClose={handleClose}
                            handleConfirm={confirmationDeleteHandler}
                        />
                    </>
                )}
            </Card.Body>
        </Card>
    );
}
