import React, { useState, useEffect } from "react";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { likeBlog, unlikeBlog } from '../../../redux/features/blog/blogSlice';
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../../theme";
import { selectUser } from '../../../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom'; 


const LikeButton = ({blog}) => {
  const [isLike, setIsLike] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  
  useEffect(() => {
    if (user) {
      if (blog?.likedBy.includes(user.id)) {
        setIsLike(isLike);
        const isLiked = blog?.likedBy.includes(user.id);
        if(isLiked) {
          setIsLike(!isLike);
        } else {
          setIsLike(isLike);
        }
      }
      else {
        setIsLike(!isLike);
      }
    }
    else {
      setIsLike(!isLike);
    }
    
  }, [blog, user]);
  
 


  const handleLike = () => {
    console.log(isLike);
    if (!isLike) {
      dispatch(unlikeBlog(blog?._id));
    } else {
      dispatch(likeBlog(blog?._id));
    }
  };

  return (
    <Box className="blog-item w-1/2 flex flex-row justify-between items-center">
      <p 
      className="flex flex-row justify-between items-center"
      style={{
        color: colors.grey[500],
      }}>
        {blog?.likes}
      </p>
      <button onClick={handleLike}>
        {isLike ? <BiLike /> : <BiSolidLike />}
      </button>
    </Box>
  );
};

export default LikeButton;
