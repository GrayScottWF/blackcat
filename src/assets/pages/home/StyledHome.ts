import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHome = styled.div`
    min-height: calc(100vh - 90px);
    z-index: 500;
    display: block;
    padding-top: 90px;
`

export const StyledIndexMsgArea = styled.div`
    height: 65px;
    width: 100%;
    background-color: #1fa08e;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    /* margin: 0 auto; */
`

export const StyledIndexMsgBox = styled.div`
    margin: 0 auto;
    position: relative;
    display:flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    width: 100%;
    font-size: 18px;
    line-height: 1.5;
`

export const StyledIndexMsgs = styled.ul`
    

`

export const StyledIndexMsg = styled.li`
    display: block;
    
    cursor: pointer;
    &::before{
        content: '⚠️';
        color: #fccf00;
        margin: 0 5px 0 -22px;
    }
`

export const StyledMsgClose = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    transition: all 0.5s;

    cursor: pointer;

    &:hover{
        transform: rotate(180deg);
    }
`

export const StyledMoreMsg = styled.div`
    display: block;

    color: #fccf00;
    position: absolute;
    right: 0;
    bottom: 0;

    cursor: pointer;
`
export const StyledSliderBg = styled.div`
    width: 100%;
    height: 668px;
    position: absolute;
    top: -90px;
    /* top: -50px; */
    overflow: hidden;
    display: block;
    &::before{
        content: '';
        width: 2500px;
        height: 628px;
        border-radius: 50% / 50%;
        background: #F0F0F0;
        position: absolute;
        left: 50%;
        top: 0px;
        transform: translate(-50%, 0);
        z-index: -1;

    }
`



export const StyledSlider = styled.div`
    padding: 100px 0 80px 0;
`

export const StyledServiceArea = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 40px;
`

export const StyledServiceItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;


`

export const StyledServiceItem = styled.li`

    text-align:center;
    font-size: 24px;
    transition: all 0.3s;

    cursor: pointer;
    
    img{
        transition: all 0.3s;

    }
    &:hover {
        text-decoration: underline;
        img{
            transform: translateY(-30px);
        }
    }
`

export const StyledServiceImg = styled.div`


`

export const StyledSearchArea = styled.div`
    height: 110px;
    width: 100%;
    position: relative;
    z-index: 10;
`

export const StyledSearchBg = styled.div`
    background-color: #fccf00;
    width: 90%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;

    &::after{
        content: '';
        background-color: #fccf00;
        width: 110px;
        height: 100%;
        position: absolute;
        right: -55px;
        border-radius: 50%;
    }

`
export const StyledSearchBar = styled.div`
    max-width: 1100px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;

`

export const StyledSearchTitle = styled.div`
    color: #000;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    margin-right: 90px;
    /* z-index: 50; */

    &::before{
        content: '⦿';
        color: #1FA08E;
    }


`

export const StyledSearchInputBar = styled.div`
    height: 50px;
    width: 500px;
    position: relative;

`


export const StyledSearchInput = styled.input`
    height: 50px;
    width: 500px;
    padding: 5px 20px;
    border-radius: 22px;
    outline: none;
    border: none;
    font-size: 24px;
    line-height: 1.5;

`

export const StyledSearchbtn = styled.div`
    width: 50px;
    height: 50px;
    font-size: 24px;
    line-height: 50px;
    text-align: center;
    margin: auto auto;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    cursor: pointer;

`

export const StyledLineArea = styled.div`

    padding: 100px 0 60px 0 ;
    width: 100%;
    background-color: #E2F2F1;
    margin-top: -55px;
    text-align: center;
`

export const StyledLineContent = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

export const StyledLineTitle = styled.div`
    display: inline-block;
    font-size: 28px;
    line-height: 1.5;
    position: relative;
    z-index: 1;
    margin-bottom: 20px;

    &::after{
        content: '';
        width: 100%;
        height: 6px;
        background-color: rgba(252, 207, 0, 0.9);
        position: absolute;
        bottom: 8px;
        left: 0;
        z-index: -1;
    }
`
export const StyledLineParas = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const StyledLinePara = styled.li`
    width: 25%;
`

export const StyledLineJoinBtn = styled.div`
    transition: all 0.3s;
    
    
    cursor: pointer;
    
    &:hover{
        transform: scale(1.1);
    }
`


export const StyledLineServiceBtn = styled.div`
    color: #fff;
    background-color: #555;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 600;
    width: 100%;
    height: 32px;
    border-radius: 16px;
    transition: all 0.3s;
    margin-top: 16px;

    cursor: pointer;
    user-select: none;

    &:hover{
        transform: scale(1.1);
    }

`

export const StyledFoodArea = styled.div`
    width: 100%;
    background-color: #FFFCE2;

`

export const StyledFood = styled.div`
    max-width: 1100px;
    width: 100%;
    height: 100%;
    margin: 0 auto;

`

// Txt News

export const StyledTxtNewsArea = styled.div`
    width: 100%;
    padding-top: 30px;
    text-align: center;
    background-color: #ddd;
    padding-bottom: 20px;
`

export const StyledTxtNews = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;

`

export const StyledTxtNewsTitle = styled.div`
    display: inline-block;
    font-size: 28px;
    line-height: 1.5;
    position: relative;
    z-index: 1;
    margin-bottom: 30px;

    &::after{
        content: '';
        width: 100%;
        height: 6px;
        background-color: rgba(252, 207, 0, 0.9);
        position: absolute;
        bottom: 8px;
        left: 0;
        z-index: -1;
    }

`

export const StyledTxtNewsItems = styled.ul`
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;
`

export const StyledTxtNewsItem = styled.li`
    display: flex;
    justify-content: left;
    align-items: left;
    
    &:last-child{
        margin-bottom: 40px;
    }

`

export const StyledTxtNewsKind = styled.div`
    width: 160px;
    height: 50px;
    background-color: #fccf00;
    font-size: 24px;
    line-height: 50px;
    margin: 0 50px 16px 0;
    border-radius: 8px;
    display: inline-block;

`

export const StyledTxtNewsTime = styled.div`
    display: inline-block;
    width: 120px;
    height: 50px;
    font-size: 24px;
    line-height: 50px;
    margin-right: 50px;

`

export const StyledTxtNewsPara = styled.div`
    display: inline-block;
    height: 50px;
    font-size: 24px;
    line-height: 50px;
    margin-right: 50px;

    cursor: pointer;

    &:hover{
        text-decoration: underline 2px solid #000;
    }
    

`

export const StyledTxtMoreNews = styled.div`
    display: block;
    text-align: center;
    width: 100%;
    height: 50px;
    font-size: 24px;
    position: relative;
`

export const StyledTxtMoreNewsBtn = styled(Link)`
    display: inline-block;
    height: 50px;
    width: 80px;

    &:after{
        content: '﹀';
        font-size: 18px;
        color: #000;
        background-color: #fccf00;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
        transition: all 0.3s;

    }

    &:hover::after{
        color: #fff;
        transform: translate(-50%, 3px);
        background-color: #1fa08e;
    }
`


// Img News

export const StyledImgNewsArea = styled.div`
    width: 100%;
    padding-top: 30px;
    text-align: center;
    background-color: #fff;
    padding-bottom: 20px;

`
export const StyledImgNews = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;

`

export const StyledImgNewsTitle = styled.div`
    display: inline-block;
    font-size: 28px;
    line-height: 1.5;
    position: relative;
    z-index: 1;
    margin-bottom: 30px;

    &::after{
        content: '';
        width: 100%;
        height: 6px;
        background-color: rgba(252, 207, 0, 0.9);
        position: absolute;
        bottom: 8px;
        left: 0;
        z-index: -1;
    }

`

export const StyledImgNewsItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledImgNewsItem = styled.li`
    width: 30vw;
    max-width: 340px;
    height: 500px;
    background-color: #fff;
    box-shadow: 0 3px 30px rgba(0, 0, 0, 0.3);
    margin-bottom: 30px;

    cursor: pointer;
    transition: all 0.3s;

    &:hover{
        background-color: #ddd;
        box-shadow: none;
    }

`

export const StyledImgNewsItemImgBox = styled.div`
    width: 30vw;
    max-width: 340px;

`

export const StyledImgNewsItemImg = styled.img`
    height: 100%;
    width: 100%;

`

export const StyledImgNewsItemTitle = styled.div`
    margin: 20px 15px;
    font-size: 24px;
    line-height: 1.5;

`

export const StyledImgNewsPara = styled.div`
    text-align: left;
    margin: 0 10px;
    font-size: 20px;
    line-height: 1.5;
    color: #777;
    font-weight: 400;

`

export const StyledImgMoreNews = styled.div`
    display: block;
    text-align: center;
    width: 100%;
    height: 50px;
    font-size: 24px;
    position: relative;
`

export const StyledImgMoreNewsBtn = styled(Link)`
    display: inline-block;
    height: 50px;
    width: 80px;

    &:after{
        content: '﹀';
        font-size: 18px;
        color: #000;
        background-color: #fccf00;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
        transition: all 0.3s;

    }

    &:hover::after{
        color: #fff;
        transform: translate(-50%, 3px);
        background-color: #1fa08e;
    }
`


export const StyledSocialArea = styled.div`
    width: 100%;
    padding-top: 30px;
    text-align: center;
    /* background-color: #fff; */
    padding-bottom: 20px;

`

export const StyledSocial = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
`

export const StyledSocialItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const StyledSocialItem = styled.li`
    width: 50%;
    position: relative;
`

export const StyledSocialItemTitle = styled.div`
    display: inline-block;
    font-size: 28px;
    line-height: 1.5;
    position: relative;
    z-index: 1;
    margin-bottom: 30px;

    &::after{
        content: '';
        width: 100%;
        height: 6px;
        background-color: rgba(252, 207, 0, 0.9);
        position: absolute;
        bottom: 8px;
        left: 0;
        z-index: -1;
    }

`

export const StyledSocialItemBox = styled.div`
    width: 80%;
    margin: 0 auto;
    border: 12px solid #333;
    border-radius: 8px;
    height: 300px;

`

export const Styled = styled.div`
    

`




