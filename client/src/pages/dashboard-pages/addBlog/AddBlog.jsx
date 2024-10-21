import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/global-components/Loader";
import BlogForm from "../../../components/dashboard-components/blog/blogForm/BlogForm";
import {
  createBlog,
  selectIsLoading,
} from "../../../redux/features/blog/blogSlice";
import Header from "../../../components/dashboard-components/Header";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";

const initialState = {
  name: "",
  category: "",
};

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(initialState);
  const [blogImage, setBlogImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  // Translation
  const { t } = useTranslation();
  const isLoading = useSelector(selectIsLoading);

  useRedirectLoggedOutUser("/login");
  const { name, category, } = blog;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleImageChange = (e) => {
    setBlogImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const generateKSKU = (category) => {
    const letter = category.slice(0, 3).toUpperCase();
    const number = Date.now();
    const sku = letter + "-" + number;
    return sku;
  };

  const saveBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("sku", generateKSKU(category));
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", blogImage);
    formData.append("code", code);

    console.log(...formData);

    await dispatch(createBlog(formData));

    navigate("/blogs");
    
  };

  return (
    <Box p="20px">
    {isLoading ? (
      <Loader />
    ) 
    : 
    (
      <section id="addBlog">
        <Header title={t("dashboard.addBlog")} />
        <BlogForm
          blog={blog}
          blogImage={blogImage}
          imagePreview={imagePreview}
          description={description}
          setDescription={setDescription}
          code={code} 
          setCode={setCode}
          handleInputChange={handleInputChange}
          handleImageChange={handleImageChange}
          saveBlog={saveBlog}
        />
      </section>
      )}
    </Box>
  );
};

export default AddBlog;
