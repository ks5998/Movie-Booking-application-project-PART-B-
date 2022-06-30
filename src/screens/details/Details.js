import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import { ImageList, ImageListItem, ImageListItemBar, Typography } from '@material-ui/core'
import Header from '../../common/header/Header'
import moviesData from '../../common/moviesData/moviesData';
import YouTube from 'react-youtube';
import Ratings from './Ratings';
import './Details.css';

const Details = () => {

    const location = useLocation();
    const movieData = location.state.movie;

  return (
    <div className='detail'>
        <Header />

        <Link to="/">
            <Typography className="backButton">&lt; Back to Home</Typography>
        </Link>

        <div className="movieDetails">

            <div className="leftDetails">
                <img src={movieData.poster_url} className="detailImage" />
            </div>

        <div className="middleDetails">
            <Typography variant="h5">
            <strong>{movieData.title}</strong>
          </Typography>
          <Typography>
            <strong>Genre :</strong>
            {" " + movieData.genres.toString()}
          </Typography>
          <Typography>
            <strong>Duration :</strong>
            {" " + movieData.duration}
          </Typography>
          <Typography>
            <strong>Release Date :</strong>
            {new Date(movieData.release_date).toDateString()}
          </Typography>
          <Typography>
            <strong>Rating :</strong>
            {movieData.critics_rating.toFixed(1)}
          </Typography>
          <Typography className="detailsPlot">
            <strong>Polt :</strong>
            <a href={movieData.wiki_url} target="_blank">
              (Wiki Link)
            </a>
            {movieData.storyline}
          </Typography>
          <Typography className="trailerText">
            <strong>Trailer :</strong>
          </Typography>
          <YouTube
            videoId={movieData.trailer_url.split("=")[1]}
            opts={{ width: "100%", height: "400px" }}
          />
         </div>

        <div className="rightDetails">

        <Typography>
            <strong>Rate this movie:</strong>
            <br />
            <Ratings />
          </Typography>

          <Typography>
            <strong>Artists :</strong>
          </Typography>
          <ImageList cols={2}>
            {movieData.artists.map((artist) => {
              return (
                <ImageListItem key={artist.id}>
                  <img src={artist.profile_url} />
                  <ImageListItemBar
                    title={`${artist.first_name} ${artist.last_name}`}
                  ></ImageListItemBar>
                </ImageListItem>
              );
            })}
          </ImageList>

        </div>
            
        </div>
    </div>
  )
}

export default Details