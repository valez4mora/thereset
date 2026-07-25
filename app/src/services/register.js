const API_URL = import.meta.env.VITE_API_URL;

console.log("API:", API_URL);
export const register = async (userData) => {
    const response = await fetch(`${API_URL}/usuarios/registro`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Error al registrar");
    }

    return data;
};