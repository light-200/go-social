import '../style/post.css';
const Post = () => {
    return (<div className="post">
        <div className="postHeader">
            <div className="postBanner">

            </div>
            <div className="postProfile">

            </div>
        </div>
        <div className="postBody">
            <div className="postSocialMedia">
                <li>Y</li>
                <li>I</li>
                <li>Li</li>
                <li>Sp</li>
            </div>
        </div>
        <div className="postActions">
            <span className='btn'>follow</span>
            <span className='btn'>upvote</span>
            <span className='btn'>save</span>
            <span className='btn'>notInterested</span>
            <span className='btn'>report</span>
        </div>
    </div>);
}

export default Post;