import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import UseCallBack from './UseCallBack';

export default function ReactHooks() {

    const [count, setCount] = useState<number>(0);

    const fullNmRef = useRef<any>(null);

    const countRef = useRef<number>(0);

    let countConst = 0;

    useEffect(() => {
        console.log("Count -> " + count);
    }, [count])

    const [student, setStudent] = useState<any>({
        fullName: "",
        dob: 0
    })

    const handleChange = (event: any) => {
        setStudent({
            ...student,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeNumber = (event: any) => {
        const newValue = event.target.value;
        setStudent({
            ...student,
            [event.target.name]: newValue,
        });
    };

    const onClickButtonCountRef = () => {
        // countRef.current = countRef.current + 1;
        countConst = countConst + 1;
        console.log(countConst);

    }

    // const callBack = () => {
    //     console.log("Call back func");
    // }

    const callBack = useCallback(() => {
        console.log("Call back func");
    }, [student.fullName])

    // const sum = () => {
    //     let total = 0;
    //     for (let i = 0; i < 100; i++) {
    //         total += i;
    //     }
    //     console.log("Total" + total);
    //     return total;
    // }

    const sum = useMemo(() => {
        let total = 0;
        for (let i = 0; i < 100; i++) {
            total += i;
        }
        console.log("Total " + (total + count));
        return total + count;
    }, [count])

    return (
        <>
            <div style={{ textAlign: "center" }}>Hello world</div>
            <div style={{ textAlign: "center" }}>
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    setCount(count + 1)
                }} >OK</button>

                <button onClick={() => {
                    // setCount(count + 1)
                    // setCount(count + 1)
                    setCount((pre) => pre + 1);
                    setCount((pre) => pre + 1);
                }} >OK + 2</button>

                <div>
                    <input ref={fullNmRef} name='fullName' type='text' onChange={handleChange} value={student.fullName || ""} />
                </div>

                <div>
                    <input name='dob' type='number' value={student.dob}
                        onChange={handleChangeNumber}
                    />
                </div>

                <div>
                    <button onClick={() => {
                        fullNmRef.current.focus();
                    }}>Focus full name</button>
                </div>
                <div>
                    Ref count: {countRef.current}
                </div>

                <div>
                    Const count: {countConst}
                </div>
                <div>
                    <button onClick={onClickButtonCountRef}>Button ref count</button>
                </div>

                <UseCallBack callBack={callBack} />

                <div>
                    <h1>{sum}</h1>
                </div>

            </div>
        </>
    )
}
