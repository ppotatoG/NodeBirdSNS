import Link from 'next/link';

import { useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';

import useInput from '../hooks/useInput';

const LoginForm = () => {
    const dispatch = useDispatch();
    const { logInLoading, loginError } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    useEffect(() => {
        if(loginError) {
            alert(loginError);
        }
    }, [loginError]);

    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        dispatch({
            type: LOG_IN_REQUEST,
            data: { email, password }
        });
      }, [email, password]);

    return (
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
            </div>

            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input 
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>

            <div style={{marginTop: 10}}>
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    );
}

export default LoginForm;