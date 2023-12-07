import Button from "react-bootstrap/Button";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./PetDetails.module.css";
import { deletePet, getPetDetails } from "../../services/petService";
import Comments from "./Comments";
import AuthContext from "../contexts/AuthContext";
import Path from "../appPaths";
import ConfirmationModal from "../modals/ConfirmationModal";

export default function PetDetails() {
    const { userId } = useContext(AuthContext);
    const { petId } = useParams();
    const [pet, setPet] = useState({});
    const navigate = useNavigate();
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleDeleteModalShow = () => setShowDeleteConfirmation(true);
    const handleDeleteModalClose = () => setShowDeleteConfirmation(false);

    useEffect(() => {
        getPetDetails(petId).then(setPet);
    }, [petId]);

    const isOwner = pet._ownerId === userId;

    const handleEditClick = () => {
        navigate(`/pets/edit-pet/${petId}`);
    };

    const handleDeleteClick = () => {
        handleDeleteModalShow();
    };

    const handleDeleteConfirmed = () => {
        deletePet(petId);
        handleDeleteModalClose();
        navigate(Path.PetsList);
    };

    return (
        <div className={styles.petDetails}>
            <div className={styles.petImageContainer}>
                <img src={pet.imageUrl} alt="Pet" className={styles.petImage} />
            </div>
            <div className={styles.petInfo}>
                <h1 className={styles.petName}>{pet.name}</h1>
                <p className={styles.petDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora cum distinctio ab maiores illum explicabo obcaecati
                    consequuntur facere provident esse. Atque minus laboriosam a
                    nisi dolor veritatis nulla, laudantium corporis!
                </p>
                <div className={styles.petDetailsInfo}>
                    <div className={styles.petDetail}>
                        <strong>Age:</strong> {pet.age} years
                    </div>
                    <div className={styles.petDetail}>
                        <strong>Breed:</strong> {pet.breed}
                    </div>
                </div>
                <Button>Adopt Me</Button>

                {isOwner && (
                    <>
                        <Button
                            onClick={handleEditClick}
                            className={styles.editButton}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="danger"
                            onClick={handleDeleteClick}
                            className={styles.deleteButton}
                        >
                            Delete
                        </Button>
                        <ConfirmationModal
                            show={showDeleteConfirmation}
                            handleClose={handleDeleteModalClose}
                            handleConfirm={handleDeleteConfirmed}
                        />
                    </>
                )}
            </div>
            <Comments petId={petId} />
        </div>
    );
}
