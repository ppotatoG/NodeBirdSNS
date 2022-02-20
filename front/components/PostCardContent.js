import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({ postData }) => (
    <div>
        {postData.split(/(#[^\s#]+)/g).map((val) => {
            if (val.match(/(#[^\s#]+)/)) {
                return (
                    <Link
                        href={{ pathname: '/hashtag', query: { tag: val.slice(1) } }}
                        as={`/hashtag/${val.slice(1)}`}
                        key={val}
                    >
                        <a>{val}</a>
                    </Link>
                );
            }
            return val;
        })}
    </div>
);

PostCardContent.propTypes = {
    postData : PropTypes.string.isRequired
};

export default PostCardContent;