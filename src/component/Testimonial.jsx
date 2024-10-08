import React from "react";
import { useState } from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"
import SocialMediaIcons from "./SocialMediaIcons";

function Testimonials(props){
    let reviews=props.reviews;
    
    const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const rightShiftHandler = () => {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
    /*
    function surpriceShiftHandler() {
        let randIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randIndex);
    }
    */
   
    const [showIcons, setShowIcons] = useState(false);
      // Handler to show social media icons
     const connectHandler = () => {
        setShowIcons((prevShowIcons) => !prevShowIcons);
    };
    

    return(
        <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
              <Card review={reviews[index]}/>

        
        <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold text mx-auto">
            <button className="cursor-pointer  hover:text-violet-500" onClick={leftShiftHandler}><FiChevronLeft/></button>
            <button className="cursor-pointer  hover:text-violet-500" onClick={rightShiftHandler}><FiChevronRight/></button>
        </div>    

        <div>
        <button
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold
           text-white text-lg mt-3"onClick={connectHandler}>
          {showIcons ? "Hide Social Media" : "Connect With Me"}
        </button>
      </div>{showIcons && <SocialMediaIcons  
          linkedinUrl={reviews[index].linkedinUrl} 
          instagramUrl={reviews[index].instagramUrl} />}

    </div>

    );

}
export default Testimonials;