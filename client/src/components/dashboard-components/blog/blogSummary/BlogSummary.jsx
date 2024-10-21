import React, { useEffect } from "react";
import "./BlogSummary.scss";
import CategoryIcon from '@mui/icons-material/Category';
import { BiCategory } from "react-icons/bi";
import InfoBox from "../../infoBox/InfoBox";
import { useDispatch, useSelector } from "react-redux";
import {
  CALC_CATEGORY,
  selectCategory,
} from "../../../../redux/features/blog/blogSlice";
import { useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import { useTranslation } from "react-i18next";

// Icons
const BlogIcon = <CategoryIcon size={40} color="#fff" />;
const categoryIcon = <BiCategory size={40} color="#fff" />;


const BlogSummary = ({ blogs }) => {
  // Translation
  const { t } = useTranslation();

  // A hook to access the redux dispatch function.
  const dispatch = useDispatch();
  // A hook to access the redux store's state.
  const category = useSelector(selectCategory);

  // Theme Colors Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Calculating Blogs
  useEffect(() => {
    dispatch(CALC_CATEGORY(blogs));
  }, [dispatch, blogs]);

  return (
    <div className="blog-summary w-full flex flex-col justify-center items-center">
      <h3 style={{
        color: colors.grey[500],
      }}>{t("blog.inventoryStats")}</h3>
      <div className="info-summary mt-3 w-full flex flex-row justify-around items-center">
        <InfoBox
          icon={BlogIcon}
          title={t("blog.totalItems")}
          count={blogs.length}
          bgColor="card1"
        />
        <InfoBox
          icon={categoryIcon}
          title={t("blog.allCategories")}
          count={category.length}
          bgColor="card4"
        />
      </div>
    </div>
  );
};

export default BlogSummary;
