import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PetDetails.module.css";
import { getPetDetails } from "../../services/petService";
import Comments from "./Comments";

export default function PetDetails() {
    const { petId } = useParams();

    const [pet, setPet] = useState({});

    useEffect(() => {
        getPetDetails(petId).then(setPet);
    }, [petId]);

    return (
        <div className={styles.petDetails}>
            <div className={styles.petImageContainer}>
                <img src={pet.imageUrl} alt="Pet" className={styles.petImage} />
            </div>
            <div className={styles.petInfo}>
                <h1 className={styles.petName}>{pet.name}</h1>
                <p className={styles.petDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <div className={styles.petDetailsInfo}>
                    <div className={styles.petDetail}>
                        <strong>Age:</strong> {pet.age} years
                    </div>
                    <div className={styles.petDetail}>
                        <strong>Breed:</strong> {pet.breed}
                    </div>
                </div>
                <button className={styles.adoptButton}>Adopt Me</button>
            </div>
            <Comments petId={petId} />
        </div>
    );
}
