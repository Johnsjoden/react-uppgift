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
    function renderLabel(placeholder, value){
        return <label htmlFor={value}>
            {placeholder}
        </label>
    }
    return (
        <div>
            {renderLabel(placeholder, value)}
            {renderInput(type, placeholder, value, setValue)}
        </div>
    )
}
