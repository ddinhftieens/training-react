import React, { memo } from 'react'

function UseCallBack(props: any) {

    console.log("UseCallBack");


    return (
        <div>
            <button onClick={props.callBack}>Use call back</button>
        </div>
    )
}

export default memo(UseCallBack)
