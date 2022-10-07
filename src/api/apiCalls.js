import { ADD_MOVIE_TO_LIST, ADD_MOVIES } from "../redux/movieSlice";
import { ADD_SEARCH_RESULT } from "../redux/searchSlice";

import { queryURL, API_KEY, detailURL } from "./apiURLs";

export function handleMovieSearch(movie) {
   const queryParams = {
      api_key: API_KEY,
      query: movie,
   };
   const queryString = new URLSearchParams(queryParams).toString();
   const URL = queryURL + queryString;

   return function (dispatch) {
      fetch(URL)
         .then((response) => response.json())
         .then((movie) => {
            //dispatch an action to store the movie to the store
            dispatch(ADD_SEARCH_RESULT({ movie }));
         });
   };
}

export function handleAddMovieToList(id) {
   const URL = detailURL + id + "?api_key=" + API_KEY;

   return function (dispatch) {
      fetch(URL)
         .then((response) => response.json())
         .then((movie) => {
            //dispatch an action to store the movie to the store
            dispatch(ADD_MOVIE_TO_LIST({ movie }));
         });
   };
}

export const fetchPageList = (pageVal) => {
   return function (dispatch) {
      fetch(
         `https://api.themoviedb.org/3/movie/top_rated?api_key=983a905b1b49eb7940cb5fc1215f70fd&language=en-US&page=${pageVal}`
      )
         .then((results) => results.json())
         .then((data) => {
            dispatch(ADD_MOVIES({ data: data.results, page: pageVal }));
         });
   };
};
