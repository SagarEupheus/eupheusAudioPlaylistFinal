import "./App.css";
import Sidebar from "./Components/Sidebar.js";
// import Audio from "./Pages/Audio.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
// import { GiHamburgerMenu } from "react-icons/gi";
import { createContext, useRef, useState } from "react";
import { FaBars, FaHamburger } from "react-icons/fa";
import Playlist, { ContextIconsPlay } from "./Pages/Playlist";
// import { AudioProvider } from "./Pages/context";
export const AudioContext = createContext()

function App() {
  const [sidebarshow, setShowsidebar] = useState(false);

  const toggle = (status) => {
    setShowsidebar(status);
  };

  // const playlistRef = useRef();


  return (
    <>
      <AudioContext.Provider value="demo">
        <BrowserRouter>
          <div className="main flex relative ">
            <Sidebar state={sidebarshow} toggle={toggle} />
            <Routes>
              {/* <Route path="/" element={<Home />}></Route> */}
              <Route path="/" element={<Playlist />}></Route>
            </Routes>
          </div>
          <FaBars
            style={{ marginLeft: "auto" }}
            className="lg:hidden md:hidden absolute top-4 left-4 text-[#530790]"
            onClick={toggle}
          />
          <Footer />
        </BrowserRouter>
      </AudioContext.Provider>
    </>
  );
}

export default App;

