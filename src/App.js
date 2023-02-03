import styled, { ThemeProvider } from "styled-components";
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
import Button from "./Components/Button";
import Typewriter from 'typewriter-effect'


const ButCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40vh;
  font-size: 3vw;
  font-weight: 700;
  @media(max-width: 64em) {
    font-size: 5vw;
    margin-top: 35vh;
  }
`
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <div className="preloader">
          <Preloader />
          <ButCont>
            <Typewriter
              options={{
                autostart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.typeString('<span className = "text-1">Loading...</span>')
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </ButCont>
          <script src="./reloader.js"></script>
        </div>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/Roadmap' element={<Roadmap />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
export default App;
