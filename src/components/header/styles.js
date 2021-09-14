import styled from 'styled-components'

export const Container = styled.div`
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
`;

export const Img = styled.img`
    width: 100%;
    height: 35.0rem;    
`;

export const NavMenu = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const Ul = styled.ul`
    display: flex;
    
`;

export const Li = styled.li`
    display: flex;
    margin: 0 1rem;
    padding: 0.5rem;
    border-radius: 0.8rem;
    -webkit-transition: 0.5s ease-in;
    -moz-transition: 0.5s ease-in;
    -o-transition: 0.5s ease-in;
    transition: 0.5s ease-in;

    &:hover{
        background: #FC773A;
        font-weight: bold 
        -webkit-transition: 0.5s ease-out;
        -moz-transition: 0.5s ease-out;
        -o-transition: 0.5s ease-out;
        transition: 0.5s ease-out;
    }
`;

export const Link = styled.a`
    color: #000;
    font-size: 2rem;
`;