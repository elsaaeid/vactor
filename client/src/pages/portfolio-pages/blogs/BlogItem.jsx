import React, { useState, useEffect, useContext } from 'react';
// import { useSelector } from "react-redux";
import { tokens } from "../../../theme";
import { Box, Typography, useTheme } from '@mui/material';
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";
import CodeContent from "../../../components/global-components/code-content/CodeContent";
import { Context } from '../../../context/Context';
// import AddComment from './addComment/AddComment';
// import CommentsContent from './CommentsContent';
// import LikeButton from './LikeButton';


const BlogItem = ({blog})=>{
    // Auth State Select
    // const { user } = useSelector(
    //     (state) => state.auth
    // );

    // App Context
    const { btnState, btnHandling } = useContext(Context);
    // Theme Colors Mode
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // Translation
    const { t } = 
    useTranslation();
    const [copied, setCopied] = useState(false);
    const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
        setCopiedId(null);
      }, 1500); // Reset the copied state after 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setCopiedId(id);
  };


    return(
        <Box>
            <Box className="blog__item-title">
            {blog?.name ? <Typography variant='h2'>{blog?.name}</Typography> : null}
            </Box>
            <Box className="w-full blogItem-image flex justify-center items-center">
            {blog?.image ? (
                <img
                src={blog?.image.filePath}
                alt={blog?.image.fileName}
                />
            ) : null}
            </Box>
            <Box className="w-full flex flex-col justify-center items-center">
                {blog?.description ? (
                    <Box className="p-3 blog__item__description">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(blog?.description),
                        }}
                    ></div>
                    </Box>
                ) : null}
                {blog?.category ? (
                <Box
                    className="w-full flex flex-row justify-evenly items-center"
                    style={{
                        color: colors.grey[500],
                    }}
                    >
                    <span className="found">{t("blog.foundIn")}</span>
                    <p className="category">{blog?.category}</p>
                </Box>
                ) : null}
                {blog?.code ? (
                    <Box className="relative w-1/2 flex flex-col justify-evenly items-center">
                    <CodeContent>
                        {blog?.code}
                    </CodeContent>
                        <button
                            className={btnState === "thertlyActive" ? "btn active absolute copy-code" : "btn absolute copy-code"}
                            onClick={() => {
                                handleCopyCode(blog.code, blog._id)
                                btnHandling("thertlyActive")
                            }}
                            disabled={copied && copiedId === blog._id}
                        >
                            {copied && copiedId === blog._id ? 'Code Copied!' : 'Copy Code'}
                        </button>
                    </Box>
                ) : null}
            </Box>
            {/* {
                user?.name
                (
                    <Box>
                        <p>Sign in as:</p>
                        <img className='w-5 h-5 object-cover rounded-full' src={imagePreview} />
                        <span>@{user.name}</span>
                    </Box>
                ) : null
                }
            <Box className="w-full flex flex-row justify-evenly items-center">
                <AddComment blog={blog} />
                <CommentsContent blog={blog} />
            </Box> */}
        </Box>
    )
};

export default BlogItem;