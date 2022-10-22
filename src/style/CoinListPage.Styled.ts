import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 3rem;
  margin: 0 10px;
`;

export const CoinList = styled.ul``;

export const Coins = styled.li`
  background-color: #fff;
  color: ${(props) => props.theme.bgColor};
  margin: 0 0 10px 0;
  border-radius: 15px;
  font-size: 1.2rem;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const CoinImage = styled.img`
  width: 35px;
  aspect-ratio: 1/1;
  margin: 0 10px 0 0;
`;
