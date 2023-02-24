import { Box } from "@mui/material";
import Post from "../post/Post";

const Feed = () => {
  return (
    <Box
      p={2}
      sx={{
        ml: { xs: 0, lg: 2 },
        mr: { xs: 0, lg: 2 },
        flex: { xl: 4, xs: 3 },
      }}
    >
      <Post />
      <Post />
      {/* <Post /> */}
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </Box>
  );
};

export default Feed;
