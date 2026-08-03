import { useState } from "react"
import { login } from "../services/login"

import { FormInput } from "../components/FormInput"

import {
    IconMail,
    IconLock,
} from "@tabler/icons-react"


export function Login() {

    const [formData, setFormData] = useState({
        correo: "",
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
            const data = await login(formData)

            console.log(data)
            alert("Inicio Exitoso")

            window.location.href = "/"

        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-md mx-auto"
            >

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
                    Login
                </button>

            </form>

            <p className="text-center mt-4">
                Dont have an account?{" "}
                <a href="/register">
                    Register
                </a>
            </p>
        </>
    )
}
