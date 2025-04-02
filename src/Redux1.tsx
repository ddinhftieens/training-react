import React from 'react'
import { useAppDispatch, useAppSelector } from './store/hook';
import { addLst, dec, decNum, getLstUser, inc, incNum } from './reducers/counterSlice';

export default function Redux1() {

    const counter = useAppSelector((state) => state.counterStore.counter);

    const dispath = useAppDispatch();

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <div>Redux 1: {counter}</div>
                <button onClick={() => {
                    dispath(incNum(2))
                }} >INC NUM</button>
                <button onClick={() => {
                    dispath(decNum(1))
                }} >DES NUM</button>
                <button onClick={() => {
                    dispath(getLstUser())
                }} >Get lst</button>
                <button onClick={() => {
                    dispath(addLst("ddd"))
                }} >Add lst</button>
            </div>
        </>
    )
}
