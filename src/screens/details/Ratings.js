import React, { useState } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";


const Ratings = () => {

    const [ratedValue, setRatedValue] = useState(-1);

    const stars = Array(5).fill(0);

    const handleRatings = (index)=>{
        setRatedValue(index);
    };

  return (
    <div>
        {
        stars.map((star, index)=> {
            return(
            <StarBorderIcon 
            key={index}
            style={ratedValue >= index ? { color: "yellow" } : { color: "black" }}
            onClick={() => handleRatings(index)} />
            );
        })
        }
    </div>
  )
}

export default Ratings;