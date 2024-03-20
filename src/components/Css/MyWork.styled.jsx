import styled from "styled-components";

export const WorkH1 = styled.h1`
    color: white;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;

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

export const WorkContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const WorkCard = styled.div`
    width: calc(33.33% - 20px);
    margin: 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        transition: transform 0.3s ease, filter 0.3s ease; /* Додайте filter для кольорової тіні */
    }

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        color: white;
        transition: opacity 0.3s ease;
    }

    a {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        padding: 5px 10px;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        text-decoration: none;
        border-radius: 5px;
        transition: opacity 0.3s ease;
    }

    &:hover {
        img {
            transform: scale(1.1);
            filter: brightness(20%); /* Додайте яскравість тіні */
        }

        span {
            opacity: 1;
        }

        a {
            display: block;
        }
    }

    @media screen and (max-width: 1028px) {
        width: calc(50% - 20px);
    }

    @media screen and (max-width: 480px) {
        width: calc(100% - 20px);
    }
`;

export const CardLink = styled.a`
    display: none;
`;

export const SectionWork = styled.section`
    position: relative;
    top: 800px;
`;

export const SectionGoIt = styled.section`
        position: relative;
    top: 900px;

`