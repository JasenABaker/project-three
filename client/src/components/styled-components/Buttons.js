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
        cursor: pointer;

        :hover{
            color:#256EFF;
            background:#FF6978;
            outline-style:none;
        }

`
export const ButtonDelete = Button.extend`
    background-color:#FF6B6B;

    :hover{
        background:#2D93AD;
        color:#DBD56E;
    }
`

export const ButtonEdit = Button.extend`
    background-color:#46237A;

    :hover{
        background:#3DDC97;
        color:#FF6978;
    }
`
export const ButtonLink = Button.extend`
    background-color:#23395B;

    :hover{
        background:#D81E5B;
        color:#C0F5FA;
    }
`
export const ButtonFooterOne = Button.extend`
    background-color:#EFE9E7;
    color:#D81E5B;

    :hover{
        background-color:#D81E5B;
        color:#EFE9E7;
        border: 1px solid #EFE9E7
    }

`
export const ButtonFooterTwo = Button.extend`
    background-color:#D81E5B;
    color:#EFE9E7;
    border: 1px solid #EFE9E7;

    :hover{
        background-color:#EFE9E7;
        color:#D81E5B;
        border: none;
    }
`

export default { Button, ButtonDelete, ButtonEdit, ButtonLink, ButtonFooterOne, ButtonFooterTwo }