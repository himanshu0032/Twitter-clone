import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { useFormik } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline:'none',
  borderRadius:4
};

export default function ReplyModal({handleClose,  open}) {
  console.log("open is ", open)
  const [uploadingImage, setuploadingImage] = React.useState(false);
  const [selectImage, setSelectedImage] = React.useState("");

  const navigate = useNavigate()
  const handleSubmit = (values) => {
    console.log("handle submit",values)
  }
  const formik = useFormik({
    initialValues:{
      content:"",
      image:"",
      tweetId:4
    },
    onSubmit:handleSubmit
  })

  const handleSelectImage = (event) => {
    setuploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setuploadingImage(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="flex space-x-5 ">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://pbs.twimg.com/media/GV1HWEtWgAAcyg2?format=jpg&name=small"
        />
        <div className="w-full">
          <div className="flex justify-center items-center">
            <div className="flex cursor-pointer items-center space-x-2 w-full">
              <span className="font-semibold">Code with Fun</span>
              <span className="text-gray-600">@codewithfun .2m</span>
              <img
                className="ml-2 w-5 h-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png"
                alt=""
              />
            </div>
          </div>
          <div className="mt-2">
            <div onClick={()=> navigate(`/tweet/${3}`)} className="cursor-pointer">
              <p className="mb-2  text-left">
                Himanshu want to teach on youtube about Full Stack Dev
              </p>
              
            </div>

          </div>
        </div>
      </div>

      <section className={"py-10"}>
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
          </div>
        </div>
      </section>

        </Box>
      </Modal>
    </div>
  );
}