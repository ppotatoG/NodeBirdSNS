import PropTypes from 'prop-types';

import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, Popover } from 'antd';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';

import PostImages from './PostImages';
import Avatar from 'antd/lib/avatar/avatar';

const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);

    const id = useSelector((state) => state.user.me?.id);

    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);
    

    return (
        <div style={{ marginBottom: 20 }}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet"/>,

                     liked  ? ( 
                        <HeartTwoTone 
                            twoToneColor="#eb2f96"  
                            key="heart"
                            onClick={onToggleLike}
                        />
                    ) 
                    : (
                        <HeartOutlined 
                            key="heart"
                            onClick={onToggleLike}
                        />
                    ),

                    <MessageOutlined key="message" onClick={onToggleComment}/>,
                    <Popover key="mored" content={(
                        <Button.Group>
                            {
                               id && post.User.id === id
                                ? (
                                    <>
                                        <Button>수정</Button>
                                        <Button type="danger">삭제</Button>
                                    </>
                                )
                                : (    
                                    <Button>신고</Button>
                                )
                            }
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
                <Card
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
            </Card>

            {commentFormOpened && (
                <div>댓글부분</div>
            )}
            
            {/* <CommentForm></CommentForm>
            <Comments></Comments> */}
        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number,
      User: PropTypes.object,
      content: PropTypes.string,
      createdAt: PropTypes.object,
      Comments: PropTypes.arrayOf(PropTypes.any),
      Images: PropTypes.arrayOf(PropTypes.any),
    }),
  };

export default PostCard;