import PropTypes from 'prop-types';

import { Button, Form, Input } from 'antd';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import useInput from '../hooks/useInput';

const ConmmentForm = ({post}) => {
    const id = useSelector((state) => state.user.me?.id);

    const [commentText, onChangecommentText] = useInput('');
    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
    }, []);


    return (
        <Form onFinish={onSubmitComment} >
            <Form.Item style={{ position: "relative", margin: 0 }}>
                <Input.TextArea
                    value={commentText}
                    onChange={onChangecommentText}
                    rows={4}
                />
                <Button
                    style={{ position: "absolute", right: 0, bottom: -40 }}
                    type="primary"
                    htmlType="submit"
                >
                    삐약
                </Button>
            </Form.Item>
        </Form>
    );
}

ConmmentForm.propTypes = {
    post : PropTypes.object.isRequired
}

export default ConmmentForm;