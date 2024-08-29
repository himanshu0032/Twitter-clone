import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  border: "none",
  outline: "none",
  borderRadius: 4,
};

const features = ["Priortized ranking in Converstaions and Search","How to Get Your First 1,000 Followers Across All Major Social Media Platforms",
    "5 Powerful Automations for Creators to Streamline Your Content Workflow"
];

export default function SubscriptionModal({open, handleClose}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  const [plan, setPlan] = React.useState("Annually");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-[80%] space-y-10">
              <div className="p-5 rounded-md flex items-center justify-between shadow-lg bg-slate-400">
                <h1 className="text-xl pr-5">
                  {" "}
                  Early Bird Offer!!! Hurry Up. Say Hi to new Offer
                </h1>
                <img
                  className="w-24 h-24"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>

              <div className="flex justify-between border rounded-full px-5 py-3  border-gray-500">
                <div>
                  <span
                    onClick={() => setPlan("Annually")}
                    className={`${
                      plan === "Annually" ? "text-black" : "text-gray-400"
                    } cursor-pointer`}
                  >
                    Annually
                  </span>
                  <span className="text-green-500 text-sm ml-5">SAVE 12%</span>
                </div>
                <p
                  onClick={() => setPlan("monthly")}
                  className={`${
                    plan === "monthly" ? "text-black" : "text-gray-400"
                  } cursor-pointer`}
                >
                  Monthly
                </p>
              </div>

              <div className="space-y-3">
                {features.map((item) => (
                  <div className="flex items-center space-x-5">
                    <FiberManualRecordIcon
                      sx={{ width: "7px", height: "7px" }}
                    />
                    <p className="text-xs">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="cursor-pointer flex justify-center bg-gray-900 text-white rounded-full  px-5 py-3">
                <span className="line-through italic">₹7000.00</span>
                <span className="px-5">₹6000.00</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
