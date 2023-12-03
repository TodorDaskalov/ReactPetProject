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
