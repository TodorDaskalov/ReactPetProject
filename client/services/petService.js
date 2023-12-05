import { getHeaders } from "./authService";

const baseUrl = "http://localhost:3030/data";

export const getAllPets = async () => {
    const result = await fetch(`${baseUrl}/pets`);
    const data = await result.json();

    return data;
};

export const getPetDetails = async (petId) => {
    const result = await fetch(`${baseUrl}/pets/${petId}`);
    const data = await result.json();

    return data;
};

export const deletePet = async (petId) => {
    await fetch(`${baseUrl}/pets/${petId}`, {
        method: "DELETE",
        headers: getHeaders(),
    });
};

export const updatePet = async (petId, petForm) => {
    try {
        const response = await fetch(
            `http://localhost:3030/data/pets/${petId}`,
            {
                method: "PUT",
                headers: getHeaders(),
                body: JSON.stringify(petForm),
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response;
    } catch (error) {
        console.error("Error updating pet:", error);
        throw error;
    }
};
