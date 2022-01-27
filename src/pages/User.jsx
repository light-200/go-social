import { useParams } from "react-router-dom";
import "../style/user.css"
import Post from "../components/post";

export default function User() {
  let { user } = useParams();

  return (
      <div className="userCard">
      <div className="userHeader">
        <div className="userBanner"></div>
        <div className="userPicture"></div>
      </div>
      {/* done till here */}
      <div className="userBody">
       <div className="userStats">
        <div className="userName">
          <h1>About {user}</h1>
        </div>
        <div className="userDesc">
         <h4>A Short Description about the user. User can say a few things about him</h4>
        </div>
       <div className="followers">
            <div>followers</div>
            <span>10</span>
          </div>
          <div className="following">
            <div>following</div>
            <span>20</span>
          </div>
          <div className="following">
            <div>Posts</div>
            <span>20</span>
          </div>
          <hr />
          <div className="following">
            <span className="btn ">Message</span>
            <span className="btn">Sponser</span>
          </div>
          <hr />
          <div className="following">
            <div><h4>Interested In</h4></div>
          </div>

          <div className="tags">
            <div className="userTag">
              Python
            </div>
            <div className="userTag">
              Javascript
            </div>
            <div className="userTag">
              React js
            </div>
            <div className="userTag">
              Golang
            </div>
            <div className="userTag">
              Express js
            </div>
          </div>
       </div>
       {/* post section */}
       <div className="userPost">
         <div>
           <h1>All Posts By {user}</h1>
         </div>
         <Post name={""} />
         <Post name={""} />
         <Post name={""} />
         <Post name={""} />
         <Post name={""} />

       </div>
      </div>
    </div>
  );
}
