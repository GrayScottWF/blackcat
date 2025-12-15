import { Container } from "react-bootstrap";
import { 
    StyledNavbarWrapper,
    StyledNavbar,
    StyledLogo,
    StyledNavItems,
    StyledNavItem,
    StyledSearch,
    StyledText,
    StyledSearchBtn,
    StyledDropDown,
    StyledDropDownMenu,
    StyledDropDownMenuItem,

    StyledMenuTitle,
    StyledMenuLink,
    StyledNavItemTitle,
    StyledMenuItem1,
    StyledMenuItem2

} from "./StyledNavbar";

import { Link } from "react-router-dom";
function Navbar() {
    return(
        <>
        <StyledNavbarWrapper>
        <StyledNavbar>
            <Link to={'/'}>
                <StyledLogo src="/src/assets/images/Logo.jpg" alt="404" />
            </Link>
            <StyledNavItems>
                <StyledNavItem>
                    <StyledNavItemTitle>寄件</StyledNavItemTitle>
                    <StyledDropDown className="DropDown">
                        <Container>
                            <StyledDropDownMenu>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>服務介紹</StyledMenuTitle>
                                    <StyledMenuItem1>
                                        <StyledMenuLink><Link to={"#!"}>常溫宅急便</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>低溫宅急便</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>經濟宅急便</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>到付宅急便</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>高爾夫宅急便</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>醫藥物流服務</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>宅轉店</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>快速到店</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>倉儲服務</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>黑貓探險隊</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>金流代收服務</Link></StyledMenuLink>
                                    </StyledMenuItem1>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>icat網路宅急便</StyledMenuTitle>
                                    <StyledMenuItem1>
                                        <StyledMenuLink><Link to={"#!"}>服務說明</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>單筆預約寄件</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>多筆預約寄件</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>icat app</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>訂單管理</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>配完通知&查詢</Link></StyledMenuLink>
                                    </StyledMenuItem1>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>寄件指南</StyledMenuTitle>
                                    <StyledMenuItem1>
                                        <StyledMenuLink><Link to={"#!"}>包裝建議</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>託運條款</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>不受理項目</Link></StyledMenuLink>
                                    </StyledMenuItem1>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>包裝資材</StyledMenuTitle>
                                    <StyledMenuItem1>
                                        <StyledMenuLink><Link to={"#!"}>包裝資材訂購</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>訂單管理</Link></StyledMenuLink>
                                    </StyledMenuItem1>
                                </StyledDropDownMenuItem>
                            </StyledDropDownMenu>
                        </Container>
                    </StyledDropDown>
                </StyledNavItem>
                                <StyledNavItem>
                    <StyledNavItemTitle>查詢</StyledNavItemTitle>
                    <StyledDropDown className="DropDown">
                        <Container>
                            <StyledDropDownMenu>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>包裹查詢</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink><Link to={"#!"}>包裹查詢說明</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>一般包裹查詢</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>連號包裹查詢</Link></StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>運送及送達時間查詢</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink><Link to={"#!"}>送達時間說明</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>運費說明</Link></StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>服務據點查詢</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink><Link to={"#!"}>黑貓寄取站查詢</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>合作代收查詢</Link></StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                                            </StyledDropDownMenu>
                        </Container>
                    </StyledDropDown>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledNavItemTitle>客戶服務</StyledNavItemTitle>
                    <StyledDropDown className="DropDown">
                        <Container>
                            <StyledDropDownMenu>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>常見問題</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink><Link to={"#!"}>常見問題</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>跨境包過消費爭議專區</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>ezcat下載</Link></StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>聯絡黑貓</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink><Link to={"#!"}>網路客服</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>智能客服</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>自助寄件專線</Link></StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>電子發票</StyledMenuTitle>
                                    <StyledMenuItem2>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                            </StyledDropDownMenu>
                        </Container>
                    </StyledDropDown>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledNavItemTitle>個人會員</StyledNavItemTitle>
                    <StyledDropDown className="DropDown">
                        <Container>
                            <StyledDropDownMenu>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>icat網路宅急便</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink><Link to={"#!"}>服務說明</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>單筆預約寄件</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>多筆預約寄件</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>會員登入</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>會員資料維護</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>訂單管理</Link></StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>LINE</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink><Link to={"#!"}>服務說明</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>加入好友</Link></StyledMenuLink>
                                        <StyledMenuLink><Link to={"#!"}>加入會員</Link></StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>綁定uniopen</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink><Link to={"#!"}>累積/折抵使用辦法</Link></StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>隱私權聲明</StyledMenuTitle>
                                    <StyledMenuItem2>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                            </StyledDropDownMenu>
                        </Container>
                    </StyledDropDown>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledNavItemTitle>契約客戶專區</StyledNavItemTitle>
                    <StyledDropDown className="DropDown">
                        <Container>
                            <StyledDropDownMenu>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>契約客戶專區</StyledMenuTitle>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>契約客戶洽談</StyledMenuTitle>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>包裹狀態查詢介紹</StyledMenuTitle>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>ezcat印單軟體下載</StyledMenuTitle>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>SmartCat app 智能宅急便</StyledMenuTitle>
                                </StyledDropDownMenuItem>
                            </StyledDropDownMenu>
                        </Container>
                    </StyledDropDown>
                </StyledNavItem>
            </StyledNavItems>
            <StyledSearch>
                <StyledText type="text" placeholder="站內搜尋" />
                <StyledSearchBtn />
            </StyledSearch>
        </StyledNavbar>
        <StyledDropDown>

        </StyledDropDown>
        </StyledNavbarWrapper>
        </>
    )

}
export default Navbar