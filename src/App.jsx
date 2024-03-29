import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./pages/Auth/Layout.jsx";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
