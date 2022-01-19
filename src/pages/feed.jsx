// @flow
import * as React from 'react';
import '../style/feed.css'
import UserProfile from '../components/userProfile';
import Post from '../components/post';
import Notification from '../components/notification';

export function Feed() {
    return (
        <div className="feedContainer">
            <div className="feedProfile">
                <UserProfile />
            </div>
            <div className="feedPosts">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <div className="feedNotifications">
                <div className="notificationHeader">
                    Notifications
                </div>
                <Notification />
            </div>
        </div>

    );
};
