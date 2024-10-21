import React from "react";
import './blogs.css';
import {BsPersonWorkspace} from "react-icons/bs";
import BlogContainer from "./BlogContainer";
import {Box} from '@mui/material';
import { useTranslation } from "react-i18next";



function Blog() {
	// Translation
	const { t } = useTranslation();
    return (
      <section id='blog'>
              <Box className='branch-container'>
                  <BsPersonWorkspace  className='icon-branch' />
              </Box>
              <Box>
                <h2>{t("blogs")}</h2>
                <p className='mb-3'>{t("blog.theBlogPara")}</p>
              </Box>
                <BlogContainer />
      </section>
    )
    };
export default Blog;



