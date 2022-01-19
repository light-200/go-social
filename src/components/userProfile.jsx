import React from 'react';
import '../style/feedProfile.css';

export function UserProfile() {
    return (<div className="profileCard">
        <div className="profileHeader">
            <div className="profileBanner">

            </div>
            <div className="profilePicture">

            </div>
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
                <li>Y</li>
                <li>I</li>
                <li>Li</li>
                <li>Sp</li>
                <li className='addSocials'>+</li>
            </div>
        </div>
        <div className="profileFooter">
            this is the profile description
        </div>
    </div>);
}

export default UserProfile;