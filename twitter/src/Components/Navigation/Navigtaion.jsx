import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Auth/Action";

const Navigtaion = () => {
    const navigate = useNavigate();
    const {auth} = useSelector(store=>store);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogout = ()=>{
      console.log("logout")
      handleClose()
      dispatch(logout())
    }

  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <svg
            height="30"
            width="30"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>

        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div className="cursor-pointer space-x-3  flex items-center" onClick={()=> item.title==="Profile"?navigate(`/profile/${auth.user?.id}`)
        :navigate(item.path)}>
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="py-10">
            <Button 
            sx={{width:"100%", borderRadius:"29px", py:"15px", bgcolor:"#1e88e5"}}  variant='contained'>
                       Tweet
            </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
         <Avatar alt="username" src="https://lh3.googleusercontent.com/X8LuYsGddUvyGns8yNt3lsqXU-etopUi9saFCQ-VMIImDW0plr-ZvBRjhnKh4V2r6UEMaBMXUBkJSD_RrHbWdmIp2RUnVJgcbiJ_S3l_kOAseWWI6JiLccLcL0cRFpnba-n4bjlOW3FvHbHdMs_ToZE"/>
          <div>
            <p>{auth.user?.fullName}</p>
            <span className='opacity-80'>@{auth.user?.fullName.split(" ").join("_").toLowerCase()}</span>
          </div>
          
          <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon/>
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
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
        </div>
      </div>

    </div>
  );
};

export default Navigtaion;
