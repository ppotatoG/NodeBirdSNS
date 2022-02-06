import { useState } from 'react';

import PropTypes from 'prop-types';
import Slick from 'react-slick';
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed'
    top: 0
    left:0
    z-index: 99
`;

const Header = styled.header`
    height: 44px;
    background: #fff;
    position: relative;
    padding: 0;
    text-align: center;

    h1 {
        margin: 0;
        font-size: 17px;
        color: #333;
        line-height: 44px;
    }

    button {
        position: absolute;
        to: 0; 
        left: 0;
        padding: 15px;
        line-height: 14px;
        cursor: pointer;
    }
`;

const SlickWrapper = styled.header`
    height: calc(100% - 44px);
    background: #090909;
`;

const ImgWrapper = styled.header`
    padding: 32px;
    text-align: center;

    img {
        margin:0 auto;
        max-height: 750px;
    }
`;

const ImagesZoom = (images, onClose) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <Overlay>
            <Header>
                <h1>상세 이미지</h1>
                <button onClick={onClose}>X</button>
            </Header>
            <SlickWrapper>
                <div>
                    <Slick
                        initialSlide={0}
                        afterChange={(slide) => setCurrentSlide(slide)}
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                        infinite
                    >
                        {images.map((val) => {
                            <ImgWrapper key={val.src}>
                                <img src={val.src} alt={val.src} />
                            </ImgWrapper>
                        })}
                    </Slick>
                </div>
            </SlickWrapper>
        </Overlay>
    );
}

ImagesZoom.propTypes = {
    images : PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired
}

export default ImagesZoom;