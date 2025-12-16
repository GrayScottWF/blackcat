import {
    // StyledBg,
    StyledContents,
    StyledFooterItems,
    StyledFooterItem,
    StyledFooterTitle,
    StyledFooterLinks,
    StyledFooterLink,
    StyledFooterContactLink,
    StyledCrArea,
    StyledCrs,
    StyledCr,
    StyledGuiN,
    StyledCrLinksArea,
    StyledCrLinks,
    StyledCrLink


} from './StyledFooter'

// import { Link } from 'react-router-dom'

function Footer() {
    return(
        <>
            {/* <StyledBg /> */}
            <StyledContents>
                <StyledFooterItems>
                    <StyledFooterItem>
                        <StyledFooterTitle>企業情報</StyledFooterTitle>
                        <StyledFooterLinks>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>認識黑貓</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>品牌展望</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>最新消息</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>黑貓NEWS</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>黑貓徵才</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>利害人關係專區</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>性騷擾防治資訊</StyledFooterContactLink>
                            </StyledFooterLink>
                        </StyledFooterLinks>
                    </StyledFooterItem>
                    <StyledFooterItem>
                        <StyledFooterTitle>客戶服務</StyledFooterTitle>
                        <StyledFooterLinks>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>常見問題</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>聯絡黑貓</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>電子發票</StyledFooterContactLink>
                            </StyledFooterLink>
                        </StyledFooterLinks>
                    </StyledFooterItem>
                    <StyledFooterItem>
                        <StyledFooterTitle>個人會員</StyledFooterTitle>
                        <StyledFooterLinks>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>會員登入</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>會員註冊</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>常用聯絡人</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>訂單管理</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>會員條款</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>隱私權聲明</StyledFooterContactLink>
                            </StyledFooterLink>
                        </StyledFooterLinks>
                    </StyledFooterItem>
                    <StyledFooterItem>
                        <StyledFooterTitle>社群平台</StyledFooterTitle>
                        <StyledFooterLinks>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>Facebook</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>YouTube</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>LINE</StyledFooterContactLink>
                            </StyledFooterLink>
                            <StyledFooterLink>
                                <StyledFooterContactLink to={"#!"}>Instagram</StyledFooterContactLink>
                            </StyledFooterLink>
                        </StyledFooterLinks>
                    </StyledFooterItem>
                </StyledFooterItems>
            </StyledContents>
            <StyledCrArea>
                <StyledCrs>
                    <StyledCr>統一速達股份有限公司 版權所有  COPYRIGHT © 2025 PRESIDENT TRANSNET CORP.</StyledCr>
                    <StyledGuiN>統一編號 : 70762591</StyledGuiN>
                </StyledCrs>
                <StyledCrLinksArea>
                    <StyledCrLinks>
                        <StyledCrLink to={"#!"}>網站地圖</StyledCrLink>
                    </StyledCrLinks>
                    <StyledCrLinks>
                        <StyledCrLink to={"#!"}>隱私權聲明</StyledCrLink>
                    </StyledCrLinks>
                    <StyledCrLinks>
                        <StyledCrLink to={"#!"}>託運條款</StyledCrLink>
                    </StyledCrLinks>
                    <StyledCrLinks>
                        <StyledCrLink to={"#!"}>日文網站</StyledCrLink>
                    </StyledCrLinks>
                </StyledCrLinksArea>
            </StyledCrArea>
        </>

    )
}

export default Footer