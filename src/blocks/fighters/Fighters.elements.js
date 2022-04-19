import styled from "styled-components"
import backgroundOut from './backgroundOut.png'

export const Container = styled.div`
    width: 100%;
    background-color: #1B1432;
    overflow: hidden;
`
export const BackgroundImg = styled.div`
        background-image: url('${backgroundOut}');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 0 -200px;
        background-clip: text;
        @media screen and (max-width: 1024px){
            background-position: 0 350px; 
        }
`
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: auto;

`
export const WrapperFighters = styled.div`
    padding-top: 300px;
`
export const FighterBlockYang = styled.div`
    display: flex;
    justify-content:space-between ;
    margin-top: 80px;
    @media screen and (max-width: 1325px){
        padding: 0 20px;
    }
    @media screen and (max-width: 825px){
        padding: 0px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const FighterBlockLing = styled.div`
    display: flex;
    justify-content:space-between ;
    margin-top: 80px;
    flex-direction: row;
    @media screen and (max-width: 1325px){
        padding: 0 20px;
    }
    @media screen and (max-width: 825px){
        padding: 0px;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
`
export const FighterSupplyText = styled.h2`
    font-family: 'Press Start 2P';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    text-transform: uppercase;
    color: #FFF200;
    @media screen and (max-width: 1192px){
        font-size: 15px;
    }
    @media screen and (max-width: 825px){
        text-align: center;
        margin-bottom: 20px;
    }
`
export const FighterDiscriptionText = styled.div`
    margin-top: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    width: 750px;
    margin-bottom: 35px;
    color: #fff;
    text-align: left;
    width: 65.85%;
    @media screen and (max-width: 1192px){
        font-size: 15px;
    }
    @media screen and (max-width: 997px){
        width: 80%;
    }
    @media screen and (max-width: 825px){
        margin: 0 auto;
        text-align: center;
    }
`
export const FighterValue = styled.ul`
    @media screen and (max-width: 825px){
        margin: 20px auto;
    }
`
export const FighterValueLi = styled.li`
    font-family: 'VT323';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 130%;
    color: #FFFFFF;
    margin-bottom: 15px;


    @media screen and (max-width: 1325px){
        font-size: 20px;
        line-height: 100%;
    }
    @media screen and (max-width: 500px){
        padding: 0 20px;
        font-size: 17px;
    }
    
`
export const CoinImg = styled.img`
    width: 30px;
    margin-right: 15px;
    @media screen and (max-width: 1325px){
        width: 20px;
        margin-right: 10px;
    }
`
export const FighterImg = styled.img`
    width: auto;
    @media screen and (max-width: 1325px){
        width: 320px;
    }
    @media screen and (max-width: 900px){
        width: 250px;
    }
`
export const FighterBlockImgYang = styled.div`
    margin-right: 130px;
    @media screen and (max-width: 1325px){
        margin-right: 100px;
    }
    @media screen and (max-width: 900px){
        margin-right: 50px;
    }
    @media screen and (max-width: 825px){
        margin-right: 0px;
    }
`
export const FighterBlockImgLing = styled.div`
    margin-left: 130px;
    @media screen and (max-width: 1325px){
        margin-left: 100px;
    }
    @media screen and (max-width: 900px){
        margin-left: 50px;
    }
    @media screen and (max-width: 825px){
        margin-left: 0px;
    }
`
export const FighterBlockDiscription = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    @media screen and (max-width: 1325px){
        margin-top: 35px;
    }
    @media screen and (max-width: 825px){
        justify-content: center;
    }
`