import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentBlog } from "../../../../redux/features/blog/blogSlice";
import { selectUser } from "../../../../redux/features/auth/authSlice";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddComment = ({ blog }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleCommentSubmit = () => {
    if (!user) {
      alert("Please login to comment on this blog. You will be redirected to the login page.");
      navigate("/login", { replace: true });
    } else {
      dispatch(commentBlog({ blogId: blog._id, comment, userId: user._id }));
      setComment("");
      console.log(`user is ${user._id} and blogId is ${blog._id} and comment is ${comment}`)
    }
  };

  return (
    <Box p="20px">
      <input
        type="text"
        value={comment}
        name="comment"
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleCommentSubmit}>
        Add Comment
      </button>
    </Box>
  );
};

export default AddComment;