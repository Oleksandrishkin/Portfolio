import { Container } from "GlobalStyle"
import { Logo } from "./Css/Header.styled"
import oleksandrishkin from '../images/1127861_original-removebg-preview.svg'
import TikTok from '../Sotial/icons8-tiktok.svg'
import Telegram from '../Sotial/icons8-telegram-app.svg'
import FaceBook from '../Sotial/icons8-facebook.svg'
import Instagram from '../Sotial/icons8-instagram.svg'
import { FooterContainer, FooterP, LogoFooter, SocialIcon, SocialIcons, SocialImg, SocialLink, StyledContainer } from "./Css/Footer.styled"
export const Footer = ()=>{
    return(
        <FooterContainer>
        <StyledContainer>
            <LogoFooter src={oleksandrishkin} />
            <FooterP>
                Між роками сірого животіння та миттю надії, я обираю надію.
            </FooterP>
            <SocialIcons>
                <SocialIcon>
                    <SocialLink href="https://t.me/Oleksandr1shkin">
                        <SocialImg src={Telegram} alt="Telegram" />
                    </SocialLink>
                </SocialIcon>
                <SocialIcon>
                    <SocialLink href="https://www.instagram.com/oleksandr1shkin/?igsh=MTViY2hzaGFtbWpvOQ%3D%3D">
                        <SocialImg src={Instagram} alt="Instagram" />
                    </SocialLink>
                </SocialIcon>
                <SocialIcon>
                    <SocialLink href="https://www.tiktok.com/@oleksandr1shkin?is_from_webapp=1&sender_device=pc">
                        <SocialImg src={TikTok} alt="TikTok" />
                    </SocialLink>
                </SocialIcon>
                <SocialIcon>
                    <SocialLink href="https://www.facebook.com/profile.php?id=100025798309656">
                        <SocialImg src={FaceBook} alt="Facebook" />
                    </SocialLink>
                </SocialIcon>
            </SocialIcons>
        </StyledContainer>
    </FooterContainer>
    )
}