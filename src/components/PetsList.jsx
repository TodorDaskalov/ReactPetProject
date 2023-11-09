import { useEffect, useState } from "react";
import PetCard from './PetCard';
import styles from './PetsList.module.css';

export default function PetsList() {

    let baseUrl = 'https://swapi.dev/api/people'

    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            setPets(data.results);
        })
    }, [])

    return (
        <div className={styles.petsListContainer}>
            {pets.map(pet => 
                <PetCard key={pet.name} {...pet} />)}
        </div>
    );
};