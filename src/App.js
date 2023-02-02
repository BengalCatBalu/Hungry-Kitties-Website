import { ThemeProvider } from "styled-components";
import Navigation from "./Components/Navigation";
import About from "./Components/MainPage/sections/About/About";
import Home from "./Components/MainPage/sections/Home/Home";
import Roadmap from "./Components/Roadmap/Roadmap";
import Team from "./Components/MainPage/sections/Team";
import GlobalStyles from "./Styles/GlobalStyles";
import Faq from "./Components/MainPage/sections/Faq/Faq";
import { light } from './Styles/Themes'
import Footer from "./Components/Footer";
import { Routes, Route } from 'react-router-dom'
import Tools from "./Components/Tools/Tools";
import MainPage from "./Components/MainPage/MainPage";
import Banner from "./Components/Banner";
import './App.css'
import './reloader.js'
import Preloader from "./Icons/Preloader";


function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <div className="preloader">
          <Preloader/>
          <script src="./reloader.js"></script>
        </div>
        <Navigation />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/Roadmap' element={<Roadmap />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}
export default App;
