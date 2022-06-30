import React, {Component} from "react";
import Header  from '../../common/header/Header';
import './Home.css';
import TitleimageList from "../../common/moviesData/titleimageList";
import moviesData from "../../common/moviesData/moviesData";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Filter, { filterObject} from "../filterCard/Filters";
import genres from "../../common/movieFilterCard/genre";
import artists from "../../common/movieFilterCard/artists";
import { Link } from "react-router-dom";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            moviesData: moviesData,
            genres: genres,
            artists: artists,
            filterObject: moviesData,
        };
      }

      filterMovies = () => {
        if(
            filterObject.movieName === '' &&
            filterObject.genres.length === 0 &&
            filterObject.artists.length === 0
        ){
            const newState = this.state;
            newState.filterObject = moviesData;
            this.setState(newState);

            return moviesData;
        }
        
        const filteredMovies = this.state.moviesData.filter((movie) => {
            if(
                movie.title.toLowerCase() === filterObject.movieName.toLowerCase() || 
                movie.genres.some((genre) => filterObject.genres.includes(genre)) ||
                movie.artists.some((artist) =>filterObject.artists.includes(`${artist.first_name} ${artist.last_name}`)) || (new Date(filterObject.releaseDateStart) < new Date(movie.release_date) && new Date(filterObject.releaseDateEnd) > new Date(movie.release_date))
            ){
                return movie;
            }
        });

        const newState = this.state;
        newState.filterObject = filteredMovies;
        this.setState(newState);
      };

    render(){
        return (
            <div>
                <Header isDetails={false} />

                <span className="heading">Upcoming Movies</span>
                
                <TitleimageList moviesData={this.state.moviesData} />

                <div className="flex-container">
                    <div className="left">
                    <ImageList cols={4} rowHeight={350}>

                    {this.state.filterObject.map((item) => (
                     <ImageListItem key={item.id} className="imageList">
                        <Link to='/details' state={{ movie: item }}>
                    <img
                    src={`${item.poster_url}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                    <ImageListItemBar title={item.title} subtitle={`Release Date : ${new Date(item.release_date).toDateString()}`} />
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
};

export default Home;