import { getHeaders } from "./authService";

const baseUrl = "http://localhost:3030/data/comments";

export const postComment = async (petId, content) => {
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({
                petId,
                content,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error posting comment:", error);
        throw error;
    }
};

export const getAllComments = async (petId) => {

    const query = new URLSearchParams({
        where: `petId="${petId}"`,
        load: `owner=_ownerId:users`
    })

    const response = await fetch(`${baseUrl}?${query}`);

    if (response.status === 204) {
        return [];
    }

    const data = await response.json();

    return data;
};

export const deleteComment = async (commentId) => {
    try {
        const response = await fetch(`${baseUrl}/${commentId}`, {
            method: "DELETE",
            headers: getHeaders(),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error deleting comment:", error);
        throw error;
    }
};

export const updateComment = async (commentId, newContent) => {
    try {
        const response = await fetch(`${baseUrl}/${commentId}`, {
            method: "PATCH",
            headers: getHeaders(),
            body: JSON.stringify({
                content: newContent,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating comment:", error);
        throw error;
    }
};
