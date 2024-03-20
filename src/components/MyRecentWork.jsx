import { Container } from "GlobalStyle"
import Weather from '../MyWork/React App - Google Chrome 20.03.2024 12_54_08.png'
import PageTtile from '../MyWork/Page title - Google Chrome 20.03.2024 12_55_21.png'
import XboxGame from '../MyWork/Без имени - Google Chrome 20.03.2024 12_53_12.png'
import WebStudio from '../MyWork/Web Studio - Google Chrome 20.03.2024 12_53_32.png'
import GuesHouse from '../MyWork/Без имени - Google Chrome 20.03.2024 12_53_49.png'
import TopGames from '../MyWork/Без имени - Google Chrome 20.03.2024 12_54_20.png'
import { Card, CardLink, SectionWork, WorkCard, WorkContainer, WorkH1 } from "./Css/MyWork.styled"
export const MyRecentWork = ()=>{
    return(
        <SectionWork>
        <WorkH1>Мої роботи</WorkH1>
        <WorkContainer>
            <WorkCard>
                <img src={Weather} alt='' />
                <span> Це веб-сайт про погоду де можна додати своє місто і відслідковувати детально погоду</span>
                <CardLink href="https://potyomko.github.io/weather-app/">відвідайте веб-сайт</CardLink>
            </WorkCard>
            <WorkCard>
                <img src={PageTtile} alt='' />
                <span> Це веб-сайт на якому можна знайти найкращі події у всьому світі!</span>
                <CardLink href="https://yorabest.github.io/Event-booster-project/">відвідайте веб-сайт</CardLink>
            </WorkCard>
            <WorkCard>
                <img src={XboxGame} alt='' />
                <span>Це веб-сайт, на якому можна дізнатися про всі новинки геймінгової індустрії та ознайомитися з усіма поколіннями ігрових консолей Xbox</span>
                <CardLink href="https://oleksandrishkin.github.io/xbox-game/">відвідайте веб-сайт</CardLink>
            </WorkCard>
            <WorkCard>
                <img src={WebStudio} alt='' />
                <span> Це веб-сайт на якомуможна прийняти ефективні рішення для вашого бізнесу!</span>
                <CardLink href="https://oleksandrishkin.github.io/goiteens-homework-form/">відвідайте веб-сайт</CardLink>
            </WorkCard>
            <WorkCard>
                <img src={GuesHouse} alt='' />
                <span>Це веб-сайт, на якому можна замовити проживання в комфортному будинку!</span>
                <CardLink href="https://oleksandrishkin.github.io/Guest-hause/">відвідайте веб-сайт</CardLink>
            </WorkCard>
            <WorkCard>
                <img src={TopGames} alt='' />
                <span>Це веб-сайт, на якому можна дізнатися про самі най популярніші ігри!</span>
                <CardLink href="https://irynasokolova-quanandrya.github.io/super-7-team-proj/">відвідайте веб-сайт</CardLink>
            </WorkCard>
        </WorkContainer>
    </SectionWork>
    )
}