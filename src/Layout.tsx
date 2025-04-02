import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout() {

    const navigate = useNavigate();

    const redirectToPath = (urlPath: string) => {
        navigate(urlPath)
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <div onClick={() => {
                    redirectToPath("/")
                }}>Home</div>
                <div onClick={() => {
                    redirectToPath("/about?name=1238234823&address=Ha noi")
                }}>About</div>
                <div onClick={() => {
                    redirectToPath("/mypage/page1")
                }}>Mypage 1</div>
                <div onClick={() => {
                    redirectToPath("/mypage/page2")
                }}>MyPage 2</div>
                <div onClick={() => {
                    redirectToPath("/mypage/page3/123")
                }}>MyPage 3</div>
                <Outlet />
                <div>Layout</div>
            </div>
        </>
    )
}
