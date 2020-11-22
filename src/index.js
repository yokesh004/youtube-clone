import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Components/Navbar/navbar";
import Sidebar from "./Components/Sidebar/sidebar";
import VideoFrame from "./Components/VideoFrame/videoFrame";

ReactDOM.render(
  <Navbar />,
  document.getElementById('navbar')
);

ReactDOM.render(
  <Sidebar />,
  document.getElementById('sidebar')
);

ReactDOM.render(
  <VideoFrame />,
  document.getElementById('videoframe')
);