import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import moviesData from "./moviesData";

const TitleimageList = ()=>{
    return(
      <ImageList cols={6}  rowHeight={250} style={{transform: "translateZ(0)", width: '100%', flexWrap: "nowrap" }} >
      {moviesData.map((item) => (
        <ImageListItem key={item.id} style={{cursor: 'pointer'}}>
          <img
            src={`${item.poster_url}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
    );
};

export default TitleimageList;