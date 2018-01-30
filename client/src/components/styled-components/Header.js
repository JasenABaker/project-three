
import styled from 'styled-components'


export const Header = styled.header `
    height: 15vh;
    width: 100vw;
    background-color: #292F36;
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid #3DDC97;
    h1{
        margin: 10px 0px 10px 20px;
        font-family: 'Risque', cursive;
        font-size: 5em;
        color: #EFE9E7;
    }
    nav{
        margin-right: 20px;
        align-self: flex-end;
        height: 40%;
        width: 30%;

    }
    ul{
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        color:#EFE9E7;
        font-size: 24px;
    }

    @media screen and (max-width: 800px){
        h1{
            font-size: 3em;
        }
        nav{
            margin-right: auto;
            width: 50%;
        }

    }
    
`



export default Header