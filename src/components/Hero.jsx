import { Container } from "GlobalStyle"
import { HeroBackground, HeroH1, HeroUl } from "Hero.styled"

export const Hero = ()=>{
    return(
<section>
    <Container>
        <HeroUl>
            <li><HeroH1>Frontend Developer </HeroH1></li>
            <li><HeroH1>Я проектую та кодую чудові прості речі, і мені подобається те, що я роблю.</HeroH1></li>
        </HeroUl>
    
        
    </Container>
</section>
       
       
    )
}