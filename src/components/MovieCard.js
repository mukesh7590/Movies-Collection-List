import React from "react";
import { useDispatch } from "react-redux";
import {
   ADD_FAVOURITE,
   REMOVE_FROM_FAV,
   ADD_MOVIE_TO_LIST,
   REMOVE_FROM_LIST,
} from "../redux/movieSlice";

function MovieCard(props) {
   const dispatch = useDispatch();
   const movie = props.movie;
   const isFavourite = props.isFavourite;
   const isMovieAdded = props.isMovieAdded;

   const handleFavouriteClick = () => {
      dispatch(ADD_FAVOURITE({ movie }));
   };

   const handleUnFavClick = () => {
      dispatch(REMOVE_FROM_FAV({ movie }));
   };

   const handleAddClick = () => {
      dispatch(ADD_MOVIE_TO_LIST({ movie }));
   };

   const handleUnAddClick = () => {
      dispatch(REMOVE_FROM_LIST({ movie }));
   };

   const imgPrefix = "https://image.tmdb.org/t/p/w500/";

   const imgURL = movie.poster_path;

   return (
      <div className="movie-card">
         <div className="left">
            <img alt="movie-poster" src={imgPrefix + imgURL} />
         </div>
         <div className="right">
            <div className="title">{movie.title}</div>
            <div className="plot">{movie.overview}</div>
            <div className="footer">
               <div className="rating">{movie.vote_average.toFixed(1)}</div>
               <div className="btnContainer">
                  {isMovieAdded ? (
                     <button
                        className="unAdd-btn"
                        onClick={() => handleUnAddClick()}
                     >
                        Unadd
                     </button>
                  ) : (
                     <button
                        className="add-btn"
                        onClick={() => handleAddClick()}
                     >
                        Add
                     </button>
                  )}

                  {isFavourite ? (
                     <button
                        className="unfavourite-btn"
                        onClick={() => handleUnFavClick()}
                     >
                        UnFavourite
                     </button>
                  ) : (
                     <button
                        className="favourite-btn"
                        onClick={() => handleFavouriteClick()}
                     >
                        Favourite
                     </button>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default MovieCard;
