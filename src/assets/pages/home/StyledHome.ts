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

