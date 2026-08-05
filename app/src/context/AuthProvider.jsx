import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { getCurrentUserService } from "../services/getCurrentUserService";
import { loginService } from "@/services/loginService";
import PropTypes from "prop-types";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getCurrentUserService(token)
                .then(setUser)
                .catch(() => localStorage.removeItem("token"))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (credentials) => {
        const response = await loginService(credentials);
        const { token } = response.data;

        localStorage.setItem("token", token);

        const perfil = await getCurrentUserService(token);
        setUser(perfil);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};