import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router'


export default function AuthLayout() {
    const { user } = useAuth()

    if (!user) {
        return <Navigate to="/login" replace></Navigate>
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}
