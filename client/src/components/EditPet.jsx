import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditPet.module.css";
import { getPetDetails, updatePet } from "../../services/petService";

export default function EditPet() {
    const { petId } = useParams();
    const [petForm, setPetForm] = useState({
        name: "",
        breed: "",
        age: "",
        imageUrl: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const petData = async () => {
            try {
                const petData = await getPetDetails(petId);

                setPetForm({
                    name: petData.name,
                    breed: petData.breed,
                    age: petData.age,
                    imageUrl: petData.imageUrl,
                });
            } catch (error) {
                console.error("Error fetching pet data:", error);
            };
        };

        petData();
    }, [petId]);

    const inputChangeHandler = (e) => {
        setPetForm({
            ...petForm,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const response = await updatePet(petId, petForm);
            
            if (response) {
                navigate(`/pets/${petId}`);
            }
            
        } catch (error) {
            console.error("Error updating pet:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className={styles.editPetForm} onSubmit={submitHandler}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={petForm.name}
                    onChange={inputChangeHandler}
                    required
                />
            </label>
            <label>
                Breed:
                <input
                    type="text"
                    name="breed"
                    value={petForm.breed}
                    onChange={inputChangeHandler}
                    required
                />
            </label>
            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={petForm.age}
                    onChange={inputChangeHandler}
                    required
                />
            </label>
            <label>
                Image URL:
                <input
                    type="url"
                    name="imageUrl"
                    value={petForm.imageUrl}
                    onChange={inputChangeHandler}
                    required
                />
            </label>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Updating Pet..." : "Update Pet"}
            </button>
        </form>
    );
}
