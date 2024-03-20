import styled from "styled-components";

export const HeroH1 = styled.h1`
    color: white;
    text-align: center;
    font-size: 2.5rem; /* Збільшуємо розмір шрифту */
    font-weight: bold; /* Робимо текст жирним */
    margin-bottom: 10px; /* Додаємо відступ знизу */

    @media screen and (max-width: 1028px) {
        font-size: 2rem; /* Робимо шрифт меншим для планшетів */
    }

    @media screen and (max-width: 768px) {
        font-size: 1.8rem; /* Ще більше зменшуємо для планшетів */
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem; /* Зменшуємо для мобільних пристроїв */
    }
`;

export const HeroH2 = styled.h2`
    color: white;
    text-align: center;
    font-size: 2.5rem; /* Зменшуємо розмір шрифту */
    font-weight: normal; /* Робимо текст тоншим */
    margin-top: 10px; /* Додаємо відступ зверху */

    @media screen and (max-width: 1028px) {
        font-size: 2rem; /* Робимо шрифт меншим для планшетів */
    }

    @media screen and (max-width: 768px) {
        font-size: 1.8rem; /* Ще більше зменшуємо для планшетів */
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem; /* Зменшуємо для мобільних пристроїв */
    }
`;

export const HeroUl = styled.ul`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0; /* Забираємо внутрішні відступи від списку */
`;

export const HeroContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto; /* Робимо блок по центру */
    padding: 0 20px; /* Додаємо зовнішні відступи для адаптивності */

    @media screen and (max-width: 1028px) {
        padding: 0 15px; /* Зменшуємо зовнішні відступи для планшетів */
    }

    @media screen and (max-width: 768px) {
        padding: 0 10px; /* Ще більше зменшуємо для планшетів */
    }

    @media screen and (max-width: 480px) {
        padding: 0 5px; /* Зменшуємо для мобільних пристроїв */
    }
`;