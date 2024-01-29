import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./admin/Admin";
import Uzenetek from "./admin/Uzenetek";
import Szamla from "./admin/Szamla";
import Home from "./public/Home";
import NoPage from "./public/NoPage";
import Layout from "./public/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="uzenetek" element={<Uzenetek />} />
          <Route path="szamla" element={<Szamla />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
