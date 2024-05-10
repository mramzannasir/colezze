import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./contexts/sidebarContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <SidebarProvider>
          <Navbar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </SidebarProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
