import { Hero } from "components/Hero";
import { GlobalStyle } from "../GlobalStyle";
import { Header } from "./Header";
import { WhoMeAre } from "./WhoMeAre";
import { MySkill } from "./MySkill";
import { MyRecentWork } from "./MyRecentWork";
import { Collaborated } from "./Collaborated";
import { Footer } from "./Footer";


export const App = () => {
  return (
    <>

<Header/>
      <Hero/>
      <WhoMeAre/>
      <MySkill/>
      <MyRecentWork/>
      <Collaborated/>
      <Footer/>
      <GlobalStyle />
    </>
  );
};