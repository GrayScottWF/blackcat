
import { Container } from "react-bootstrap";
import { 
    StyledNavbar,
    StyledLogo,
    StyledNavItems,
    StyledNavItem,
    StyledNavItemsGap,
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
                                        <StyledMenuLink>常溫宅急便</StyledMenuLink>
                                        <StyledMenuLink>低溫宅急便</StyledMenuLink>
                                        <StyledMenuLink>經濟宅急便</StyledMenuLink>
                                        <StyledMenuLink>到付宅急便</StyledMenuLink>
                                        <StyledMenuLink>高爾夫宅急便</StyledMenuLink>
                                        <StyledMenuLink>醫藥物流服務</StyledMenuLink>
                                        <StyledMenuLink>宅轉店</StyledMenuLink>
                                        <StyledMenuLink>快速到店</StyledMenuLink>
                                        <StyledMenuLink>倉儲服務</StyledMenuLink>
                                        <StyledMenuLink>黑貓探險隊</StyledMenuLink>
                                        <StyledMenuLink>金流代收服務</StyledMenuLink>
                                    </StyledMenuItem1>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>icat網路宅急便</StyledMenuTitle>
                                    <StyledMenuItem1>
                                        <StyledMenuLink>服務說明</StyledMenuLink>
                                        <StyledMenuLink>單筆預約寄件</StyledMenuLink>
                                        <StyledMenuLink>多筆預約寄件</StyledMenuLink>
                                        <StyledMenuLink>icat app</StyledMenuLink>
                                        <StyledMenuLink>訂單管理</StyledMenuLink>
                                        <StyledMenuLink>配完通知&查詢</StyledMenuLink>
                                    </StyledMenuItem1>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>寄件指南</StyledMenuTitle>
                                    <StyledMenuItem1>
                                        <StyledMenuLink>包裝建議</StyledMenuLink>
                                        <StyledMenuLink>託運條款</StyledMenuLink>
                                        <StyledMenuLink>不受理項目</StyledMenuLink>
                                    </StyledMenuItem1>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>包裝資材</StyledMenuTitle>
                                    <StyledMenuItem1>
                                        <StyledMenuLink>包裝資材訂購</StyledMenuLink>
                                        <StyledMenuLink>訂單管理</StyledMenuLink>
                                    </StyledMenuItem1>
                                </StyledDropDownMenuItem>
                            </StyledDropDownMenu>
                        </Container>
                    </StyledDropDown>
                </StyledNavItem>
                <StyledNavItemsGap/>
                <StyledNavItem>
                    <StyledNavItemTitle>查詢</StyledNavItemTitle>
                    <StyledDropDown className="DropDown">
                        <Container>
                            <StyledDropDownMenu>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>包裹查詢</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink>包裹查詢說明</StyledMenuLink>
                                        <StyledMenuLink>一般包裹查詢</StyledMenuLink>
                                        <StyledMenuLink>連號包裹查詢</StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>運送及送達時間查詢</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink>送達時間說明</StyledMenuLink>
                                        <StyledMenuLink>運費說明</StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>服務據點查詢</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink>黑貓寄取站查詢</StyledMenuLink>
                                        <StyledMenuLink>合作代收查詢</StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                                            </StyledDropDownMenu>
                        </Container>
                    </StyledDropDown>
                </StyledNavItem>
                <StyledNavItemsGap/>
                <StyledNavItem>
                    <StyledNavItemTitle>客戶服務</StyledNavItemTitle>
                    <StyledDropDown className="DropDown">
                        <Container>
                            <StyledDropDownMenu>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>常見問題</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink>常見問題</StyledMenuLink>
                                        <StyledMenuLink>跨境包過消費爭議專區</StyledMenuLink>
                                        <StyledMenuLink>ezcat下載</StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>聯絡黑貓</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink>網路客服</StyledMenuLink>
                                        <StyledMenuLink>智能客服</StyledMenuLink>
                                        <StyledMenuLink>自助寄件專線</StyledMenuLink>
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
                <StyledNavItemsGap/>
                <StyledNavItem>
                    <StyledNavItemTitle>個人會員</StyledNavItemTitle>
                    <StyledDropDown className="DropDown">
                        <Container>
                            <StyledDropDownMenu>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>icat網路宅急便</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink>服務說明</StyledMenuLink>
                                        <StyledMenuLink>單筆預約寄件</StyledMenuLink>
                                        <StyledMenuLink>多筆預約寄件</StyledMenuLink>
                                        <StyledMenuLink>會員登入</StyledMenuLink>
                                        <StyledMenuLink>會員資料維護</StyledMenuLink>
                                        <StyledMenuLink>訂單管理</StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>LINE</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink>服務說明</StyledMenuLink>
                                        <StyledMenuLink>加入好友</StyledMenuLink>
                                        <StyledMenuLink>加入會員</StyledMenuLink>
                                    </StyledMenuItem2>
                                </StyledDropDownMenuItem>
                                <StyledDropDownMenuItem>
                                    <StyledMenuTitle>綁定uniopen</StyledMenuTitle>
                                    <StyledMenuItem2>
                                        <StyledMenuLink>累積/折抵使用辦法</StyledMenuLink>
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
                <StyledNavItemsGap/>
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
        </>
    )

}
export default Navbar