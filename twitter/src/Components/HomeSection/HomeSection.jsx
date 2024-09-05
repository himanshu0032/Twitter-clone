import { Avatar, Button, Input } from "@mui/material";
import { Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Label, Store } from "@mui/icons-material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import TweetCard from '../HomePage/TweetCard.jsx'
import { useDispatch, useSelector } from "react-redux";
import { createTweet, getAllTweets } from "../../Store/Tweet/Action.js";
import { uploadToCloudnary } from "../../Utils/uploadToCloudnary.js";

const HomeSection = () => {
  const dispatch = useDispatch();
  const {tweet} = useSelector(store=> store)
  console.log("tweet:",tweet)

  const handleSubmit = (values, actions) => {
    dispatch(createTweet(values))
    actions.resetForm()
    console.log("values", values);
    setSelectedImage("")
  };
  
  useEffect(()=>{
    dispatch(getAllTweets())
  },[tweet.like,tweet.retweet])
  
  const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required"),
  });
  const [uploadingImage, setuploadingImage] = useState(false);
  const [selectImage, setSelectedImage] = useState("");

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = async (event) => {
    setuploadingImage(true);
    // const imgUrl = event.target.files[0];
    const imgUrl = await uploadToCloudnary(event.target.files[0])
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setuploadingImage(false);
  };

  
  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
      </section>
      <section className={"pb-10"}>
        <div className="flex items-start space-x-3">
          <Avatar
            alt="username"
            src="https://lh3.googleusercontent.com/X8LuYsGddUvyGns8yNt3lsqXU-etopUi9saFCQ-VMIImDW0plr-ZvBRjhnKh4V2r6UEMaBMXUBkJSD_RrHbWdmIp2RUnVJgcbiJ_S3l_kOAseWWI6JiLccLcL0cRFpnba-n4bjlOW3FvHbHdMs_ToZE"
            sx={{ width: 48, height: 48 }}
          />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="what is happening"
                  className={"border-none  outline-none text-xl bg-transparent w-full"}
                  {...formik.getFieldProps("content")}
                  style={{ margin: 0, padding: "2px 0" }}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>

              {/* <div>
                        <img src="" alt="" />
                    </div> */}
              <div className="flex justify-between items-center mt-3">
                <div className="flex space-x-2 items-center">
                  <label className="flex  items-center space-x-2 rounded-md cursor-pointer">
                    <InsertPhotoIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGoodIcon className="text-[#1d9bf0]" />
                  <TagFacesIcon className="text-[#1d9bf0]" />
                </div>
                <div>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "20px",
                      paddingY: "6px",
                      paddingX: "20px",
                      bgcolor: "#1e88e5",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </form>

            <div>
             { selectImage && <img src={selectImage} alt="" />}
            </div>
          </div>
        </div>
      </section>
      <section>
       {
      //  [1,1,1,1,1].map((item) => <TweetCard/>)
      tweet.tweets.map((item) => <TweetCard item={item}/>)
       } 
      </section>
    </div>
  );
};

export default HomeSection;
