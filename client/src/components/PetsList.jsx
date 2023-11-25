import { useEffect, useState } from "react";
import PetCard from "./PetCard";
import styles from "./PetsList.module.css";
import { deletePet } from "../../services/petService";


export default function PetsList() {
    let baseUrl = "http://localhost:3030/jsonstore/pets";

    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => {
                setPets(Object.values(data));
            });
    }, []);

    const deletePetHandler = async (petId) => {
        try {
            await deletePet(petId).then(setPets((prevPets) => prevPets.filter((pet) => pet._id !== petId)));
        } catch (error) {
            console.error("Error deleting pet:", error);
        }
    };

    return (
        <div className={styles.petsListContainer}>
            <h2 className={styles.blockHeading}>Pets for adoption</h2>
            <div className={styles.petsListCardsContainer}>
                {pets.map((pet) => (
                    <PetCard key={pet._id} {...pet} onDelete={deletePetHandler}/>
                ))}
            </div>
        </div>
    );
}
