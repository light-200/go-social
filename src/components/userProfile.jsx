import React from "react";
import "../style/feedProfile.css";

export function UserProfile({ data }) {
  return (
    <div className="profileCard">
      <div className="profileHeader">
        <div className="profileBanner"></div>
        <div className="profilePicture"></div>
      </div>
      <div className="profileBody">
        <div className="profileStats">
          <div className="followers">
            <div>followers</div>
            <span>10</span>
          </div>
          <div className="following">
            <div>following</div>
            <span>20</span>
          </div>
        </div>
        <div className="profileIcons">
          <a className="socialsBtn" target="_blank">
            Y
          </a>
          <a className="socialsBtn" target="_blank">
            I
          </a>
          <a className="socialsBtn" target="_blank">
            li
          </a>
          <a className="socialsBtn" target="_blank">
            Sp
          </a>
          <a className="socialsBtn" target="_blank">
            +
          </a>
        </div>
      </div>
      <div className="profileFooter">this is the profile description</div>
    </div>
  );
}

export default UserProfile;
