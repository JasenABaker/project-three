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
height: 100%;
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
flex: 1 0 auto;
`
export const ContainerOneSmall = ContainerOne.extend`
    height: 100vh;
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


`
export const ContainerThree = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex: 1 0 auto;
`
export const ContainerOneColumn = ContainerOne.extend`
    flex-direction: column;
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

export const WorldCardBig = WorldCard.extend`
    height: 70vh;
    width: 35vw;
    margin-bottom: 30px;
    border: .5px soild #292F36;

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

export default { PageContainer, 
                ContainerOne, 
                ContainerTwo, 
                ContainerTwoSmall,
                ContainerOneColumn, 
                FormContainer, 
                FormEdit, 
                ContainerThree, 
                WorldCard, 
                PicHolder, 
                BottomCard, 
                WorldCardBig,
                PicHolderTwo,
                PicHolderThree,
                BottomBottomCard }