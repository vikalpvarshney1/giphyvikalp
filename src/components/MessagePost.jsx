import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Tooltip from "@mui/material/Tooltip";
import Text from "./Text";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
const Comment = styled.p`
  font-size: 1em;
  text-align: left;
  color: white;
  display: flex;
  justify-content: space-between;
`;
const Image = styled.img`
  max-height: 100px;
  max-width: 100px;
`;

const MessagePost = () => {

  const isActive = useMediaQuery("(max-width : 600px");
  const [allpost, setAllPost] = React.useState([]);
  const [str, setStr] = useState("");


  const removeComment = (comment) => {
    let i = allpost.indexOf(comment);
    allpost.splice(i, 1);
    setAllPost([...allpost]);
  };
  function addClick(pic) {
    setAllPost([...allpost, pic]);
  }
  const handleChange = (e) => {
    setStr(e.target.value);
  };
  const removeGif = (comment) => {
    let newArr = allpost.filter((item) => {
      return item.id !== comment.id;
    });

    setAllPost([...newArr]);
  };
  const handleEnter = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      setAllPost([...allpost, str]);
      e.target.value = "";
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    setAllPost([...allpost, str]);
    document.getElementById("commentbox").value = "";
  };

  return (
    <div>
      <Container
        sx={{
          width: isActive ? "100vw" : "50vw",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            bgcolor: "purple",
            height: "85vh",
            overflowY: "scroll",
            color: "whitesmoke",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            padding: "25px",
          }}
        >
          <img
            style={{ height: isActive ? "70%" : "100%" }}
            src="./codemancers.jpg"
            alt=""
          />

          {allpost.map((comment, i) => {
            return comment.images ? (
              <div key={i}>
                <hr style={{ color: "white", width: "100%" }} />
                <Image
                  onClick={() => removeGif(comment)}
                  src={comment.images.original.url}
                  alt=""
                />
              </div>
            ) : (
              <div key={i}>
                <hr style={{ color: "white", width: "100%" }} />

                <Comment>
                  {comment}
                  <Tooltip title="Delete Comment">
                    <DeleteOutlineOutlinedIcon
                      onClick={() => removeComment(comment)}
                      sx={{
                        fontSize: "medium",
                        marginLeft: "10px",
                        color: "red",
                      }}
                    ></DeleteOutlineOutlinedIcon>
                  </Tooltip>
                </Comment>
              </div>
            );
          })}
        </Box>
        <Text
          addClick={addClick}
          handleChange={handleChange}
          handleEnter={handleEnter}
          handleSend={handleSend}
          isActive={isActive}
        />
      </Container>
    </div>
  );
};

export default MessagePost;
