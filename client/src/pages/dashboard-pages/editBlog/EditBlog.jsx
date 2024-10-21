import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import BlogForm from "../../../components/dashboard-components/blog/blogForm/BlogForm";
import {
  getBlog,
  getBlogs,
  selectBlog,
  updateBlog,
  selectIsLoading,
} from "../../../redux/features/blog/blogSlice";
import Header from "../../../components/dashboard-components/Header";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/global-components/Loader";

const EditBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blogEdit = useSelector(selectBlog);
  // Translation
  const { t } = useTranslation();
  const [blog, setBlog] = useState(blogEdit);
  const [blogImage, setBlogImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(getBlog(id));
  }, [dispatch, id]);

  useEffect(() => {
    setBlog(blogEdit);

    setImagePreview(
      blogEdit && blogEdit.image ? `${blogEdit.image.filePath}` : null
    );

    setDescription(
      blogEdit && blogEdit.description ? blogEdit.description : ""
    );
  }, [blogEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleImageChange = (e) => {
    setBlogImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", blog?.name);

    formData.append("category", blog?.category);
    formData.append("description", description);
    if (blogImage) {
      formData.append("image", blogImage);
    }

    console.log(...formData);

    await dispatch(updateBlog({ id, formData }));
    await dispatch(getBlogs());
    navigate("/blogs");
  };

  return (
    <Box p="20px">
    {isLoading ? (
      <Loader />
    ) 
    : 
    (
    <section id="editBlog">
      <Header title={t("dashboard.editBlog")} />
      <BlogForm
        blog={blog}
        blogImage={blogImage}
        imagePreview={imagePreview}
        description={description}
        setDescription={setDescription}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveBlog={saveBlog}
      />
    </section>
      )}
      </Box>
    );
  };

export default EditBlog;
