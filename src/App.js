import { Button, Typography } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

function App() {
  return (
    <div>
      <h1>MUI Learning App</h1>
      <Button startIcon={<Delete />} color="error" variant="contained">
        Delete Post
      </Button>
      <Button variant="contained">Post</Button>
      <Button startIcon={<Add />} color="success" variant="contained">
        Add New Post
      </Button>
      <Typography></Typography>
    </div>
  );
}

export default App;
