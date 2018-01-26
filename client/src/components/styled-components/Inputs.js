import styled from 'styled-components'


export const InputStyle = styled.input`
    font-size: 34px;
`

export const InputButton = styled.input`
        border: none;
        height: 50px;
        width: 200px;
        font-size: 24px;
        color:#EFE9E7;
        background-color: #2D93AD;

        &:hover {
            background-color: #DBD56E;
            color:#2D93AD;
        }
`



export default { InputStyle, InputButton }