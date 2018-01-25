import React from 'react'
import styled from 'styled-components'

export const Button = styled.button `
height: 50px;
        width: 200px;
        background-color: #256EFF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: 700;
        color: #EFE9E7;

`
export const ButtonDelete = Button.extend`
    background-color:#FF6B6B;
`

export const ButtonEdit = Button.extend`
    background-color:#46237A;
`

export default { Button, ButtonDelete, ButtonEdit }