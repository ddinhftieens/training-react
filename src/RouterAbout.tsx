import React, { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';

console.log("RouterAbout");


export default function RouterAbout() {

    const localtion = useLocation();

    const [params, setParams] = useSearchParams()

    console.log(params);


    useEffect(() => {
        // console.log(localtion.pathname);
        // console.log(localtion.hash);
        // console.log(localtion.key);
        // console.log(localtion.search);
        // console.log(localtion.state);

        console.log(params.get("name"));
        console.log(params.get("address"));


    }, [])

    return (
        <div>RouterAbout</div>
    )
}
