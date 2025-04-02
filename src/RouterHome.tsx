import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function RouterHome() {

    const localtion = useLocation();

    useEffect(() => {
        // const temp = setInterval(() => {
        //     console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOKKKKKKKKKKKKKKK");
        // }, 1000)

        // return () => {
        //     clearInterval(temp);
        // }
        console.log(localtion.pathname);
        console.log(localtion.hash);
        console.log(localtion.key);
        console.log(localtion.search);
        console.log(localtion.state);

    }, [])

    return (
        <div>RouterHome</div>
    )
}
