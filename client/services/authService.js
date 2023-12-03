export const getHeaders = () => {
    const headers = {
        "Content-Type": "application/json",
    };

    const token = localStorage.getItem('accessToken');

    if (token) {
        headers["X-Authorization"] = token;
    }

    return headers;
};

export const login = async (email, password) => {

    try {
        const response = await fetch("http://localhost:3030/users/login", {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};

export const register = async (email, password) => {
    try {
        const response = await fetch("http://localhost:3030/users/register", {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};

export const logoutFunc = async () => {

    const result = await fetch("http://localhost:3030/users/logout", {
        headers: getHeaders(),
    });

    if (!result.ok) {
        throw result;
    };

};
