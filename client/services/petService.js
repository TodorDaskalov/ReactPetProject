export const getPetDetails = async (petId) => {
     const result = await fetch(`http://localhost:3030/jsonstore/pets/${petId}`)
     
     const data = await result.json();
     
     return data;
}