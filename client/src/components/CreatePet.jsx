import { useState } from "react";
import styles from "./CreatePet.module.css";

export default function CreatePet() {
    const [petForm, setPetForm] = useState({
        name: "",
        breed: "",
        age: "",
        imageUrl: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

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
            const response = await fetch(
                "http://localhost:3030/jsonstore/pets",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(petForm),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to add pet");
            }

            setPetForm({
                name: "",
                breed: "",
                age: "",
                imageUrl: "",
            });
        } catch (error) {
            console.error("Error adding pet:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className={styles.addPetForm} onSubmit={submitHandler}>
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
                {isSubmitting ? "Adding Pet..." : "Add Pet"}
            </button>
        </form>
    );
}
