import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, Share, ThumbUp } from '@material-ui/icons'
import React from 'react'
import "./Post.css"

function Post({profilePic,image,username,timestamp,message}) {
    return (
        <div className="post">
        <div className="post-top">
        <Avatar src={profilePic}
        className="post-avatar"/>
        <div className="post-topinfo">
        <h3>{username}</h3>
        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
       </div>
        </div>

        <div className="post-botton">
        <p>{message}</p>
        </div>

        <div className="post-image">
        <img src={image}
        alt=""/>
        </div>
            
            <div className="post-options">
                <div className="post-option">
               <ThumbUp/>
               <p>Like</p>
                </div>
                <div className="post-option">
               <ChatBubbleOutline/>
               <p>Comment</p>
                </div>
                <div className="post-option">
               <NearMe/>
               <p>Share</p>
                </div>
                <div className="post-option">
               <AccountCircle/>
               <ExpandMoreOutlined/>
                </div>
            </div>
        </div>
    )
}

export default Post
