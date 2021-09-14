import styled from 'styled-components'

export const Container = styled.div`
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    
  `;

export const ContainerForm = styled.div`
  border: 1px solid #FC7B3A;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  align-items: center;

`;

export const Input = styled.input`
  border: 1px solid;
  border-radius: 3.0rem;
  margin-bottom: 0.8rem;
  padding: 0 0.5rem;
`;

export const Address = styled.div`
  margin: 0.5rem 0;
`;

export const Button = styled.button`
  border: 1px solid;
  padding: 0.5rem 1rem;
  border-radius: 3.0rem;
  background: #FC7B3A;
  font-weight: bold;
  cursor: pointer;
`;

export const Label = styled.label`
  margin: 0 0.5rem;
`;