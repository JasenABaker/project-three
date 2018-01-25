import styled from 'styled-components'



export const Splash = styled.div `
    height: 80vh;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;

    img{
        height: auto;
        width: auto;
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
        color:#DAD4D2;
    }

    p{
        color: #E4572E;
        font-size: 16px;
        width: 50%;
        background-color: rgba(41,47,54,.8);
        padding: 5px;
    }
`
export const WorldSplash = Splash.extend`
    height: 40vh;

        img{
            height: auto;
            width: auto;
            transform: translateY(-20em)
        }
        h2{
            align-self: center;
            position: absolute;
            z-index: 1;
            font-size: 2.5em;
            color: #EFE9E7;
        }
`

export default {Splash, ButtonText, WorldSplash}