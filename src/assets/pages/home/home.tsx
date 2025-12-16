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
    StyledServiceImg

} from './StyledHome'


function Home() {
    const [msgClose, setMsgClose] = useState(false)
    function handleMsgClose(){
        setMsgClose(true)
    }
    return(
        <>
        <StyledHome>
            <StyledSliderBg />
            <StyledIndexMsgArea  style={{display: msgClose ? "none": "block"}}>
                <StyledIndexMsgBox>
                    <StyledIndexMsgs>
                        <StyledIndexMsg>黑貓宅急便反詐騙公告</StyledIndexMsg>
                        <StyledIndexMsg>當日宅急便服務調整公告</StyledIndexMsg>
                    </StyledIndexMsgs>
                    <StyledMsgClose onClick={handleMsgClose}>✕</StyledMsgClose>
                    <StyledMoreMsg>更多公告▸</StyledMoreMsg>
                </StyledIndexMsgBox>
            </StyledIndexMsgArea>

            <StyledSlider>
                <SimpleSlider />
            </StyledSlider>
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
        </StyledHome>
        </>
    )
}

export default Home