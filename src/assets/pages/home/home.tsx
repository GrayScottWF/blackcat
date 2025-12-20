import React, { useState } from "react";
import SimpleSlider from "./slick";
import svc1 from '/public/image/service/service1.png'
import svc2 from '/public/image/service/service2.png'
import svc3 from '/public/image/service/service3.png'
import svc4 from '/public/image/service/service4.png'

import {
    StyledHome,
    StyledSliderBg,
    StyledIndexMsgArea,
    StyledIndexMsgBox,
    StyledIndexMsgs,
    StyledIndexMsg,
    StyledMsgClose,
    StyledMoreMsg,
    StyledSlider,
    StyledServiceArea,
    StyledServiceItems,
    StyledServiceItem,
    StyledServiceImg,
    StyledSearchArea,
    StyledSearchBg,
    StyledSearchBar,
    StyledSearchTitle,
    StyledSearchInputBar,
    StyledSearchInput,
    StyledSearchbtn,
    StyledLineArea,
    StyledLineContent,
    StyledLineTitle,
    StyledLineJoinBtn,
    StyledLineParas,
    StyledLinePara,
    StyledLineServiceBtn,
    StyledFoodArea,
    StyledFood,
    StyledTxtNewsArea,
    StyledTxtNews,
    StyledTxtNewsTitle,
    StyledTxtNewsItems,
    StyledTxtNewsItem,
    StyledTxtNewsKind,
    StyledTxtNewsTime,
    StyledTxtNewsPara,
    StyledTxtMoreNews,
    StyledTxtMoreNewsBtn,
    StyledImgNewsArea,
    StyledImgNews,
    StyledImgNewsTitle,
    StyledImgNewsItems,
    StyledImgNewsItem,
    StyledImgNewsItemImgBox,
    StyledImgNewsItemImg,
    StyledImgNewsItemTitle,
    StyledImgNewsPara,
    StyledImgMoreNews,
    StyledImgMoreNewsBtn,
    StyledSocialArea,
    StyledSocial,
    StyledSocialItems,
    StyledSocialItem,
    StyledSocialItemTitle,
    StyledSocialItemBox,



} from './StyledHome'


function Home() {
    const [msgClose, setMsgClose] = useState(false)

    return(
        <>
        <StyledHome>
            <StyledSliderBg />

            {/* Msg */}
            <StyledIndexMsgArea  style={{display: msgClose ? "none": "block"}}>
                <StyledIndexMsgBox>
                    <StyledIndexMsgs>
                        <StyledIndexMsg>黑貓宅急便反詐騙公告</StyledIndexMsg>
                        <StyledIndexMsg>當日宅急便服務調整公告</StyledIndexMsg>
                    </StyledIndexMsgs>
                    <StyledMsgClose onClick={() =>setMsgClose(true)}>✕</StyledMsgClose>
                    <StyledMoreMsg>更多公告▸</StyledMoreMsg>
                </StyledIndexMsgBox>
            </StyledIndexMsgArea>


            {/* Slider */}
            <StyledSlider>
                <SimpleSlider />
            </StyledSlider>

            {/* Service */}
            <StyledServiceArea>
                <StyledServiceItems>
                    <StyledServiceItem>
                        <StyledServiceImg>
                            <img src={svc1} alt="" />
                        </StyledServiceImg>
                        我要寄件
                    </StyledServiceItem>
                    <StyledServiceItem>
                        <StyledServiceImg>
                            <img src={svc2} alt="" />
                        </StyledServiceImg>
                        多元服務
                    </StyledServiceItem>
                    <StyledServiceItem>
                        <StyledServiceImg>
                            <img src={svc3} alt="" />
                        </StyledServiceImg>
                        我要購物
                    </StyledServiceItem>
                    <StyledServiceItem>
                        <StyledServiceImg>
                            <img src={svc4} alt="" />
                        </StyledServiceImg>
                        我要簽約
                    </StyledServiceItem>
                </StyledServiceItems>
            </StyledServiceArea>

            {/* Search */}
            <StyledSearchArea>
                <StyledSearchBg />
                <StyledSearchBar>
                    <StyledSearchTitle>一般包裹查詢</StyledSearchTitle>
                    <StyledSearchInputBar>
                        <StyledSearchInput type="text"/>
                        <StyledSearchbtn>🔍</StyledSearchbtn>
                    </StyledSearchInputBar>
                </StyledSearchBar>
            </StyledSearchArea>

            {/* Line */}
            <StyledLineArea>
                <StyledLineContent>
                    <StyledLineTitle>黑貓升級LINE新服務</StyledLineTitle>
                    <StyledLineParas>
                        <StyledLinePara>
                            <StyledLineJoinBtn>
                                <img src="/public/image/service/Line1.png" alt="" />
                            </StyledLineJoinBtn>
                            <StyledLineServiceBtn>LINE服務說明 ▸</StyledLineServiceBtn>
                        </StyledLinePara>
                        <StyledLinePara>
                            <img src="/public/image/service/Line2.png" alt="" />
                        </StyledLinePara>
                        <StyledLinePara>
                            <img src="/public/image/service/Line3.png" alt="" />
                        </StyledLinePara>
                        <StyledLinePara>
                            <img src="/public/image/service/Line4.png" alt="" />
                        </StyledLinePara>
                    </StyledLineParas>
                </StyledLineContent>
            </StyledLineArea>

            {/* Food */}
            <StyledFoodArea>
                <StyledFood>
                    <img src="/public/image/service/food.png" alt="" />
                </StyledFood>
            </StyledFoodArea>

            {/* txt news */}
            <StyledTxtNewsArea>
                <StyledTxtNews>
                    <StyledTxtNewsTitle>最新消息</StyledTxtNewsTitle>
                    <StyledTxtNewsItems>
                        <StyledTxtNewsItem>
                            <StyledTxtNewsKind>公告</StyledTxtNewsKind>
                            <StyledTxtNewsTime>2025/07/01</StyledTxtNewsTime>
                            <StyledTxtNewsPara>uniopen會員上線通知</StyledTxtNewsPara>
                        </StyledTxtNewsItem>
                        <StyledTxtNewsItem>
                            <StyledTxtNewsKind>公告</StyledTxtNewsKind>
                            <StyledTxtNewsTime>2023/05/16</StyledTxtNewsTime>
                            <StyledTxtNewsPara>黑貓宅急便反詐騙公告</StyledTxtNewsPara>
                        </StyledTxtNewsItem>
                        <StyledTxtNewsItem>
                            <StyledTxtNewsKind>公告</StyledTxtNewsKind>
                            <StyledTxtNewsTime>2025/11/10</StyledTxtNewsTime>
                            <StyledTxtNewsPara>鳳凰颱風服務調整公告</StyledTxtNewsPara>
                        </StyledTxtNewsItem>
                        <StyledTxtNewsItem>
                            <StyledTxtNewsKind>公告</StyledTxtNewsKind>
                            <StyledTxtNewsTime>2025/10/23</StyledTxtNewsTime>
                            <StyledTxtNewsPara>雙11繁盛期服務調整公告</StyledTxtNewsPara>
                        </StyledTxtNewsItem>
                    </StyledTxtNewsItems>
                    <StyledTxtMoreNews>
                        <StyledTxtMoreNewsBtn to={"#!"}>more</StyledTxtMoreNewsBtn>
                    </StyledTxtMoreNews>
                </StyledTxtNews>
            </StyledTxtNewsArea>

            {/* img news */}
            <StyledImgNewsArea>
                <StyledImgNews>
                    <StyledImgNewsTitle>黑貓 NEWS</StyledImgNewsTitle>
                    <StyledImgNewsItems>
                        <StyledImgNewsItem>
                            <StyledImgNewsItemImgBox>
                                <StyledImgNewsItemImg src="/public/image/service/Anti-fraud.jfif" alt="" />
                            </StyledImgNewsItemImgBox>
                            <StyledImgNewsItemTitle>黑貓宅急便反詐騙公告</StyledImgNewsItemTitle>
                            <StyledImgNewsPara>近期有不肖人士以以下等名目假冒本公司名義進行...</StyledImgNewsPara>
                        </StyledImgNewsItem>
                        <StyledImgNewsItem>
                            <StyledImgNewsItemImgBox>
                                <StyledImgNewsItemImg src="/public/image/service/Anti-fraud.jfif" alt="" />
                            </StyledImgNewsItemImgBox>
                            <StyledImgNewsItemTitle>多筆預約預約流程</StyledImgNewsItemTitle>
                            <StyledImgNewsPara>節令大量寄件，多筆預約最方便</StyledImgNewsPara>
                        </StyledImgNewsItem>
                        <StyledImgNewsItem>
                            <StyledImgNewsItemImgBox>
                                <StyledImgNewsItemImg src="/public/image/service/fathersDay.jfif" alt="" />
                            </StyledImgNewsItemImgBox>
                            <StyledImgNewsItemTitle>父親節快樂</StyledImgNewsItemTitle>
                            <StyledImgNewsPara>給爸爸一個大大的擁抱就是最好的禮物，......</StyledImgNewsPara>
                        </StyledImgNewsItem>
                    </StyledImgNewsItems>
                    <StyledImgMoreNews>
                        <StyledImgMoreNewsBtn to={"#!"}>more</StyledImgMoreNewsBtn>
                    </StyledImgMoreNews>
                </StyledImgNews>
            </StyledImgNewsArea>

            {/* social media */}
            <StyledSocialArea>
                <StyledSocial>
                    <StyledSocialItems>
                        <StyledSocialItem>
                            <StyledSocialItemTitle>粉絲專頁</StyledSocialItemTitle>
                            <StyledSocialItemBox>
                            </StyledSocialItemBox>
                        </StyledSocialItem>
                        <StyledSocialItem>
                            <StyledSocialItemTitle>TVCF</StyledSocialItemTitle>
                            <StyledSocialItemBox>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/u92M90kDuRU" title="黑貓宅急便ibon打單印單教學影片😎7/12正式上線" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </StyledSocialItemBox>
                        </StyledSocialItem>
                    </StyledSocialItems>
                </StyledSocial>
            </StyledSocialArea>


        </StyledHome>
        </>
    )
}

export default Home