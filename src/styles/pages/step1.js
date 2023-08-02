import styled from 'styled-components';

export const Step1Wrapper = styled.div`
  height: 100vh;
  background-color: #fcfcfc;
  padding: 1.31rem 1.81rem 2.41rem 1.81rem;
`;

export const Step1Header = styled.header`
  margin-bottom: 5.19rem;

  & > a > img {
    margin-bottom: 1.06rem;
    transition: opacity 200ms ease-in;
  }

  & > a > img:hover {
    opacity: 50%;
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
    color: #010101;
    font-family: Pretendard Variable;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.875rem;
    letter-spacing: -0.03125rem;
  }
`;

export const Step1Form = styled.form`
  text-align: center;
  margin-bottom: 2.81rem;

  & > div {
    ${({ theme }) => theme.flexSet('space-around')};
  }

  & > div > input {
    text-align: center;
    width: 6rem;
    height: 6rem;
    border-radius: 0.4375rem;
    border: 1px solid #d8d8d8;
    background: #ffffff;
    color: #bbb;
    font-family: Montserrat;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    margin-bottom: 20.38rem;
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
    opacity: 50%;
  }
`;

export const Step1Footer = styled.div`
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
