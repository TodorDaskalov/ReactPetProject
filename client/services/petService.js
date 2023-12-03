export const getAllPets = async () => {
    const baseUrl = "http://localhost:3030/jsonstore/pets";

    const result = await fetch(baseUrl);
    const data = await result.json();

    return Object.values(data);
};

export const getPetDetails = async (petId) => {
    const result = await fetch(`http://localhost:3030/jsonstore/pets/${petId}`);
    const data = await result.json();

    return data;
};

export const deletePet = async (petId) => {
    await fetch(`http://localhost:3030/jsonstore/pets/${petId}`, {
        method: "DELETE",
    });
};
