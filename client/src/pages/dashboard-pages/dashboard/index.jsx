import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import Header from "../../../components/dashboard-components/Header";
import BlogSummary from "../../../components/dashboard-components/blog/blogSummary/BlogSummary";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import { getBlogs } from "../../../redux/features/blog/blogSlice";
import Loader from "../../../components/global-components/Loader";
import { useTranslation } from "react-i18next";
import UserSummary from "../../../components/dashboard-components/userSummary/UserSummary";


const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  // Translation
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getBlogs());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  
  return (
    <Box className="w-full" p="20px">
    {isLoading ? (
      <Loader />
    ) 
    : 
    (
      <section id="dashboard">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title={t("dashboard.dashboard")} subtitle={t("dashboard.WelcomeDashboard")} />
        </Box>
        <Box className="w-1/2">
          <BlogSummary blogs={blogs} />
          <UserSummary />       
        </Box>
      </section>
    )
    }
    </Box>
  );
};

export default Dashboard;