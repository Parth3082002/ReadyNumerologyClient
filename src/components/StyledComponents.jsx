import styled from '@emotion/styled'

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`

export const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #6a1b9a;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const Form = styled.form`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
  background-color: white;
  color: #333;

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
    border-color: #6a1b9a;
  }
`

export const Button = styled.button`
  background-color: #6a1b9a;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color:rgb(90, 24, 131);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`

export const ResultContainer = styled.div`
  margin-top: 2rem;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-top: 1.5rem;
  }
`

export const ResultTitle = styled.h2`
  color: #6a1b9a;
  margin-bottom: 1rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
`

export const ResultItem = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 5px;

  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-bottom: 0.75rem;
  }
`

export const ResultLabel = styled.span`
  font-weight: bold;
  color: #333;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

export const ResultValue = styled.span`
  color: #6a1b9a;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

export const SuccessMessage = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
` 