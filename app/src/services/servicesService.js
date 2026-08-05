const API_URL = import.meta.env.VITE_API_URL

console.log("API:", API_URL)
export const servicesService = async (servicesData) => {
    const response = await fetch(`${API_URL}/servicios`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(servicesData),
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || "Error al encontrar los servicios")
    }

    return data
}