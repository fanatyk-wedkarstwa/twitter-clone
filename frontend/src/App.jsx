import Home from "./Pages/Home.jsx";
import Container from "@mui/material/Container";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
