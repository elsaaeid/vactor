import React from 'react';
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material';
import { tokens } from "../../../theme";
 

const PlaylistDropdown = ({ 
  playlists, 
  selectedPlaylist,
  handleSelectionChange
 }) => {
    //Translation
		const { t } = useTranslation();
        // App Theme
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
      <select
         style={{
          background: colors.grey[900],
          color: colors.grey[500],
        }}
        id="playlistSelector"
        value={selectedPlaylist.id} onChange={handleSelectionChange}
      >
        <option 
        value="">{t("video.selectPlaylist")}</option>
        {playlists.map((playlist, index) => (
          <option key={index} value={playlist.id}>{playlist.snippet.title}</option>
        ))}
      </select>
  );
};

export default PlaylistDropdown;
