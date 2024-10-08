import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TweetCard from "../HomePage/TweetCard";
import ProfileModal from "./ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Store/store";
import { findUserById, followUserAction } from "../../Store/Auth/Action";
import { getUsersTweets } from "../../Store/Tweet/Action";

const Profile = () => {
    const [openProfileModal, setOpenProfileModal] = useState(false)
    const handleOpenProfileModel = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);
   const {auth, tweet} = useSelector(store=> store);
   const dispatch = useDispatch();
   const {id} = useParams()
 

  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const handleFollowUser = () => {
    dispatch(followUserAction(id))
    console.log("follow user");
  };

  const [tabValue, setTabvalue] = useState("1")
  const handleTabChange = (event, newValue)=>{
    setTabvalue(newValue)
    if(newValue==false){
        console.log("Like Tweets")
    }else if(newValue == 1){
        console.log("Users Tweets")
    }
  }

  useEffect(()=>{
    dispatch(findUserById(id))
    dispatch(getUsersTweets(id))
  },[id])
  return (
    <div>
      <section className={"bg-white z-50 flex items-center sticky top-0 bg-opacity-95"}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
           {auth.findUser?.fullName}
        </h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://images.pexels.com/photos/26651189/pexels-photo-26651189/free-photo-of-portrait-of-fox.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="code with fun"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
            src={auth.findUser?.image}
          />
          {auth.findUser?.req_user ? (
            <Button
              variant="contained"
              sx={{ borderRadius: "20px" }}
              onClick={handleOpenProfileModel}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ borderRadius: "20px" }}
              onClick={handleFollowUser}
            >
              {auth.findUser?.followed ? "UnFollow" : "Follow"}
            </Button>
          )}
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">{auth.findUser?.fullName}</h1>
            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png"
                alt=""
              />
            )}
          </div>
          <h1 className="text-gray-500">
            @{auth.findUser?.fullName.split(" ").join("_").toLowerCase()}
            </h1>
        </div>

        <div className="mt-2 space-y-3">
          <p>
            {auth.findUser?.bio}
          </p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessIcon />
              <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">{auth.findUser?.location}</p>
            </div>

            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined June 2023</p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>{auth.findUser?.following?.length}</span>
              <span className="text-gray-500">Following</span>
            </div>

            <div className="flex items-center space-x-1 font-semibold">
              <span>{auth.findUser?.followers.length}</span>
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {/* {[1,1,1,1].map((item)=><TweetCard/>)} */}
              {tweet.tweets.map((item)=> (
                <TweetCard key={item.id} item={item}/>
                ))}
            </TabPanel>
            <TabPanel value="2">Users Replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>

      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal}/>
      </section>
    </div>
  );
};

export default Profile;
