import styled from 'styled-components'


export const InputStyle = styled.input`
    font-size: 34px;

    @media screen and (max-width: 800px){
        font-size: 24px;
    }
`

export const InputButton = styled.input`
        border: none;
        height: 50px;
        width: 200px;
        font-size: 24px;
        color:#EFE9E7;
        background: #2D93AD;
        cursor: pointer;
        transition:0.08s ease-in;

        :hover {
            color: #2D93AD;
            background: #DBD56E;
        

        }
`

export const InputButtonEdit = InputButton.extend`
        background: #46237A;

        :hover {
            color:#46237A;
            background:#3DDC97;
        }
`



export default { InputStyle, InputButton, InputButtonEdit }