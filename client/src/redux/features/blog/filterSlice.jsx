import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredBlogs: [],
};

const filterSlice = createSlice({
  name: "filterReducerBlog",
  initialState,
  reducers: {
    FILTER_BLOGS(state, action) {
      const { blogs, search } = action.payload;
      const tempBlogs = blogs.filter(
        (blog) =>
          blog.name.toLowerCase().includes(search.toLowerCase()) ||
          blog.category.toLowerCase().includes(search.toLowerCase())
      );

      state.filteredBlogs = tempBlogs;
    },
  },
});

export const { FILTER_BLOGS } = filterSlice.actions;

export const selectFilteredBlogs = (state) => state.filterReducerBlog.filteredBlogs;

export default filterSlice.reducer;
