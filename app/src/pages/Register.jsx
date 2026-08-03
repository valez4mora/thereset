import { useState } from "react"
import { register } from "../services/register"

import { FormInput } from "../components/FormInput"

import {
    IconUser,
    IconMail,
    IconPhone,
    IconLock,
} from "@tabler/icons-react"


export function Register() {

    const [formData, setFormData] = useState({
        nombre: "",
        primerApellido: "",
        segundoApellido: "",
        correo: "",
        telefono: "",
        password: "",
    })


    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const data = await register(formData)

            console.log(data)
            alert("Usuario registrado")

            window.location.href = "/login"

        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-md mx-auto"
        >

            <FormInput
                name="nombre"
                label="Name"
                placeholder="Name"
                value={formData.nombre}
                onChange={handleChange}
                icon={<IconUser className="size-4" />}
            />


            <FormInput
                name="primerApellido"
                label="First Surname"
                placeholder="First Surname"
                value={formData.primerApellido}
                onChange={handleChange}
                icon={<IconUser className="size-4" />}
            />


            <FormInput
                name="segundoApellido"
                label="Second Surname"
                placeholder="Second Surname"
                value={formData.segundoApellido}
                onChange={handleChange}
                icon={<IconUser className="size-4" />}
            />


            <FormInput
                name="correo"
                label="E-Mail"
                placeholder="E-Mail"
                type="email"
                value={formData.correo}
                onChange={handleChange}
                icon={<IconMail className="size-4" />}
            />


            <FormInput
                name="telefono"
                label="Phone Number"
                placeholder="Phone Number"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                icon={<IconPhone className="size-4" />}
            />


            <FormInput
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                icon={<IconLock className="size-4" />}
            />


            <button
                type="submit"
                className="bg-gray-900 text-white w-full py-2 rounded"
            >
                Register
            </button>

        </form>
    )
}
