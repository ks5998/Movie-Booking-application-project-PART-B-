import React, { useState } from "react";
import Header  from '../../common/header/Header';
import './Home.css';
import TitleimageList from "../../common/moviesData/titleimageList";
import moviesData from "../../common/moviesData/moviesData";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Filter, { filterObject} from "../filterCard/Filters";
import { Link } from "react-router-dom";
import genres from "../../common/movieFilterCard/genre";
import artists from "../../common/movieFilterCard/artists";

    function Home() {

        const [state, setState] = useState({
            moviesData: moviesData,
            genres:  genres,
            artists: artists,
          });
        
        const [movies, setMovies] = useState(moviesData);

        const filterMovies = () => {
        if(
            filterObject.movieName === '' &&
            filterObject.releaseDateEnd === "" &&
            filterObject.releaseDateStart === "" &&
            filterObject.genres.length === 0 &&
            filterObject.artists.length === 0
        ){
            const newMovies = movies;
            setMovies(newMovies);
            return moviesData;
        }
        
        const filteredMovies = state.moviesData.filter((movie) => {
            if(
                movie.title.toLowerCase() === filterObject.movieName.toLowerCase() || 
                movie.genres.some((genre) => filterObject.genres.includes(genre)) ||
                movie.artists.some((artist) =>filterObject.artists.includes(`${artist.first_name} ${artist.last_name}`)) || (new Date(filterObject.releaseDateStart) < new Date(movie.release_date) && new Date(filterObject.releaseDateEnd) > new Date(movie.release_date))
            ){
                return movie;
            }
        });

        setMovies(filteredMovies);
      };

        return (
            <div>
                <Header isDetails={false} />

                <span className="heading">Upcoming Movies</span>
                
                <TitleimageList moviesData={state.moviesData} />

                <div className="flex-container">
                    <div className="left">
                    <ImageList cols={4} rowHeight={350}>

                    {movies.map((item) => (
                    <ImageListItem key={item.id} className="imageList">
                    <Link to='/details' state={{ movie: item }}>
                    <img
                    src={item.poster_url}
                    srcSet={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="featuredImage"
                    />
                    <ImageListItemBar 
                    title={item.title} 
                    subtitle={`Release Date : ${new Date(item.release_date).toDateString()}`} />
                    </Link>

                    </ImageListItem>
                    ))}
                    </ImageList>
                    </div>

                    <div className="right">
                        <Filter 
                        genres={this.state.genres}
                        artists={this.state.artists}
                        filterMovies={this.filterMovies}
                        />
                    </div>
                </div>
            </div>
        );
    };

export default Home;