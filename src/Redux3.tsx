import React from 'react'
import { useAppSelector } from './store/hook';

export default function Redux3() {

    const lst = useAppSelector((state) => state.counterStore.lst);

    console.log(lst);


    return (
        <div>Redux3</div>
    )
}
