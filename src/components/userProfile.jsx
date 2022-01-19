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
                <li className='socialsBtn'>Y</li>
                <li className='socialsBtn'>I</li>
                <li className='socialsBtn'>Li</li>
                <li className='socialsBtn'>Sp</li>
                <li className='socialsBtn'>+</li>
            </div>
        </div>
        <div className="profileFooter">
            this is the profile description
        </div>
    </div>);
}

export default UserProfile;