import { CloseOutlined } from '@ant-design/icons';
import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    .slick-slide {
        display: inline-block;
    }
    .ant-card-cover {
        transform: none !important;
    }
`

export const Overlay = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Header = styled.header`
    height: 44px;
    background: white;
    position: relative;
    padding: 0;
    text-align: center;
  
    h1 {
        line-height: 44px;
        margin: 0;
        font-size: 17px;
        color: #333;
    }
`;

export const SlickWrapper = styled.div`
    height: calc(100% - 44px);
    background: rgba(0, 0, 0, .8);
`;

export const CloseBtn = styled(CloseOutlined)`
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
`;

export const Indicator = styled.div`
    text-align: center;

    & > div {
        width: 75px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        background: #313131;
        display: inline-block;
        text-align: center;
        color: white;
        font-size: 15px;
    }
`;

export const ImgWrapper = styled.div`
    padding: 32px;
    text-align: center;

    img {
        margin: 0 auto;
        max-height: 750px;
    }
`;