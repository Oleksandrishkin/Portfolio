import { Container } from 'GlobalStyle'
import avatar from '../images/photo_2024-01-01_00-39-00.jpg'
import { AvatarImage, H1Who, SectionWho, WhoP, WhoUl } from './WhoMeAre.styled'
export const WhoMeAre = ()=>{
    return(
        <>
        <SectionWho>
            <Container>
            <AvatarImage src={avatar} alt=''/>
            <WhoUl>
                <li><H1Who>Привіт, я Олександр. Приємно познайомитись.</H1Who></li>
                <li></li>
            </WhoUl>
        
        <WhoP> Мені 14 років і я навчаюся Front-end
             розробкою вже протягом 2 років.
              Мені подобається перетворювати код
               в життя. Я вважаю себе тихо впевненим,
                природно цікавим і постійно працюю над 
                покращенням своїх навичок </WhoP>
            </Container>
        </SectionWho>
       
        </>
       
    )
}