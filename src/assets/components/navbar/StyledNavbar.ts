import styled from 'styled-components'

export const StyledNavbarWrapper = styled.div`
    position: fixed;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .1);
    background: #fff;
    z-index: 99999;
`

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

export const StyledNavItems = styled.ul`
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
`

export const StyledNavItem = styled.li`
    height: 90px;
    align-items: center;
    text-align: center;
    display: flex;

    &:not(:first-child)::before{
        content: '';
        height: 22px;
        border-left: 2px solid #E7E7E7;
    }

    &:hover .DropDown{
        display: flex;
    }
`

export const StyledNavItemTitle = styled.span`
    position: relative;
    font-size: 20px;
    margin: 0 2.5vw;
    transition: all  0.2s;
    height: 90px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    cursor: pointer;

    &:hover .DropDown{
        display: flex;
    }


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
    background-color: #fff;

    cursor: pointer;

    &:after{
        content: '🔍';
    }
`

export const StyledDropDown = styled.div`
    display: none;
    max-height: 352px;
    width: 100%;
    background-color: rgba(240, 240, 240, 0.9);


    position: absolute;
    top: 90px;
    left: 0;
    justify-content: center;

`

export const StyledDropDownMenu = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 24px 0;

`

export const StyledDropDownMenuItem = styled.li`
    margin: 0 24px;

`

export const StyledMenuTitle = styled.div`

    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    text-align:left;
    white-space: nowrap;
`

export const StyledMenuItem1 = styled.ul`
    font-size: 16px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 352px;
    justify-content: left;
    height: 250px;
    text-align: left;
`
export const StyledMenuItem2 = styled.ul`
    font-size: 16px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 352px;
    justify-content: left;
    height: 130px;
    text-align: left;
`


export const StyledMenuLink = styled.li`
    font-weight: normal;
    font-size: 16px;
    margin-top: 16px;
    padding-right: 64px;
    transition: all 0.3s;
    
    &:hover{
        color: #009380;
    }
`


export const Styled = styled.div`

`

