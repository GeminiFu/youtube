import React from 'react'

const SetKey = (props) => {
    return (
        <>
            <input
                type="text"
                placeholder='輸入你的 API KEY'
                onChange={(e) => {
                    // TODO: SetKey
                    props.setKey(e.target.value)
                    // TODO: 轉到 /search
                }}
            />
        </>
    )
}

export default SetKey