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
        border: none;

`
export const ButtonDelete = Button.extend`
    background-color:#FF6B6B;
`

export const ButtonEdit = Button.extend`
    background-color:#46237A;
`
export const ButtonLink = Button.extend`
    background-color:#23395B;
`
export const ButtonFooterOne = Button.extend`
    background-color:#EFE9E7;
    color:#D81E5B;

`
export const ButtonFooterTwo = Button.extend`
    background-color:#D81E5B;
    color:#EFE9E7;
    border: 1px solid #EFE9E7;
`

export default { Button, ButtonDelete, ButtonEdit, ButtonLink, ButtonFooterOne, ButtonFooterTwo }