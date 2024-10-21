import React, { useContext } from 'react';
import {Box, Typography, useTheme} from '@mui/material';
import {NavLink} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { tokens } from "../../../theme";
import { Context } from '../../../context/Context';
import BlogManageIcon from './BlogManageIcon';
import { AdminAuthorLink } from "../../../protect/HiddenLink";


export const CardBlog = ( { 
    _id,
    image, 
    name, 
    category,
    shortenText,
} )=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
	// Translation
	const { t } = useTranslation();
  // App Context
  const { btnState, btnHandling } = useContext(Context);

    return (
        <article key={_id} className='relative w-full blog__item flex flex-col justify-center items-center mt-3'>
            <AdminAuthorLink>
                <span className="manage-icon cursor-pointer absolute">
                    <BlogManageIcon _id={_id} />
                </span>
            </AdminAuthorLink>
            <Box className="blog__item-title">
                {
                    name ?
                    <Typography variant='h2'>{shortenText(name, 16)}</Typography>
                    :
                    null
                }
            </Box>
            <Box className="w-full blog__item-image flex justify-center items-center">
                {image ? (
                        <img
                            src={image.filePath}
                            alt={image.fileName}
                        />
                        ) 
                        :
                        null
                }
            </Box>
            <Box className="w-full flex flex-col justify-center items-center">
                {
                <Box className="blog__item-cta ">
                    <NavLink to={`/blog/${_id}`}
                    underline="none"
                    className={btnState === "thertlyActive" ? "btnX" : "btnX"}
                    onClick={() =>btnHandling("thertlyActive")}
                    >{t("blog.moreLink")}
                    </NavLink>
                </Box>
                }
                {
                    category ?
                    <Box 
                        className="w-full flex flex-row justify-evenly items-center"
                        style={{
                            color: colors.grey[500],
                        }}>
                        <span className="found">{t("blog.foundIn")}</span>
                        <p className="category">{category}</p>
                    </Box>
                    :
                    null
                }
            </Box>
        </article>
    )
}

