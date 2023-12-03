import { getHeaders } from "./authService";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const postComment = async (petId, user, content) => {
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // headers: getHeaders()
            },
            body: JSON.stringify({
                petId,
                user,
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

export const getAllComments = async () => {
    const response = await fetch(baseUrl);

    if (response.status === 204) {
        return [];
    }

    const data = await response.json();

    return Object.values(data);
};

export const deleteComment = async (commentId) => {
    try {
        const response = await fetch(`${baseUrl}/${commentId}`, {
            method: "DELETE",
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
            headers: {
                "Content-Type": "application/json",
            },
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
