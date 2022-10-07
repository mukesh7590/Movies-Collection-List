import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleMovieSearch, handleAddMovieToList } from "../api/apiCalls";

const Navbar = () => {
   const dispatch = useDispatch();
   const { result, showSearchResults } = useSelector((state) => state.search);
   const [searchText, setSearchText] = useState("");
   const [showSearch, setShowSearch] = useState(showSearchResults);

   useEffect(() => {
      if (searchText.length > 0) {
         handleSearch();
      }
   }, [searchText]);

   // console.log("result => ", result);

   const handleAddToMovies = (movie) => {
      handleAddMovieToList(movie.id)(dispatch);
      setShowSearch(false);
      setSearchText("");
   };

   const handleSearch = () => {
      if (searchText !== "") {
         dispatch(handleMovieSearch(searchText));
         setShowSearch(true);
      }
      return;
   };

   const imgPrefix = "https://image.tmdb.org/t/p/w500/";

   return (
      <div className="navbar">
         <div className="search-container">
            <input
               className="inputText"
               value={searchText}
               onChange={(e) => setSearchText(e.target.value)}
            />
            <button id="search-btn" onClick={handleSearch}>
               Search
            </button>

            {showSearch && result.success === "false" && searchText && (
               <div className="search-results not">{result.status_message}</div>
            )}

            {showSearch && result.total_results > 0 && (
               <div className="search-results">
                  <div className="search-result">
                     <img
                        src={imgPrefix + result.results[0].poster_path}
                        alt="search-result-pic"
                     />

                     <div className="movie-info">
                        <span>{result.results[0].title}</span>
                        <button
                           onClick={() => handleAddToMovies(result.results[0])}
                        >
                           Add
                        </button>
                     </div>
                  </div>

                  {result.total_results > 1 && (
                     <div className="search-result">
                        <img
                           src={imgPrefix + result.results[1].poster_path}
                           alt="search-result-pic"
                        />

                        <div className="movie-info">
                           <span>{result.results[1].title}</span>
                           <button
                              onClick={() =>
                                 handleAddToMovies(result.results[1])
                              }
                           >
                              Add
                           </button>
                        </div>
                     </div>
                  )}

                  {result.total_results > 2 && (
                     <div className="search-result">
                        <img
                           src={imgPrefix + result.results[2].poster_path}
                           alt="search-result-pic"
                        />

                        <div className="movie-info">
                           <span>{result.results[2].title}</span>
                           <button
                              onClick={() =>
                                 handleAddToMovies(result.results[2])
                              }
                           >
                              Add
                           </button>
                        </div>
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
};
export default Navbar;
