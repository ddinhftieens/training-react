import React, { useEffect } from 'react'
import Redux1 from './Redux1'
import Redux2 from './Redux2'
import Redux3 from './Redux3'
import { useAppDispatch } from './store/hook'
import { getLstUser } from './reducers/counterSlice'

export default function ReduxTookit() {

    const dispath = useAppDispatch();

    useEffect(() => {
        // dispath(getLstUser())
    }, [])

    return (
        <>
            <div>ReduxTookit</div>
            <Redux1 />
            <Redux2 />
            <Redux3 />
        </>
    )
}
