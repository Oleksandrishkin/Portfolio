import styled from "styled-components";
export const FooterContainer = styled.footer`
    background-color: black;
    color: white;
    text-align: center;
    padding-top: 140px;
    padding-bottom: 120px;
    position: relative;
    top: 1000px;
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FooterP = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    top: -100px;
    position: relative;
    @media screen and (max-width: 1028px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const SocialIcons = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

export const SocialIcon = styled.li`
    margin: 0;
    padding: 0;
    margin-right: 10px;
`;

export const SocialLink = styled.a`
    display: inline-block;
`;

export const SocialImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const LogoFooter = styled.img`
    width:100px;
height: 100px;
position: relative;
top: -100px
`