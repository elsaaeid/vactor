import React from "react";
import { Box } from "@mui/material";
import Header from "../../../components/dashboard-components/Header";
import BlogList from "../../../components/dashboard-components/blog/blogList/BlogList";
import { useTranslation } from "react-i18next";



const DashboardBlogs = () => {

    // Translation
  const { t } = useTranslation();
  return (
    <Box className="w-full" p="20px">
      <section id="blog-dashboard">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title={t("blogs")} />
        </Box>
        <BlogList />
      </section>
  </Box>
);
};


export default DashboardBlogs