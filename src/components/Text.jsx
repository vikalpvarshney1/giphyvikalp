import {  IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";

import Box1 from "./Box";
const Text = ({ addClick, handleChange, handleEnter, handleSend, isActive, }) => {
  return (
    <div>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          width: isActive ? "92.5vw" : "46.5vw",
          background: "gray",
          color: "white",
        }}
      >
        <IconButton sx={{ p: "10px", color: "white" }} aria-label="menu">
          <AccountCircleIcon />
        </IconButton>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            color: "white",
            borderRadius: "10px",
            border: "1px solid white",
            padding: "0 10px",
          }}
          placeholder="Write a comment"
          //   value={str}
          id="commentbox"
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <Box1 addClick={addClick} isActive={isActive} />
        <IconButton sx={{ p: "10px", color: "white" }} aria-label="gif">
          {isActive ? <SendIcon onClick={handleSend}></SendIcon> : null}
          {/* <SearchIcon /> */}
        </IconButton>
      </Paper>
    </div>
  );
};

export default Text;
