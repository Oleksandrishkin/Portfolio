import styled from "styled-components";
import { Container } from "GlobalStyle";

export const SectionSkill = styled.section`
    position: relative;
    top: 700px; /* Змінив з 500px на 700px для кращого адаптиву */
    text-align: center;
`;

export const SkillUl = styled.ul`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
`;

export const SkillH1 = styled.h1`
    color: white;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem; /* Змінив з 10px на 1rem */
    
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

export const SkillP = styled.p`
    color: white;
    text-align: center;
    font-size: 1.5rem; /* Зменшив з 2.5rem на 1.5rem для кращого вигляду */
    font-weight: normal;
    margin-top: 1rem; /* Змінив з 10px на 1rem */
    
    @media screen and (max-width: 1028px) {
        font-size: 1.3rem; /* Зменшив для планшетів */
    }

    @media screen and (max-width: 768px) {
        font-size: 1.2rem; /* Зменшив для планшетів */
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem; /* Зменшив для мобільних пристроїв */
    }
`;

export const SkillLink = styled.a`
    color: white;
    text-decoration: none;
    margin: 0.5rem; /* Додав маржин для розділення посилань */
    font-size: 1.2rem; /* Зменшив розмір шрифту для посилань */
    
    @media screen and (max-width: 768px) {
        font-size: 1rem; /* Зменшив для планшетів */
    }
    
    @media screen and (max-width: 480px) {
        font-size: 0.9rem; /* Зменшив для мобільних пристроїв */
    }

    &:hover {
        text-decoration: underline; /* Додав підкреслення при наведенні */
    }
`;

export const UlLink = styled.ul`
    top: 300px; /* Змінив позицію на 300px */
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
`;