import React from 'react'
import useAuth from '../hooks/useAuth'

export default function Dashboard() {
    const { user } = useAuth()
    return (
        <div>
            <h2>Dashboard</h2>
            <p>bienvenido {user.name}</p>
        </div>
    )
}
