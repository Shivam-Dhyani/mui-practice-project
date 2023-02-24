import { Add } from "@mui/icons-material";
import {
  Box,
  Fab,
  IconButton,
  Modal,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const AddPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(event) => setOpen(true)}
        title="Add New Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 45px)", md: 20 },
        }}
      >
        <IconButton>
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
        </IconButton>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(event) => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="grey" textAlign="center">
            Create Post
          </Typography>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
