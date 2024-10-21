import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlog, selectBlog, selectIsLoading } from "../../../redux/features/blog/blogSlice";
import BlogItem from "./BlogItem";
import Loader from "../../../components/global-components/Loader";


const Blog = () => {
    const { id } = useParams();
    
    const dispatch = useDispatch();
    
    const [blog, setBlog] = useState(null);
    
    const blogItem = useSelector(selectBlog);
    const isLoading = useSelector(selectIsLoading);
    // getBlog
    useEffect(() => {
        dispatch(getBlog(id));
    }, [dispatch, id]);

    
    useEffect(() => {
        setBlog(blogItem);
      }, [blogItem]);

  return (
    <Box p="20px">
    {isLoading ? (
      <Loader />
    ) 
    : 
    (
    <section id="blog">
        <BlogItem blog={blog} />
        </section>
      )}
      </Box>
    );
  };

export default Blog;
