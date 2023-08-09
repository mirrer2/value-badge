import styled from 'styled-components';

export const HomeWrapper = styled.div`
  padding: 9.65rem 1.88rem 3.5rem 1.88rem;
  background-color: ${({ theme }) => theme.colors.bloomGreen};
`;

export const HomeHeader = styled.div`
  ${({ theme }) => theme.flexColumnSet()};

  & > img {
    margin-bottom: 1.61rem;
  }

  & > header {
    text-align: center;
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 18.44rem;
  }
`;

export const HomeFooter = styled.div`
  ${({ theme }) => theme.flexColumnSet()};

  & > a > button {
    width: 19.6875rem;
    height: 3.4375rem;
    border-radius: 0.4375rem;
    background-color: #000000;
    color: #ffffff;
    margin-bottom: 7.31rem;
  }

  & > img {
    margin-bottom: 0.58rem;
  }

  & > p {
    color: #8fa528;
    font-family: Poppins;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;
