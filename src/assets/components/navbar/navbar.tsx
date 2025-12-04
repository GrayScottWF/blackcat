
import { 
    StyledNavbar,
    StyledLogo,
    StyledItems,
    StyledItem,
    StyledItemGap,
    StyledSearch,
    StyledText,
    StyledSearchBtn,


} from "./StyledNavbar";

import { Link } from "react-router-dom";
function Navbar() {
    return(
        <StyledNavbar>
            <Link to={'/'}>
                <StyledLogo src="/src/assets/images/Logo.jpg" alt="404" />
            </Link>
            <StyledItems>
                <StyledItem>寄件</StyledItem>
                <StyledItemGap/>
                <StyledItem>查詢</StyledItem>
                <StyledItemGap/>
                <StyledItem>客戶服務</StyledItem>
                <StyledItemGap/>
                <StyledItem>個人會員</StyledItem>
                <StyledItemGap/>
                <StyledItem>契約客戶專區</StyledItem>
            </StyledItems>
            <StyledSearch>
                <StyledText type="text" placeholder="站內搜尋" />
                <StyledSearchBtn />
            </StyledSearch>
        </StyledNavbar>
    )

}
export default Navbar