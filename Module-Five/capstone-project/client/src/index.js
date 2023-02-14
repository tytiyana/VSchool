import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MetalPage from "./pages/Metals"
import MineralPage from "./pages/Minerals"
import GemstonePage from "./pages/Gemstones"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="metals" element={<MetalPage />} />
        <Route path="minerals" element={<MineralPage />} />
        <Route path="gemstones" element={<GemstonePage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);