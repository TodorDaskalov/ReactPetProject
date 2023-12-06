import { useContext, useEffect, useState } from "react";
import PetCard from "./PetCard";
import styles from "./PetsList.module.css";
import { deletePet, getMyPets } from "../../services/petService";
import AuthContext from "../contexts/AuthContext";

export default function MyPets() {
    const [pets, setPets] = useState([]);
    const { userId } = useContext(AuthContext);
    useEffect(() => {
        getMyPets(userId)
            .then((petsData) => setPets(petsData))
            .catch((error) => console.error("Error fetching pets:", error));
    }, []);

    const deletePetHandler = async (petId) => {
        try {
            await deletePet(petId).then(
                setPets((prevPets) =>
                    prevPets.filter((pet) => pet._id !== petId)
                )
            );
        } catch (error) {
            console.error("Error deleting pet:", error);
        }
    };

    return (
        <div className={styles.petsListContainer}>
            <h2 className={styles.blockHeading}>My Pets</h2>
            {pets && pets.length > 0 ? (
                <div className={styles.petsListCardsContainer}>
                    {pets.map((pet) => (
                        <PetCard
                            key={pet._id}
                            {...pet}
                            onDelete={() => deletePetHandler(pet._id)}
                        />
                    ))}
                </div>
            ) : (
                <p className={styles.noPetsMessage}>
                    No pets at the moment.
                </p>
            )}
        </div>
    );
};
