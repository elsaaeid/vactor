import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaylistDropdown from './PlaylistDropdown';
import { MdOutlineUnsubscribe } from "react-icons/md";
import { MdUnsubscribe } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BACKEND_URL } from '../../../redux/helper';
import Search from './Search';
import { Box } from '@mui/material';
import "./VideosContainer.css"
import Spinner from '../../global-components/Spinner';
const API_URL = `${BACKEND_URL}/api`;



const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlaylist, setSelectedPlaylist] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [likedVideos, setLikedVideos] = useState({});
  const [subscribedVideos, setSubscribedVideos] = useState({});


  const fetchVideos = async (query = '', playlistId = '') => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}/videos`, {
        params: {
          q: query,
          playlistId: playlistId,
        },
        withCredentials: true,
      });
      setVideos(response.data || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchPlaylists = async () => {
    try {
      const response = await axios.get(`${API_URL}/playlists`);
      setPlaylists(response.data || []);
    } catch (err) {
      console.error('Error fetching playlists:', err.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchVideos(searchQuery, selectedPlaylist);
    setSearchQuery(e.target.value);
  };

  const likeVideo = async (videoId) => {
    try {
      const response = await axios.post(`${API_URL}/videos/like`, { videoId }, {
        headers: { 'Content-Type': 'application/json' }
      });
      setLikedVideos((prev) => ({ ...prev, [videoId]: true }));
      toast.success(response.data.message);
    } catch (err) {
      console.error('Error liking the video:', err);
      toast.error('Failed to like the video!');
    }
  };


  const subscribeToChannel = async (channelId) => {
    try {
      const response = await axios.post(`${API_URL}/videos/subscribe`, { channelId }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSubscribedVideos((prev) => ({ ...prev, [channelId]: true }));
      toast.success(response.data.message);
    } catch (err) {
      console.error('Error subscribing to the channel:', err);
      toast.error('Failed to subscribe to the channel!');
    }
  };

  const shareVideo = (videoId) => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    navigator.clipboard.writeText(videoUrl);
    toast.success('Video URL copied to clipboard!');
  };

  const downloadVideo = (videoId) => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(videoUrl, '_blank');
    toast.info('Opened video in new tab for downloading.');
  };
  const handleSelectionChange = (event) => {
    setSelectedPlaylist(event.target.value);
    fetchVideos(searchQuery, event.target.value);
  };

  useEffect(() => {
    fetchVideos();
    fetchPlaylists();
  }, []);


  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <ToastContainer />
      <Box 
        style={{
          padding: '10px',
          }}
        className="videos-filter relative flex flex-col items-center justify-center">
        <PlaylistDropdown 
          playlists={playlists} 
          selectedPlaylist={selectedPlaylist}
          handleSelectionChange={handleSelectionChange} />
        <Search 
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </Box>
      {loading && <div className='mt-3 flex justify-center items-center'><Spinner /></div>}
      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {videos.map(video => (
          <div
            key={video.id.videoId}
            className='flex flex-col justify-center items-center'>
            <div 
              style={{ 
                border: '1px solid #ccc', 
                borderRadius: '5px', 
                padding: '10px',
                margin: '10px', 
                width: '300px', 
                textAlign: 'left' 
                }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', marginBottom: '10px' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, borderRadius: '5px' }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.snippet.title}
                ></iframe>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: "bolder" }}>{video.snippet.title}</h3>
              <p style={{ fontSize: '14px', borderTop: "1px solid #555"}}>{video.snippet.description}</p>
            </div>
            <div style={{ 
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              padding: '10px',
              width: "300px",
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
            }}>
              <button 
                style={{ border: 'none', background: 'none', cursor: 'pointer'}} 
                title="Like"
                onClick={() => likeVideo(video.id.videoId)}
              >
                  {likedVideos[video.id.videoId] ? (
                  <AiFillLike style={{ fontSize: '20px' }} />
                ) : (
                  <AiOutlineLike style={{ fontSize: '20px' }} />
                )}
              </button>
              <button 
                style={{ border: 'none', background: 'none', cursor: 'pointer'}} 
                title="Subscribe"
                onClick={() => subscribeToChannel(video.snippet.channelId)}
              >
                {subscribedVideos[video.snippet.channelId] ? (
                  <MdUnsubscribe style={{ fontSize: '20px' }} />
                ) : (
                  <MdOutlineUnsubscribe style={{ fontSize: '20px' }} />
                )}
              </button>
              <button 
                style={{ border: 'none', background: 'none', cursor: 'pointer'}} 
                title="Share"
                onClick={() => shareVideo(video.id.videoId)}
              >
                <FaRegShareSquare style={{ fontSize: '20px' }} />
              </button>
              <button 
                style={{ border: 'none', background: 'none', cursor: 'pointer'}} 
                title="Download"
                onClick={() => downloadVideo(video.id.videoId)}
              >
                <AiOutlineDownload style={{ fontSize: '20px' }} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;