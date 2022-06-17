import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import GifBoxSharpIcon from "@mui/icons-material/GifBoxSharp";
import { InputBase } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const Box1 = ({ addClick, isActive }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    borderRadius: "20px",
    bgcolor: "#3a3b3c",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "white",
    height: isActive ? 200 : 300,
    overflowY: "scroll",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [str, setStr] = React.useState("");
  const [gifData, setGifData] = React.useState([]);

  const [openbar, setOpenBar] = React.useState(false);
  const handleCloseBar = () => {
    setOpenBar(false);
  };
  const handleToggleBar = () => {
    setOpenBar(!openbar);
  };

  const getdata = async (e) => {
    handleToggleBar();
    setStr(e.target.value);
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=rT3kQjpkzO3oBqtG5umMk1nq8z1WBNu8&q=${str}&limit=10&offset=0&rating=g&lang=en`
    );
    response = await response.json();
    setGifData(response.data);
    handleCloseBar();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <GifBoxSharpIcon sx={{ color: "white" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <SearchOutlinedIcon sx={{ fontSize: "medium", color: "white" }} />
            <InputBase
              sx={{ ml: 1, flex: 1, color: "white" }}
              placeholder="Search gif"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={getdata}
            />
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openbar}
              onClick={handleCloseBar}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
          {gifData.map((pic, i) => {
            return (
              <div
                onClick={() => {
                  handleClose();
                  addClick(pic);
                }}
                key={i}
              >
                <img
                  style={{ width: "100%" }}
                  src={pic.images.original.url}
                  alt=""
                />
                
              </div>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
};

export default Box1;
