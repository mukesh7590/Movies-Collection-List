import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
   name: "search",

   initialState: {
      result: [],
      showSearchResults: false,
   },

   reducers: {
      ADD_SEARCH_RESULT: (state, action) => {
         state.result = action.payload.movie;
         state.showSearchResults = true;
      },
      ADD_MOVIE_TO_LIST: (state, action) => {
         state.showSearchResults = false;
         state.result=[]
      },
   },
});

export const { ADD_SEARCH_RESULT, ADD_MOVIE_TO_LIST } = searchSlice.actions;

export default searchSlice.reducer;
