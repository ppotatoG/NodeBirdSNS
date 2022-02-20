import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
    const { me, logOutLoading } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);


    return (
    <Card
        actions={[
            <div key="twit">짹짹<br/>0</div>,
            <div key="followings">팔로잉<br/>0</div>,
            <div key="followers">팔로워<br/>0</div>,
        ]}
    >
    <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
    />
    <Button onClick={onLogout} loading={logOutLoading}>로그아웃</Button>
    </Card>
    );
};

export default UserProfile;