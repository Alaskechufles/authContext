import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router'

export default function Login() {
    const { login, user } = useAuth()

    if (user) {
        return <Navigate to="/dashboard"></Navigate>
    }
    return (
        <div>
            <h2>Login</h2>
            <button onClick={() => login("Diego")}>Click para hacer Login</button>
            <button onClick={() => login("Andres")}>Click para hacer Login</button>
        </div>
    )
}
