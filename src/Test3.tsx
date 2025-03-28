import React from 'react'

export default function Test3() {
    const lstStuden = [
        { name: "A", age: "1", address: "E" },
        { name: "B", age: "2", address: "F" },
        { name: "C", age: "3", address: "G" },
        { name: "D", age: "4", address: "H" },
    ]
    return (
        <>
            <h1>Hello</h1>
            <div>
                {
                    lstStuden.map((ele: any, index: any) => (
                        <h2 key={index} className={`${ele.age % 2 == 0 ? 'color-red' : ''}`}>{ele.name} {ele.age} {ele.address}</h2>
                    ))
                }
            </div>
        </>
    )
}
