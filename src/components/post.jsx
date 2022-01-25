import "../style/post.css";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.production.min";
const Post = ({ name }) => {
  return (
    <div className="post">
      <div className="postHeader">
        <div className="postBanner"></div>
        <Link className="postProfile" to={name}></Link>
      </div>
      <div className="postBody">
        <div className="postSocialMedia">
          <a className="socialsBtn" href={"#"} target="_blank">
            Y
          </a>
          <a className="socialsBtn" href={"#"} target="_blank">
            I
          </a>
          <a className="socialsBtn" href={"#"} target="_blank">
            li
          </a>
          <a className="socialsBtn" href={"#"} target="_blank">
            Sp
          </a>
        </div>
      </div>
      <div className="postActions">
        <span className="btn">follow</span>
        <span className="btn">upvote</span>
        <span className="btn">save</span>
        <span className="btn">notInterested</span>
        <span className="btn">report</span>
      </div>
    </div>
  );
};

export default Post;
