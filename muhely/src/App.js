import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./adminPages/Admin";
import Uzenetek from "./adminPages/Uzenetek";
import Szamla from "./adminPages/Szamla";
import Home from "./publicPages/Home";
import NoPage from "./publicPages/NoPage";
import Layout from "./publicPages/Layout";
import Folyamatban from "./adminPages/Folyamatban";
import Naptar from "./adminPages/Naptar";
import Akciok from "./publicPages/Akciok";
import Login from "./publicPages/Login";
import Munkák from "./adminPages/Munkak";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="uzenetek" element={<Uzenetek />} />
          <Route path="folyamatban" element={<Folyamatban />} />
          <Route path="munkak" element={<Munkák />} />
          <Route path="naptar" element={<Naptar />} />
          <Route path="akciok" element={<Akciok />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
