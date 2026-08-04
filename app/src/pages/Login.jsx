import { useState } from "react"
import { login } from "../services/login"

import { FormInput } from "@/components/FormInput"

import {
    IconMail,
    IconLock,
    IconUser,
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
        <section className="min-h-screen flex items-center justify-center">
            <section className="bg-gray-100 w-80 h-80 flex flex-col justify-center space-y-4 px-4 rounded-lg">

                <form
                    onSubmit={handleSubmit}
                    className=""
                >
                    <div className="flex justify-center">
                        <IconUser />
                    </div>

                    <h1 className="text-5xl font-light  text-gray-900 md:text-2xl text-center">Login</h1>
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
                        icon={<IconLock className="size-4 " />}
                    />

                    <button
                        type="submit"
                        className="bg-gray-900 text-white w-full py-2 rounded mt-4"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <a href="/register">
                        Register
                    </a>
                </p>
            </section>
        </section>
    )
}
