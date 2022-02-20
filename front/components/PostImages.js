import PropTypes from 'prop-types';

import { useCallback, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import ImagesZoom from './ImagesZoom';

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);

    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);

    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);    

    if(images.length === 1) {
        return (
            <>
                <img 
                    src={images[0].src}
                    alt={images[0].src}
                    onClick={onZoom}
                    role="presentation"
                    style={{ 
                        maxHeight: "320px",
                        width: "auto",
                        margin: "0 auto"
                    }}
                />
                { showImagesZoom && <ImagesZoom images={images} onClose={onClose} /> }
            </>
        )
    }

    if(images.length === 2) {
        return (
            <>
                <img 
                    src={images[0].src}
                    alt={images[0].src}
                    onClick={onZoom}
                    role="presentation"
                    style={{
                        display: "inline-block",
                        width: "50%"
                    }}
                />
                <img 
                    src={images[1].src}
                    alt={images[1].src}
                    onClick={onZoom}
                    role="presentation"
                    style={{
                        display: "inline-block",
                        width: "50%"
                    }}
                />
                { showImagesZoom && <ImagesZoom images={images} onClose={onClose} /> }
            </>
        )
    }

    return (
        <>
            <div>
                <img 
                    src={images[0].src}
                    alt={images[0].src}
                    onClick={onZoom}
                    role="presentation"
                    width="50%"
                />
                <div
                    onClick={onZoom}
                    role="presentation"
                    style={{
                        display: "inline-block",
                        width: "50%",
                        textAlign: "center",
                        verticalAlign: "middle"
                    }}
                >
                    <PlusOutlined />
                    <br/>
                    {images.length - 1} 개의 사진 더 보기
                </div>
            </div>
            { showImagesZoom && <ImagesZoom images={images} onClose={onClose} /> }
        </>
    )
}

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
    })).isRequired,
};
  
  export default PostImages;