import styled from 'styled-components'



export const Splash = styled.div `
    height: 80vh;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;

    img{
        height: 100%;
        width: 100%;
        position: absolute;
    }
    
`
export const ButtonText = styled.div`
    position: absolute;
    z-index: 1;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 100vw;

    h2{
        color:#EFE9E7;
    }

    p{
        color: #E4572E;
        font-size: 16px;
        width: 50%;
        border: 1px solid #EFE9E7; 
        background-color: rgba(41,47,54,.8);
        padding: 5px;
    }
`

export default {Splash, ButtonText}