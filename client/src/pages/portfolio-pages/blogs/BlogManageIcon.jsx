import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  deleteBlog,
  getBlogs,
} from "../../../redux/features/blog/blogSlice";
import {useTheme} from '@mui/material';
import { tokens } from "../../../theme";



export default function BlogManageIcon({_id}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    // A hook to access the redux dispatch function
    const dispatch = useDispatch();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


  
    // Blog Deleting Function
    const delBlog = async (id) => {
        console.log(id);
        await dispatch(deleteBlog(id));
        await dispatch(getBlogs());
    };

    // Confirm of blog Deleting Function
    const confirmDelete = (id) => {
        confirmAlert({
        title: "Delete Blog",
        message: "Are you sure you want to delete this blog.",
        buttons: [
            {
            label: "Delete",
            onClick: () => delBlog(id),
            },
            {
            label: "Cancel",
            // onClick: () => alert('Click No')
            },
        ],
        });
    };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FiMoreVertical
          style={{
              color: colors.grey[500],
          }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <Link to={`/edit-blog/${_id}`}>
                <FaEdit size={20} color={"green"} />
            </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <FaTrashAlt
                size={20}
                color={"red"}
                onClick={() => confirmDelete(_id)}
                />
        </MenuItem>
      </Menu>
    </div>
  );
}
