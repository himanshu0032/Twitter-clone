import React, { useState } from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplyModal from "../HomeSection/ReplyModal";
import { useDispatch } from "react-redux";
import { createRetweet, likeTweet } from "../../Store/Tweet/Action";
import { FavoriteOutlined } from "@mui/icons-material";

const TweetCard = ({item}) => {
  const navigate = useNavigate();
  const [openReplyModal, setOpenReplyModal] = useState(false)
  const handleOpenReplyModel = () => setOpenReplyModal(true);
const handleCloseReplyModal = () => setOpenReplyModal(false);
const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log("Delete Tweet");
    handleClose();
  };


  const handleCreateRetweet = () => {
    dispatch(createRetweet(item?.id))
    console.log("handle create retweet");
  };

  const handleLikeTweet = () => {
    dispatch(likeTweet(item?.id))
    console.log("handleLikeTweet");
  };

  

  return (
    <>
      {/* <div className='flex  items-center font-semibold text-gray-700 py-2'>
         <RepeatIcon />
         <p>You Retweet</p>
      </div> */}

      <div className="flex space-x-5 ">
        <Avatar
          onClick={() => navigate(`/profile/${item?.user?.id}`)}
          className="cursor-pointer"
          alt="username"
          src="https://pbs.twimg.com/media/GV1HWEtWgAAcyg2?format=jpg&name=small"
        />
        <div className="w-full">
          <div className="flex justify-center items-center">
            <div className="flex cursor-pointer items-center space-x-2 w-full">
              <span className="font-semibold">{item?.user?.fullName}</span>
              <span className="text-gray-600">@{item?.user?.fullName.split(" ").join("_").toLowerCase()}.2m</span>
              <img
                className="ml-2 w-5 h-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png"
                alt=""
              />
            </div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
              <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
            </Menu>
          </div>
          <div className="mt-2">
            <div onClick={()=> navigate(`/tweet/${item?.id}`)} className="cursor-pointer">
              <p className="mb-2  text-left">
                {item?.content}
              </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src={item?.image}
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>{item?.totalReplies}</p>
              </div>
              <div className={`${item?.retweet ? "text-pink-600" : "text=gray-600"}`}>
                <RepeatIcon
                  className="cursor-pointer"
                  onClick={handleCreateRetweet}
                />
                <p>{item?.totalRetweets}</p>
              </div>

              <div className={`${item?.liked ? "text-pink-600" : "text=gray-600"}`}>
                {item?.liked ? (
                  <FavoriteOutlined
                    className="cursor-pointer"
                    onClick={handleLikeTweet}
                  />
                ) : (
                  <FavoriteIcon
                    className="cursor-pointer"
                    onClick={handleLikeTweet}
                  />
                )}
                <p>{item?.totalLikes}</p>
              </div>

              <div className="space-x-3 flex items-center text-gray-600">
                    <BarChartIcon className="cursor-pointer" onClick={handleOpenReplyModel}/>
                    <p>{0}</p>
               </div>

               <div className="space-x-3 flex items-center text-gray-600">
                    <FileUploadIcon className="cursor-pointer" onClick={handleOpenReplyModel}/>
               </div>

            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal item={item} open={openReplyModal} 
        handleClose={handleCloseReplyModal}/>
      </section>
    </>
  );
};

export default TweetCard;
 