import styled from 'styled-components';

export const ListCast = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 20px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ItemCast = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 3px #fff;
  border-radius: 10px;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    width: calc((100% - 30px) / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc((70% - 60px) / 4);
  }
`;

export const ImgCast = styled.img`
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const TextCast = styled.p`
  margin-bottom: 10px;
	font-weight: 700;
`;
export const TextEm = styled.em`
  margin-bottom: 5px;
  text-align: center;
`;
