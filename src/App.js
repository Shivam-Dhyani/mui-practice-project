import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Rightbar from "./components/rightbar/Rightbar";
import { Box, Stack } from "@mui/material";
import AddPost from "./components/addPost/AddPost";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <AddPost />
    </Box>
  );
};

export default App;
