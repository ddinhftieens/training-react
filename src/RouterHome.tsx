import React, { useEffect } from 'react'

export default function RouterHome() {

    useEffect(() => {
        const temp = setInterval(() => {
            console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOKKKKKKKKKKKKKKK");
        }, 1000)

        return () => {
            clearInterval(temp);
        }
    }, [])

    return (
        <div>RouterHome</div>
    )
}
