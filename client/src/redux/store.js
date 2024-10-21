import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import blogReducer from "./features/blog/blogSlice";
import emailReducer from "../redux/features/email/emailSlice";
import filterReducerBlog from "../redux/features/blog/filterSlice";
import filterReducerAuth from "../redux/features/auth/filterSlice";




export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    email: emailReducer,
    filterReducerAuth: filterReducerAuth,
    filterReducerBlog: filterReducerBlog,
  },
});
