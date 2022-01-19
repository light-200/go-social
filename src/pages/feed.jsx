// @flow
import * as React from 'react';
import '../style/feed.css'
import '../style/feedProfile.css'
import '../style/post.css'
import '../style/notification.css'

export function Feed() {
    return (

        <div className="feedContainer">
            <div className="feedProfile">
                <div className="profileCard">
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
                </div>
            </div>
            <div className="feedPosts">
                <div className="post">
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
                </div>
            </div>
            <div className="feedNotifications">
                <div className="notificationHeader">
                    Notifications
                </div>
                <div className="feedNotification">
                    <span className="icon">
                        🔔
                    </span>
                    <span className="text">
                        this is a notification
                    </span>
                </div>
            </div>
        </div>

    );
};