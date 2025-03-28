import React from 'react'

export default function Test1() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Hello world</h1>
            {
                (false) && <h3>Welcome</h3>
            }
            {
                (false) ? <h3>Welcome 1</h3> : <h3>Welcome 2</h3>
            }
            <div dangerouslySetInnerHTML={{__html: "<p>Hello</p>"}}></div>

            <h2 className='color-red'>
                Welcome to Ha Noi
            </h2>

            <img src={require("./assets/image/403-err.jpg")} />
        </div>
    )
}
