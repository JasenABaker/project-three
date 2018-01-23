import styled from 'styled-components'



const Splash = styled.div `
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
    a {
        height: 50px;
        width: 250px;
        background-color: #256EFF;
        position: absolute;
        z-index: 1;
        align-self: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: 700;
        color: #EFE9E7;
        


    }
    
`


export default Splash