import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    background-color: #041d2d;
    @media screen and (max-width: 482px){
           padding-top: 40px; 
        }
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: auto;
`
export const ImageStars = styled.img`
        @media screen and (max-width: 953px){
            width: 100px;
            height: 100px;  
        }
        @media screen and (max-width: 482px){
            width: 70px;
            height: 70px;  
        }
        @media screen and (max-width: 339px){
            width: 60px;
            height: 60px;  
        }
`

export const TitleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const LeftStars = styled.div`   
`
export const RightStars = styled.div`
`
export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`
export const Text = styled.p`
    color: #fff;
    font-size: 25px;
    text-align: center;
    width: 65.85%;
    @media screen and (max-width: 997px){
            width: 80%;
        }
    @media screen and (max-width: 634px){
        width: 90%;
        font-size: 20px;
    }
    @media screen and (max-width: 400px){
        width: 90%;
        font-size: 18px;
    }
`
export const Background = styled.div`
    margin-top: -10%;
`
export const Fighter = styled.div`
    margin-top: -500px;
`