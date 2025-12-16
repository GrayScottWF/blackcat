import styled from "styled-components";


export const StyledSlider = styled.div`

    max-width: 1100px;
    width: 100%;
    max-height: 400px;
    height: 100%;
    margin: 0 auto;
    /* overflow-y: hidden; */
    /* display: flex; */

    .slick-prev:before,
    .slick-next:before {
        font-size: 40px;    /* 調整你想要的大小，預設通常是 20px */
        color: #000;       /* 順便調整顏色，避免白色背景看不見 */
        opacity: 0.75;     /* 調整透明度 */
    }
    .slick-dots li button:before {
        font-size: 12px;    /* 預設約 6px，調大至 12px */
        color: black;       /* 改變圓點顏色 */
        opacity: 0.25;      /* 未選中的透明度 */
    }

        /* 2. 調整選中（當前）圓點的大小或顏色 */
    .slick-dots li.slick-active button:before {
        font-size: 14px;    /* 選中時可以稍微再大一點 */
        color: black;       /* 選中時的顏色 */
        opacity: 0.75;      /* 選中時較清晰 */
    }
`
export const StyledSliderItem = styled.div`

    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`
export const StyledSliderImg = styled.img`
    display: block;
    margin: 0 auto;
    /* 如果圖片寬度不一，可以限制最大寬度 */
    max-width: 100%;
    max-height: 400px;
    height: auto;
`
