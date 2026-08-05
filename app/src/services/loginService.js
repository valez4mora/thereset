const API_URL = import.meta.env.VITE_API_URL

console.log("API:", API_URL)
export const loginService = async (userData) => {
    const response = await fetch(`${API_URL}/usuarios/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || "Error al inciar")
    }

    localStorage.setItem("token", data.token)
    
    return data
}