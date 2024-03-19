import { Container } from "GlobalStyle"

import { SectionSkill, SkillH1, SkillLink, SkillP, SkillUl, UlLink } from "./MySkill.styled"
export const MySkill = ()=>{
    return(
        <SectionSkill>
            <Container>
              
                <SkillUl>
                    <li><SkillH1>
                Frontend Developer
                </SkillH1>
                </li>
                    <li><SkillP>
                    Мені подобається кодувати речі з нуля, і мені подобається втілювати ідеї в життя в браузері.
</SkillP></li>
                </SkillUl>
                
<UlLink>
<SkillH1>
Мови, якими я володію:
</SkillH1>
<SkillLink href="https://uk.wikipedia.org/wiki/HTML">
Html
</SkillLink>
<SkillLink href="https://uk.wikipedia.org/wiki/CSS">
css
</SkillLink>
<SkillLink href="https://uk.wikipedia.org/wiki/JavaScript">
Java Script

</SkillLink>
<SkillLink href="https://react.dev/">
React
  
    

</SkillLink>
</UlLink>


            </Container>
        </SectionSkill>
    )
}