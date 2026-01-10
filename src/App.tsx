import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { IDEpage } from "./pages/IDEpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/ide" element={<IDEpage></IDEpage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
