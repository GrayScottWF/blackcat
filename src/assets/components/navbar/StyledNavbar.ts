import styled from 'styled-components'

export const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    height: 90px;
`

export const StyledLogo = styled.img`
    width: 200px;
    cursor: pointer;
`

export const StyledItems = styled.ul`
    display: flex;
    justify-content: space-around;
    text-align: center;
    width: 50%;
`

export const StyledItemGap = styled.div`
    width: 2px;
    height: 22px;
    background-color: #ccc;
    
`

export const StyledItem = styled.li`
    font-size: 20px;
    margin: 0 2.5vh;


    cursor: pointer;

    &:after{
        content: '';
        display: block;
        position: absolute;
        bottom: -8px;
        left: 0;
        height: 3px;
        width: 0;
        background-color: #f6c900;
        transition: all 0.2s;

    }

    &:hover::after{
        width: 100%;
    }
`

export const StyledSearch = styled.div`
    width: 200px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 23px;
    overflow: hidden;
`

export const StyledText = styled.input`
    width: calc(100% - 45px);
    height: 45px;
    padding-left: 20px;
    padding-right: 10px;
    color: black;
    border-style: none;
    outline: none;
`

export const StyledSearchBtn = styled.button`
    height: 45px;
    width: 45px;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;

    &:after{
        content: '🔍';
    }
`

export const StyledDropDown = styled.div`

`

export const StyledLink = styled.div`

`

export const Styleds = styled.div`

`

export const Styled = styled.div`

`

