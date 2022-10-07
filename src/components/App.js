import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { fetchPageList } from "../api/apiCalls";

import { SHOW_TAB } from "../redux/movieSlice";

import { useSelector, useDispatch } from "react-redux";

function App() {
   const dispatch = useDispatch();

   // Hooks for state
   const [pageVal, setPageVal] = useState(
      useSelector((state) => state.movies.page)
   );
   const [trend, setTrend] = useState(
      useSelector((state) => state.movies.showTrend)
   );
   const [fav, setFav] = useState(useSelector((state) => state.movies.showFav));
   const [myList, setMyList] = useState(
      useSelector((state) => state.movies.showList)
   );
   const { trending, list, favourites } = useSelector((state) => state.movies);

   useEffect(() => {
      if (pageVal === 1) {
         fetchPageList(pageVal)(dispatch);
      }
      if (pageVal > 1) {
         fetchPageList(pageVal)(dispatch);
      }
      window.scrollTo(0, 0);
   }, [pageVal]);

   let displayMovies;

   if (fav) {
      displayMovies = favourites;
   } else if (myList) {
      displayMovies = list;
   } else {
      displayMovies = trending;
   }

   const isMovieFav = (movie) => {
      const index = favourites.indexOf(movie);
      if (index !== -1)
         //we have found the movie
         return true;
      else return false;
   };

   const isMovieAdd = (movie) => {
      const index = list.indexOf(movie);
      if (index !== -1)
         //we have found the movie
         return true;
      else return false;
   };

   const onChangeTabTrend = () => {
      dispatch(SHOW_TAB({ val: true, name: "Trend" }));
      setTrend(true);
      setMyList(false);
      setFav(false);
   };

   const onChangeTabList = () => {
      dispatch(SHOW_TAB({ val: true, name: "List" }));
      setTrend(false);
      setMyList(true);
      setFav(false);
   };

   const onChangeTabFav = () => {
      dispatch(SHOW_TAB({ val: true, name: "Fav" }));
      setTrend(false);
      setMyList(false);
      setFav(true);
   };

   return (
      <div className="App">
         <Navbar />
         <div className="main">
            <div className="tabs">
               <div
                  className={`tab ${trend ? "active-tabs" : ""}`}
                  onClick={onChangeTabTrend}
               >
                  Top Rated
               </div>

               <div
                  className={`tab ${myList ? "active-tabs" : ""}`}
                  onClick={onChangeTabList}
               >
                  Movies
               </div>

               <div
                  className={`tab ${fav ? "active-tabs" : ""}`}
                  onClick={onChangeTabFav}
               >
                  Favourites
               </div>
            </div>

            <div className="list">
               {displayMovies.map((movie, index) => (
                  <MovieCard
                     movie={movie}
                     isFavourite={isMovieFav(movie)}
                     isMovieAdded={isMovieAdd(movie)}
                     key={`movies-${index}`}
                  />
               ))}
            </div>

            {displayMovies.length === 0 ? (
               <div className="no-movies">No movies to display!! </div>
            ) : null}
         </div>

         {trend ? (
            <div className="pageControl">
               <button
                  id="btnPre"
                  type="button"
                  onClick={() => setPageVal((prevPage) => prevPage - 1)}
                  disabled={pageVal === 1 ? true : false}
               >
                  PRE
               </button>
               <div className="pageNo">{pageVal}</div>
               <button
                  id="btnNext"
                  type="button"
                  onClick={() => setPageVal((prevPage) => prevPage + 1)}
                  disabled={false}
               >
                  NEXT
               </button>
            </div>
         ) : (
            <></>
         )}
      </div>
   );
}

export default App;
