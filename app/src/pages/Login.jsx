import { useState } from "react"
import { login } from "../services/login"

export function Login() {
    const [formData, setFormData] = useState({
        correo: "",
        password: "",
    });

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await login(formData);

            console.log(data);
            alert("Inicio Exitoso");
            window.location.href = "/";

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">

                <input
                    type="email"
                    name="correo"
                    placeholder="E-Mail"
                    value={formData.correo}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />

                <button
                    type="submit"
                    className="bg-gray-900 text-white w-full py-2 rounded"
                >
                    Login
                </button>
            </form>
            <p>Dont have an account? <a href="/register">Register</a></p>
        </>
    )
}
