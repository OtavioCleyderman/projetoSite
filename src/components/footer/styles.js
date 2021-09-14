import styled from 'styled-components'

export const Container = styled.div`
    margin: 0;
    padding: 0;
    border: none;
    width: 100%;
    height: 5.0rem;
    text-decoration: none;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    background: #FC7B3A;
`;

export const Author = styled.a`
    color: #000;
    font-weight: bold;
    text-decoration: underline;
`;

export const Company = styled.a`
    color: #000;
    font-weight: bold;
`;