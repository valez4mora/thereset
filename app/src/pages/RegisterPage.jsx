import { useState } from "react"
import { registerService } from "../services/registerService"
import { useNavigate } from "react-router-dom";
import { FormInput } from "../components/FormInput"

import {
    IconUser,
    IconMail,
    IconPhone,
    IconLock,
} from "@tabler/icons-react"


export function RegisterPage() {
    const navigate = useNavigate();
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
            const data = await registerService(formData);

            console.log(data);
            alert("Registro Exitoso");

            navigate("/login", { replace: true });


        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <section className="min-h-screen flex items-center justify-center py-10">
            <section className="bg-gray-100 w-[520px] rounded-lg px-8 py-10 shadow-lg">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <div className="flex justify-center">
                        <IconUser className="size-10" />
                    </div>

                    <h1 className="text-4xl font-light text-center text-gray-900">
                        Register
                    </h1>

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
                        className="bg-gray-900 text-white w-full py-2 rounded mt-4 hover:bg-gray-800 transition-colors"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center mt-6">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-blue-500 hover:underline"
                    >
                        Login
                    </a>
                </p>
            </section>
        </section>
    )

}
