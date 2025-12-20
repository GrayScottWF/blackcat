import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const StyledFooter = styled.div`
    position: relative;
    display: block;
    width: 100vw;
    height: 100%;

`

export const StyledBg = styled.div`
    height: 200px;
    margin: -150px 0 0 0;

    &::before{
        content: '';
        width: 3000px;
        height: 350px;
        border-radius: 50% / 50%;
        background: #727272;
        position: absolute;
        left: 50%;
        top: 0px;
        transform: translate(-50%, 0);
        z-index: -1;
    }
`

export const StyledContents = styled.div`
    padding-bottom: 30px;
    background-color: #727272;
`

export const StyledFooterItems = styled.ul`
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
`

export const StyledFooterItem = styled.li`
    min-width: 190px;
    margin: 0 3%;
`

export const StyledFooterTitle = styled.div`
    /* width: 100%; */
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    color: #fff;
    padding: 4px 0;
    margin-bottom: 24px;
    border-bottom: 1px solid #fff;
`

export const StyledFooterLinks = styled.ul`
    display: flex;
    flex-direction: column;
    
`

export const StyledFooterLink = styled.li`
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 12px;

`

export const StyledFooterContactLink = styled(Link)`
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 12px;
`

export const StyledCrArea = styled.div`
    height: 90px;
    padding: 20px 2vw;
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
    display: flex;
    justify-content: space-between;

`

export const StyledCrs = styled.div`

`

export const StyledCr = styled.div`
    
`

export const StyledGuiN = styled.div`

`

export const StyledCrLinksArea = styled.ul`
    display: flex;
    justify-content: center;
`

export const StyledCrLinks = styled.li`
    padding-right: 8px;
    display: flex;
    align-items: center;
    &:not(:first-child)::before{
        content: '';
        margin-top: -2px;
        margin-right: 8px;
        display: inline-block;
        width: 1px;
        height: 18px;
        background-color: #000;
    }
`

export const StyledCrLink = styled(Link)`

`

