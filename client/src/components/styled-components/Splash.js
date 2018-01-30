import styled from 'styled-components'
import { Header } from './Header';



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

    @media screen and (max-width: 800px){
        h2{
            font-size: .8em;
            color: #71B48D;
        }
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
    @media screen and (max-width: 800px){
        h2{
            text-align: center;
            font-size: .7em;
            color: #292F36;
        }
        p{
            width: 90%;
        }
    }
`
export const WorldSplash = Splash.extend`
    height: 40vh;
    background:#292F36;

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
        @media screen and (max-width: 800px){
            h2{
                font-size: 2em;
            }
            }
`
export const HeaderTwo = styled.header `
    height: 15vh;
    width: 100vw;
    background-color: #292F36;
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid #D81E5B;
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
    
`

export const HeaderThree = HeaderTwo.extend`
    border-bottom: 4px solid #DBD56E;
`

export const NovelSplash = WorldSplash.extend`
    img{
        transform: translateY(0)
    }

`

export default {Splash, 
                ButtonText, 
                WorldSplash, 
                HeaderTwo, 
                HeaderThree,
                NovelSplash}