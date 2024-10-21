import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import red from "@material-ui/core/colors/red";

export const LikeButton = ({ isActive, toggleClass }) => {
  return (
    <div>
         <div 
            className={isActive ? 'hidden': null} 
            onClick={toggleClass} >
            <FavoriteIcon style={{ color: red }} />
        </div>
        <div 
            className={isActive ? null : 'hidden'} 
            onClick={toggleClass} >
        <FavoriteBorderIcon />
        </div>
    </div>
  )
}
