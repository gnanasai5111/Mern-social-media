import React from "react";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import "./home.css";


function Home() {
  
 
  return (
    <>
      <Topbar logout />
 
      <div className="homeContainer">
   <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
export default Home;
