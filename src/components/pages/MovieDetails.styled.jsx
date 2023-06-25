import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 10px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    color: orangered;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieInfo = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const MovieText = styled.div`
  margin: 20px 0;
  @media screen and (min-width: 1280px) {
    margin-left: 30px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 10px;
  margin: 20px 0 20px 0;
`;
export const TitleInformation = styled.h2`
  margin: 20px 0 20px 0;
  text-transform: uppercase;
`;

export const MenuItem = styled.li``;
export const ImgDetails = styled.img`
  border-radius: 15px;
  width: 400px;
`;
export const LinkItems = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  :hover {
    color: orangered;
  }
`;
export const TextDetails = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const TitleDetails = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Information = styled.div``;
export const SpanYear = styled.span`
  padding: 0px 10px;
  color: #a01d1d;
`;
