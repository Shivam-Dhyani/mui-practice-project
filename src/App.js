import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Rightbar from "./components/rightbar/Rightbar";
import { Box, Stack } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack
        style={{}}
        direction="row"
        justifyContent="space-between"
        // spacing={2}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default App;
