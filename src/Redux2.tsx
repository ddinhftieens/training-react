import React from 'react'
import { useAppSelector } from './store/hook';

export default function Redux2() {

    const num = useAppSelector((state) => state.counterStore.num);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Redux2 : {num}</h2>
        </div>
    )
}
