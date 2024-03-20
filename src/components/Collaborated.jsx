import GoIt from '../images/image_5dc568cd5e8599.97626059.jpg'
import { Card, CardLink, SectionGoIt, SectionWork, WorkCard, WorkContainer, WorkH1 } from "./Css/MyWork.styled"
export const Collaborated = ()=>{
    return(
        <SectionGoIt>
        <WorkH1>Я дуже пишаюся тим, що навчаюся в цій ІТ компанії</WorkH1>
        <WorkContainer>
            <WorkCard>
                <img src={GoIt} alt='' />
                <span> GoITeens — це якісна IT-освіта для школярів в Україні</span>
                <CardLink href="https://courses-all.goiteens.com/v-gl-v3/?utm_source=google&utm_medium=cpc&utm_campaign=brand&gad_source=1&gclid=CjwKCAjwkuqvBhAQEiwA65XxQMFc8S1UTz2uwY18dxEkTKOnJMs5ieCblvAiSaJdUTjVTXXC8GJ_PhoC-YkQAvD_BwE">відвідайте веб-сайт</CardLink>
            </WorkCard>
           
        </WorkContainer>
    </SectionGoIt>
    )
}