import styled from 'styled-components'


export const PageContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

    h2{
        align-self: center;
    }

`
export const ContainerOne = styled.div`
margin-top: 30px;
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
flex: 1 0 auto;

@media screen and (max-width: 800px){
    flex-direction: column;
}

`
export const ContainerOneSimple = ContainerOne.extend`
    margin-top: 10px;
    justify-content: center;
    margin-bottom: 20px;

    @media screen and (max-width: 800px){
        flex-driection: column;
    }
`
export const ContainerTwo = styled.div`
    height: 75vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    h2{
        align-self: center;
    }
`
export const ContainerTwoSmall = ContainerTwo.extend`
    margin-top: 20px;
    height: 10vh;
    width: 20vw;
    align-self: center;
    text-align: center;
    font-size: 14px;

    @media screen and (max-width: 800px){
    flex-direction: row;
    width: 100vw;
        }


`
export const ContainerThree = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex: 1 0 auto;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`
export const ContainerThreeColumn = ContainerThree.extend`
        flex-direction: column;
        margin-bottom: 20px;

        p{
            width: 50%;
        }
        @media screen and (max-width: 800px) {
            p{
                font-size: .9em;
                width: 100%;
            }
        }
`
export const ContainerOneColumn = ContainerOne.extend`
    flex-direction: column;
    @media screen and (max-width: 800px){
        h1{
            font-size: .99em;
        }   
    }
`
export const FormContainer = styled.div`
    height: 70vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #86CB92;
    border: 2px solid #292F36;

    @media screen and (max-width: 800px){
    width: 90vw;   
    }
`

export const FormEdit = FormContainer.extend`
    background-color:#256EFF;
`

export const WorldCard = styled.div`
height: 80vh;
width: 20vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 2px solid #292F36;

@media screen and (max-width: 800px) {
    height: 30vh;
    width: 90vw;
    flex-direction: row;
    margin-bottom: 10px;
}
`
export const WorldCardBig = WorldCard.extend`
    height: 80vh;
    width: 35vw;
    margin-bottom: 30px;
    border: .5px soild #292F36;

    @media screen and (max-width: 800px) {
        height: 80vh;
    }

`
export const LocationCard = WorldCard.extend`
        height: 20vh;
        width: 80vw;
        flex-direction: row;
        justify-content: none;
        border-top: .5px solid #9DA0A3;
        border-bottom: .5px solid #9DA0A3;
        border-right: none;
        border-left: none;

        @media screen and (max-width: 800px) {
            height: 18vh;

            
        }
`

export const PicHolder = styled.div`
    height: 45%;
    width: 90%;
    border: 1px solid black;
    overflow: hidden;
    background-color: black;
    
    img {
        height: 100%;
        width: auto;
    }
    @media screen and (max-width: 800px) {
        display: none;
    }
`
export const PicHolderTwo = PicHolder.extend`
    margin-top: 10px;
    width: 60%;
    border: none;
`
export const PicHolderThree = PicHolder.extend`
        height: 80%;
        width: 20%;
`

export const PicHolderFour = PicHolder.extend`
    height: 80%;
    width: 15%;
    border: none;
`
export const BottomCard = styled.div`
    height: 45%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-family: 'Playfair Display', serif;
        font-style: italic;
    }
    h3 {
        font-size: .9em;
    }
    span{
        color: #D81E5B;
    }

    p{
        font-size: .7em;
        width: 90%;
    }
    @media screen and (max-width: 800px) {
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;

        h2{
            font-size: 2em;
        }
        p {
            font-size: .9em;
        }
    }
`
export const MiddleCard = BottomCard.extend`
    height: 50%;
    width: 70%;
    align-items: flex-start;
    justify-content: none;

    h3{
        font-size: 1.5em;
        font-family: 'Playfair Display', serif;
        font-weight: 900;
        margin-bottom: 0;
        margin-top: 0;
    }
    p{
        margin-top: 0;
        font-size: 1em;
    }
    h4{
        margin-bottom:0;
        font-size: .9em;
        color:#9DA0A3;
        font-weight: none;
    }
    @media screen and (max-width: 800px){
        h4{
            font-size: .8em;
        }
        h3{
            font-size: 1.3em;
        }
        p{
            font-size: .9em;
        }

    }
`
export const BottomBottomCard = BottomCard.extend`
    height: 40%;
    width: 90%;
    border: 1px solid black;

    span {
        color:#FF6B6B;
        font-size: 14px;
    }
    p{
        align-self: center;
    }
`


export default { PageContainer, 
                ContainerOne, 
                ContainerOneSimple,
                ContainerTwo, 
                ContainerTwoSmall,
                ContainerOneColumn, 
                FormContainer, 
                FormEdit, 
                ContainerThree, 
                ContainerThreeColumn,
                WorldCard, 
                LocationCard,
                PicHolder, 
                BottomCard,
                MiddleCard, 
                WorldCardBig,
                PicHolderTwo,
                PicHolderThree,
                PicHolderFour,
                BottomBottomCard }