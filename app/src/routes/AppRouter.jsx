import { Register } from '../pages/Register'
import { Login } from '../pages/Login'
import { HomePage } from '../pages/HomePage'

export function AppRouter() {
    const path = window.location.pathname

    switch (path) {
        case "/login":
            return <Login />
        case "/register":
            return <Register />
        default:
            return <HomePage />
    }
}