import React from 'react'
import styled from 'styled-components'
export default function Heading1({text}) {
    const Heading = styled.h1`
        color: blue;
    `
    return (
        <div>
            <Heading>
                {text}
            </Heading>
        </div>
    )
}
