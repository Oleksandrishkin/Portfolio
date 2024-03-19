import styled from "styled-components";
export const H1Who = styled.h1`
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
`
export const WhoP = styled.h2`
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

export const WhoUl = styled.ul`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0; /* Забираємо внутрішні відступи від списку */
`;
export const AvatarImage = styled.img`
width: 200px;
height: 200px;
    border-radius: 50%; /* Круглий аватар */
    display: block;
    margin: 0 auto; /* Центрування зображення */
    max-width: 100%; /* Зображення не може виходити за межі контейнера */
    height: auto; /* Зберігає пропорції */
`;
export const SectionWho = styled.section`
    position: relative; /* Встановлюємо позицію */
    top: 500px; /* Опускаємо секцію на 200px */
    text-align: center; /* Текст по центру */
`;