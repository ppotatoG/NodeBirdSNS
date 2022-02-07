import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({ postData }) => {
    const regex = /(#[^\s#]+)/g;
    return (
        <div>
            {
                postData
                .split(regex)
                .map((v) => {
                    if (v.match(regex)) {
                        return (
                            <Link
                                href={`/hashtag/${v.slice(1)}`}
                                key={v}
                            >
                                <a>{v}</a>
                            </Link>
                        );
                    }
                    return v;
                })
            }
        </div>
    )
}  

PostCardContent.propTypes = {
    postData : PropTypes.string.isRequired
};

export default PostCardContent;