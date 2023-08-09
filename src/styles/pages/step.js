import styled from 'styled-components';

const hasValue = value => value.trim() !== '';

export const StepWrapper = styled.div`
  background-color: #fcfcfc;
`;

export const StepHeader = styled.header`
  padding: 1.31rem 1.81rem ${props => (props.$showResult ? '3.31rem' : '5.19rem')} 1.81rem;

  & > button > img {
    margin-bottom: 1.06rem;
  }

  & > div {
    ${({ theme }) => theme.flexSet('space-between')};
    margin-bottom: 0.75rem;
  }

  & > div > h1 {
    color: ${({ theme }) => theme.colors.bloomGreen};
    font-family: Montserrat;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & > p {
    width: 100&;
    color: #010101;
    font-family: Pretendard Variable;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.875rem;
    letter-spacing: -0.03125rem;
  }
`;

export const StepForm = styled.form`
  text-align: center;
  padding: 0 1.81rem 2.81rem 1.81rem;

  & > div {
    ${({ theme }) => theme.flexSet('space-between', 'start')};
  }

  & > div > div {
    ${({ theme }) => theme.flexColumnSet()};
  }

  & > div > div > img {
    width: 6rem;
    height: 6rem;
    margin-bottom: 1.19rem;
  }

  & > div > div > input::placeholder {
    color: #bbb;
  }

  & > div > input::placeholder {
    color: #bbb;
  }

  & > button {
    width: 19.6875rem;
    height: 3.4375rem;
    border-radius: 0.4375rem;
    background-color: ${({ theme }) => theme.colors.bloomGreen};
    color: #ffffff;
    text-align: center;
    font-family: Pretendard Variable;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: -0.03125rem;
    opacity: ${props => (props.$isNumInputs | props.$isTextInputs ? '100%' : '50%')};
  }
`;

export const Step1FormBtn = styled.button`
  width: 19.6875rem;
  height: 3.4375rem;
  border-radius: 0.4375rem;
  background-color: ${({ theme }) => theme.colors.bloomGreen};
  color: #ffffff;
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: -0.03125rem;
  margin-top: 18.44rem;
  opacity: ${props => (props.$isNumInputs | props.$isTextInputs ? '100%' : '50%')};
`;

export const StepFormInput = styled.input`
  text-align: center;
  width: 6rem;
  height: 6rem;
  border-radius: 0.4375rem;
  border: 1px solid #d8d8d8;
  background: #ffffff;
  font-family: Montserrat;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin-bottom: 0.75rem;
  transition: border-color 200ms ease-in;

  &:focus {
    outline: none;
  }
`;

export const StepFormError = styled.p`
  visibility: ${props => (props.$showError ? 'visible' : 'hidden')};
  color: #ed2b2b;
  text-align: start;
  font-family: Pretendard Variable;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1875rem;
  letter-spacing: -0.03125rem;
`;

export const StepFormTextarea = styled.textarea`
  text-align: center;
  width: 6rem;
  height: auto;
  padding: 0.5rem 0.25rem;
  border-radius: 0.3125rem;
  border: 1px solid #d8d8d8;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.03125rem;
  margin-bottom: 16.75rem;
  resize: none;
  transition: border-color 200ms ease-in;

  &:focus {
    outline: none;
    border-color: black;
  }

  ${props =>
    hasValue(props.value) &&
    `
    border-color: #DAE233;
  `}
`;

export const StepFooter = styled.div`
  padding: 1.31rem 1.81rem 2.41rem 1.81rem;

  & > div:first-child {
    width: 100%;
    height: 0.0625rem;
    background: #d9d9d9;
    margin-bottom: 0.78rem;
  }

  & > div:last-child {
    ${({ theme }) => theme.flexSet('space-between')};
  }

  & > div > p {
    color: #aaa;
    text-align: right;
    font-family: Montserrat;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.625rem;
    letter-spacing: -0.0125rem;
  }

  & > div > img {
    width: 1.00888rem;
    height: 0.99994rem;
    opacity: 50%;
  }
`;

export const ResultHeader = styled.div`
  ${({ theme }) => theme.flexColumnSet('start')};

  & > div:first-child {
    ${({ theme }) => theme.flexSet('space-between')};
    width: 100%;
    margin-bottom: 2.25rem;
  }

  & > div:last-child {
    ${({ theme }) => theme.flexSet()};
    width: 19.6875rem;
    height: 2.625rem;
    border-radius: 0.25rem;
    background: #f5f5f5;
    color: #444;
    font-family: Pretendard Variable;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.9375rem;
    letter-spacing: -0.03125rem;
  }

  & > div > h1 {
    color: ${({ theme }) => theme.colors.bloomGreen};
    font-family: Montserrat;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ResultImageWrapper = styled.div`
  transform: ${props => (props.$showResult ? 'translateY(-200%)' : 'translateY(0)')};
  margin-bottom: 6rem;
  background-color: #fcfcfc;
`;

export const ResultImageHeader = styled.h1`
  color: ${({ theme }) => theme.colors.bloomGreen};
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 1.56rem 2rem 0 2rem;
  margin-bottom: 4.62rem;
`;

export const ResultImage = styled(StepForm)`
  ${({ theme }) => theme.flexSet('space-between', 'start')};
  margin-bottom: 4.69rem;

  & > div > div > div {
    ${({ theme }) => theme.flexSet()};
    width: 6rem;
    padding: 0.5rem 0.75rem;
    border-radius: 1.125rem;
    border: 1px solid #d8d8d8;
  }

  & > div > div > div > p {
    width: 4.75rem;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.03125rem;
  }
`;

export const ResultFooter = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  padding: 0 1.25rem 1.25rem 1.88rem;

  & > p {
    color: #aaa;
    text-align: right;
    font-family: Montserrat;
    font-size: 0.5625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.625rem;
    letter-spacing: -0.01125rem;
  }

  & > img {
    width: 0.81969rem;
    height: 0.81244rem;
    opacity: 50%;
  }
`;

export const ResultBtn = styled.div`
  ${({ theme }) => theme.flexSet()};
  margin-bottom: 2.81rem;

  & > button {
    width: 19.6875rem;
    height: 3.4375rem;
    border-radius: 0.4375rem;
    background-color: ${({ theme }) => theme.colors.bloomGreen};
    color: #ffffff;
    font-family: Pretendard Variable;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: -0.03125rem;
  }
`;
