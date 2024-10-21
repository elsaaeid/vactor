import React from "react";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import UsersList from "../../../components/dashboard-components/usersList";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Loader from "../../../components/global-components/Loader";



const UserList = () => {
  useRedirectLoggedOutUser("/login");

  const { isLoading } = useSelector(
    (state) => state.blog
  );

  return (
    <Box className="w-full" p="20px">
    {isLoading ? (
      <Loader />
    ) 
    : 
    (
      <section id="usersList">
        <div className="container">
          <UsersList />
        </div>
      </section>
      )}
      </Box>
    );
  };

export default UserList;
