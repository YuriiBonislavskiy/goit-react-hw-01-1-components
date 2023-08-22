import styled from 'styled-components';
import { themes } from 'utils';

export const FriendListContainer = styled.section`
  width: auto;
  max-width: 48vw;
  min-width: 270px;
  background-color: ${themes.color.color6};
  padding: 30px;
  text-align: center;
  align-items: center;
`;

export const FriendListTitle = styled.h2`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  color: ${themes.color.color3};
  margin-bottom: 12px;
`;

export const FriendListBody = styled.ul`
  padding: 0px;
  margin: 0px;
  width: 30vw;
  min-width: 200px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
`;
