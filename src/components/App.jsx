import { Hero } from "components/Hero";
import { GlobalStyle } from "../GlobalStyle";
import { Header } from "./Header";
import { WhoMeAre } from "./WhoMeAre";
import { MySkill } from "./MySkill";


export const App = () => {
  return (
    <>

<Header/>
      <Hero/>
      <WhoMeAre/>
      <MySkill/>
      <GlobalStyle />
    </>
  );
};