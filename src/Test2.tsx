import React from 'react'
import Test21 from './Test21'
import Test211 from './Test211';

export default function Test2() {

    const name = "Nguyen Van A";

    const student = {
        name: "Nguyen Van B",
        age: 11
    }

    

    return (
        <>
            <Test21>
                <Test211 name={name} age={10} stu={student} />
            </ Test21>
            {/* <Test21 name={name} age={10} stu={student} />
            <Test21 name={name} age={10} stu={student} /> */}
        </>
    )
}
