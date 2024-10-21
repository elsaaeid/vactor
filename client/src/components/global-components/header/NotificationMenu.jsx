import React, {useContext, useState} from 'react';
import {Box, Menu, MenuItem, Divider, IconButton, Tooltip} from '@mui/material';
import {IconComponent} from './IconComponent';
import Notification from "../../global-components/profile/notification/Notification";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import { Context } from '../../../context/Context';



export const NotificationMenu = ()=> {

  // App Context 
  const {profile} = useContext(Context);
  // count Notice Badge State
  const [countNotice, setCountNotice] = useState(true);

  // Theme Colors Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Anchor Element State
  const [anchorEl, setAnchorEl] = useState(null);

  // Anchor Element Boolean Method
  const open = Boolean(anchorEl);
  // Open handle Function
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Hnadling Function
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', zIndex: 4, alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Notification">
          <IconButton
            onClick={handleClick}
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <IconComponent        
                icon={<Badge 
                      style={{
                        color: colors.grey[500],
                      }}
                      onClick={()=>setCountNotice(false)} badgeContent={countNotice ? 1 : 0}>
                        <NotificationsNoneIcon
                        style={{
                          color: colors.grey[500],
                        }}
                         className="icon" fontSize="small" />
                      </Badge>
                    } />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      <Box
      style={{
        background: colors.grey[900],
        color: colors.grey[500]
      }}
      className="flex flex-col p-2">
        <CloseIcon className="m-5 cursor-pointer" onClick={handleClose} />
        <MenuItem
          PaperProps={{
            elevation: 0,
            sx: {
              overflowY: 'scroll',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                width: 10,
                height: 10,
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            }
          }}
          onClick={handleClose}>
            {profile.isVerified && <Notification />}
            <Divider />
        </MenuItem>
      </Box>
      </Menu>
    </Box>
  );
}