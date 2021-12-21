import React from 'react'
/* import styled from 'styled-components' */

export default function Input({type, placeholder, value, setValue}) {
    /* const Input = styled.input`
    ` */
    function renderInput(type, placeholder, value, setValue){
        return <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        />
    }
    return (
        <div>
            {renderInput(type=type, placeholder=placeholder, value=value, setValue=setValue)}
        </div>
    )
}
