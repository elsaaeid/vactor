import axios from "axios";

const API_URL = `${process.env.BACKEND_URL}/api/blogs/`;

// Create New Blog
const createBlog = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// Get all blogs
const getBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a blog
const deleteBlog = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a blog
const getBlog = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update blog
const updateBlog = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};


// LikeBlog
const likeBlog = async (id) => {
  const response = await axios.post(`${API_URL}${id}`);
  return response.data;
};

// unlikeBlog
const unlikeBlog = async (id) => {
  const response = await axios.post(`${API_URL}${id}`);
  return response.data;
};

// commentBlog
const commentBlog = async ({ blogId, user, comment }) => {
  const response = await axios.post(`${API_URL}${blogId}`, { user, comment });
  return response.data;
};


const blogService = {
  createBlog,
  getBlogs,
  getBlog,
  deleteBlog,
  updateBlog,
  likeBlog,
  unlikeBlog,
  commentBlog,
};

export default blogService;
