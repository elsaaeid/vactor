import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";
import { toast } from "react-toastify";



const initialState = {
  blog: null,
  blogs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  category: [],
};

// Create New blog
export const createBlog = createAsyncThunk(
  "blogs/create",
  async (formData, thunkAPI) => {
    try {
      return await blogService.createBlog(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all blogs
export const getBlogs = createAsyncThunk(
  "blogs/getBlogs",
  async (_, thunkAPI) => {
    try {
      return await blogService.getBlogs();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete a blog
export const deleteBlog = createAsyncThunk(
  "blogs/delete",
  async (id, thunkAPI) => {
    try {
      return await blogService.deleteBlog(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get a blog
export const getBlog = createAsyncThunk(
  "blogs/getBlog",
  async (id, thunkAPI) => {
    try {
      return await blogService.getBlog(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Update blog
export const updateBlog = createAsyncThunk(
  "blogs/updateBlog",
  async ({ id, formData }, thunkAPI) => {
    try {
      return await blogService.updateBlog(id, formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);


// likeBlog 

export const likeBlog  = createAsyncThunk(
  "blogs/likeBlog",
  async (id, thunkAPI) => {
    try {
      return await blogService.likeBlog(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);



// unlikeBlog 

export const unlikeBlog = createAsyncThunk(
  "blogs/unlikeBlog",
  async (id, thunkAPI) => {
    try {
      return await blogService.unlikeBlog(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);


// commentBlog
export const commentBlog = createAsyncThunk(
  "blogs/commentBlog",
  async ({ blogId, comment, userId }, thunkAPI) => {
    try {
      const response = await blogService.commentBlog({ blogId, comment, userId });
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);


const blogSlice = createSlice( {
  name: "blog",
  initialState,
  reducers: {
    CALC_CATEGORY(state, action) {
      const blogs = action.payload;
      const array = [];
      blogs.map((item) => {
        const { category } = item;

        return array.push(category);
      });
      const uniqueCategory = [...new Set(array)];
      state.category = uniqueCategory;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.blogs.push(action.payload);
        toast.success("Blog added successfully");
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload;
        toast.success("Blog deleted successfully");
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.blog = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.blog = action.payload;
        toast.success("Blog updated successfully");
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(likeBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(likeBlog.fulfilled, (state, action) => {
        const blogIndex = state.blogs.findIndex((blog) => blog._id === action.meta.arg);
        if (blogIndex !== -1) {
          state.blogs[blogIndex].likes++;
        }
      })
      .addCase(likeBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(unlikeBlog.fulfilled, (state, action) => {
        const blogIndex = state.blogs.findIndex((blog) => blog._id === action.meta.arg);
        if (blogIndex !== -1 && state.blogs[blogIndex].likes > 0) {
          state.blogs[blogIndex].likes--;
        }
      })
      .addCase(commentBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(commentBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        // Update the comments for the specific blog
        const { blogId, user, comment } = action.payload;
        const blog = state.blogs.find((blog) => blog.id === blogId);
        if (blog) {
          if(user) {
              blog.comments.push(comment);
            }
        }
      })    
     .addCase(commentBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});


export const { CALC_CATEGORY, addComment } =
blogSlice.actions;

export const selectIsLoading = (state) => state.blog.isLoading;
export const selectBlog = (state) => state.blog.blog;
export const selectCategory = (state) => state.blog.category;

export default blogSlice.reducer;

