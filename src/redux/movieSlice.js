import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
   // slice name
   name: "movies",

   // initial states
   initialState: {
      trending: [],
      list: [],
      favourites: [],
      showFav: false,
      showList: false,
      showTrend: true,
      page: 1,
   },

   // Reducers thats changed the state
   reducers: {
      // ================== From frntend side we use this way ==================
      //             1. const movie = useSelector((state) => state.movie);
      //             2. const movieAction = movieSlice.actions
      //             3. const dispatch = useDispatch();

      // reucer : (state, dispatch(movieAction.ADD_MOVIES(data)))
      //                    ||
      //                    ||
      //                    ||
      ADD_MOVIES: (state, action) => {
         state.trending = [...action.payload.data];
         state.page = action.payload.page;
      },

      ADD_FAVOURITE: (state, action) => {
         state.favourites = [action.payload.movie, ...state.favourites];
      },

      REMOVE_FROM_FAV: (state, action) => {
         const filteredArray = state.favourites.filter(
            (movie) => movie.title !== action.payload.movie.title
         );
         state.favourites = filteredArray;
      },

      SHOW_TAB: (state, action) => {
         if (action.payload.name === "Trend") {
            state.showTrend = action.payload.val;
            state.showList = false;
            state.showFav = false;
         } else if (action.payload.name === "List") {
            state.showTrend = false;
            state.showList = action.payload.val;
            state.showFav = false;
         } else {
            state.showTrend = false;
            state.showList = false;
            state.showFav = action.payload.val;
         }
      },

      REMOVE_FROM_LIST: (state, action) => {
         const filteredArray = state.list.filter(
            (movie) => movie.title !== action.payload.movie.title
         );
         state.list = filteredArray;
      },

      ADD_MOVIE_TO_LIST: (state, action) => {
         state.list = [action.payload.movie, ...state.list];
      },
   },
});

// export all the actions of the SLICE
export const {
   ADD_MOVIES,
   ADD_FAVOURITE,
   REMOVE_FROM_FAV,
   SHOW_TAB,
   ADD_MOVIE_TO_LIST,
   REMOVE_FROM_LIST,
} = movieSlice.actions;

// export default the REDUCER
export default movieSlice.reducer;
