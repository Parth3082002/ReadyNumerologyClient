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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`

export const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #6a1b9a;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const LogoImage = styled.img`
  height: 50px;
  width: auto;

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 480px) {
    height: 30px;
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
  color: black;

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
    border-color: #6a1b9a;
    background-color: white;
    color: black;
  }

  &::placeholder {
    color: #666;
  }
`

export const Button = styled.button`
  background: linear-gradient(135deg, #6a1b9a 0%, #9c27b0 100%);
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 2rem;
  box-shadow: 0 4px 6px rgba(106, 27, 154, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(106, 27, 154, 0.3);
    background: linear-gradient(135deg, #7b1fa2 0%, #ab47bc 100%);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(106, 27, 154, 0.2);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`

export const ResultContainer = styled.div`
  margin-top: 2rem;
  background: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;

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
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #6a1b9a, #9c27b0);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`

export const ResultItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.2rem;
  background: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`

export const ResultLabel = styled.span`
  font-weight: 600;
  color: #4a4a4a;
  font-size: 1.1rem;
  display: inline-block;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const ResultValue = styled.span`
  color: #6a1b9a;
  font-weight: 500;
  line-height: 1.6;
  display: block;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
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