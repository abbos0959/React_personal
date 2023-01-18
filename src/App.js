import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Navbar from "./components/navBar";
import particlesConfig from "./helpers/particlesConfig";
import Theme from "./components/theme";
import Portfolio from "./containers/portfolio";

function App() {
   const particlesInit = async (main) => {
      await loadFull(main);
   };

   const location = useLocation();
   const renderParticleJsIfCurrentPageIsHomePage = location.pathname === "/";

   return (
      <div className="App">
         {/* particles js */}
         {renderParticleJsIfCurrentPageIsHomePage && (
            <Particles id="particles" options={particlesConfig} init={particlesInit} />
         )}
         {/* navbar component */}
         <div className="App__navbar-wrapper">
            <Navbar />
         </div>
         {/* main page content */}
         <div className="App__main-content-wrapper">
            <Theme />
            <Routes>
               {/* create all routes */}

               <Route path="/" index element={<Home />} />

               <Route path="/abbos-akromovich/about" element={<About />} />
               <Route path="/abbos-akromovich/skills" element={<Skills />} />
               <Route path="/abbos-akromovich/portfolio" element={<Portfolio />} />

               <Route path="/abbos-akromovich/resume" element={<Resume />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
