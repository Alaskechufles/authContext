import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function useAuth() {
    const context = useContext(AuthContext)

    /* Buena practica para ayudar al DEV */
    if (!context) {
        throw new Error("useAuth de usarse en el AuthProvider")
    }

    return context
}

export default useAuth