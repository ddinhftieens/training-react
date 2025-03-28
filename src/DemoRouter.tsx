import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import RouterHome from './RouterHome'
import RouterAbout from './RouterAbout'

export default function DemoRouter() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<RouterHome />} />
                <Route path='/about' element={<RouterAbout />} />
            </Routes>
        </div>
    )
}
