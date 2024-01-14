import React from 'react';
import "../head/HeadEr.css";

const HeadEr = () => {
  return (
    <div className='pt-10 '>
       <div className="head flex flex-wrap items-center justify center mx-auto mt-10 md:px-12 md:flex-row">
        <div className="text-sec mb-14 lg:mb-10 lg:w-1/2">
            <h1 className="hd_txt max-w-xl text-[4rem] bold-xl leading-none mb-5">We create home more asthetic</h1>
            <p className="first_p text-[1.2rem] ">Enjoy the new furnitures every time <br /> you move and feel the castle house <br /> of your dreams</p>
        </div>
        <div className="img-sec">image</div>
       </div>
    </div>
  );
};

export default HeadEr;
