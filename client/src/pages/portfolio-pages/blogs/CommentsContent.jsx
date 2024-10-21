import React from "react";
import { Box, Typography } from "@mui/material";

const CommentsContent = ({ blog }) => {
  return (
    <Box p="20px">
      {blog?.comments.length > 0 ? (
        <ul>
          {blog.comments.filter(comment => comment && comment.user).map((comment) => (
            <li key={comment._id}>
              <Typography variant="subtitle1">
                <strong>{comment.user}</strong>: {comment.comment}
              </Typography>
            </li>
          ))}
        </ul>
      ) : (
        <Typography variant="body1">No comments yet.</Typography>
      )}
    </Box>
  );
};

export default CommentsContent;