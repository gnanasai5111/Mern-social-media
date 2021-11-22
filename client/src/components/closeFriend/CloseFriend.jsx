import React from 'react'
import './closeFriend.css'
import { Link } from "react-router-dom";

const PF=process.env.REACT_APP_PUBLIC_FOLDER;

export default function CloseFriend({user}) {
 
    return (
      <Link to={`/profile/${user.username}`} style={{textDecoration:"none",color:"#000"}}>
        <li className="sidebarFriend">
        <img
          src={PF+user.profilePicture}
          className="sidebarFriendImg"
          alt=""
        />
        <span className="sidebarFriendName">{user.username}</span>
       
      </li>
      </Link>
    )
}
