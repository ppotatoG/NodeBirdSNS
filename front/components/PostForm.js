import { useCallback, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { addPost } from '../reducers/post';

const postForm = () => {
    const { ImagePaths, postAdded } = useSelector(state => state.post);
    
    const [text, setText] = useState('');
    
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    const dispatch = useDispatch();
    const onSubmit = useCallback(() => {
        dispatch(addPost);
    }, []);

    const imageInput = useRef();

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    useEffect(() => {
        if (postAdded) {
            setText('');
        }
    }, [postAdded]);

    return (
        <Form 
            style={{ margin: "10px 0 20px" }} 
            encType="multipart/form-data" 
            onFinish={onSubmit}>

            <Input.TextArea 
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />

            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: "right" }} htmlType="submit">짹짹</Button>
            </div>

            <div>
                {ImagePaths.map((val) => {
                    <div key={val} style={{ display: "inline-block" }}>
                        <img src={val} style={{ width: "200px" }} alt={val} />
                        <div>
                            <Button>이미지</Button>
                        </div>
                    </div>
                })}
            </div>
        </Form>
    )
}

export default postForm;