import { useState, useEffect } from "react";
import JsonData from './data/data.json';
import Navigation from './components/navigation';
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Gallery } from "./components/gallery";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Gallery data={landingPageData.Gallery}/>
    </div>
  );
}

export default App;
