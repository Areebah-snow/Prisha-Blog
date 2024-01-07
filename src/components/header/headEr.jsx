import React from 'react';
import '../header/HeadEr.css';
import HeadImg from "./../../images/img2.jpg";

const headEr = () => {
  return (
    <div className='head'>
      <div className="head_txt">
        <h1>We Unleash Home Asthetics</h1>
      </div>
      <div className="head_img">
        <img className="header-image" src={HeadImg} alt='furniture1'/>
      </div>
    </div>
  );
}

export default headEr;