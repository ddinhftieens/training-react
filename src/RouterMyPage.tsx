import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RouterMyPage() {
    return (
        <>
            <Outlet />
            <div>RouterMyPage</div>
        </>
    )
}
