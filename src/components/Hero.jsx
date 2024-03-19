import { Container } from "GlobalStyle"
import { HeroBackground, HeroContainer, HeroH1, HeroH2, HeroUl } from "Hero.styled"

export const Hero = ()=>{
    return(
        <section>
        <HeroContainer>
            <HeroUl>
                <li><HeroH1>Frontend Developer</HeroH1></li>
                <li><HeroH2>Я проектую та кодую чудові прості речі, і мені подобається те, що я роблю.</HeroH2></li>
            </HeroUl>
        </HeroContainer>
    </section>
       
       
    )
}