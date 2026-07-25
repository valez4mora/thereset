import { useState } from "react";
import { register } from "../services/register";

function Register() {
    const [formData, setFormData] = useState({
        nombre: "",
        primerApellido: "",
        segundoApellido: "",
        correo: "",
        telefono: "",
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
            const data = await register(formData);

            console.log(data);
            alert("Usuario registrado");

            setFormData({
                nombre: "",
                primerApellido: "",
                segundoApellido: "",
                correo: "",
                telefono: "",
                password: "",
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <input
                type="text"
                name="nombre"
                placeholder="Name"
                value={formData.nombre}
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <input
                type="text"
                name="primerApellido"
                placeholder="First Surname"
                value={formData.primerApellido}
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <input
                type="text"
                name="segundoApellido"
                placeholder="Second Surname"
                value={formData.segundoApellido}
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <input
                type="email"
                name="correo"
                placeholder="E-Mail"
                value={formData.correo}
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <input
                type="text"
                name="telefono"
                placeholder="Phone Number"
                value={formData.telefono}
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
                Register
            </button>
        </form>
    );
}

export default Register;