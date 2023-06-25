import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ImgMovies = styled.img`
  padding-top: 50px;
  background-image: url('/src/img/not-found.png');
`;

export const ListMovies = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 40px;
  list-style: none;
  gap: 20px;
  margin-bottom: 50px;
  display: flex;
	justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ItemMovies = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
  border-radius: 20px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 2px 2px 13px 4px #475569;
    transform: scale(1.03);
  }
`;

export const LinkMovies = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export const Img = styled.img`
  border-radius: 20px;
  width: 300px;
  height: 425px;
`;
