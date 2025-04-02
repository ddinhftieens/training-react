import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function MyPage3() {

    const param = useParams();

    useEffect(() => {
        console.log(param.id);
    }, [])

    return (
        <div>MyPage3</div>
    )
}
