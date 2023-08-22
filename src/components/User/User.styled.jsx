// import styled from '@emotion/styled';
import styled from 'styled-components';
import { themes } from 'utils';

export const UserContainer = styled.div`
  width: auto;
  background-color: ${themes.color.color6};
  padding: 30px;
  text-align: center;
  align-items: center;
`;

export const UserDescription = styled.div`
  box-sizing: border-box;
  margin: 0px;
  width: 21vw;
  min-width: 270px;
  max-width: 300px;
  background-color: ${themes.color.color9};
  padding: 20px;
`;

export const UserAvatar = styled.img`
  width: 150px;
  border-radius: 50%;
  background-color: ${themes.color.color11};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
`;

export const UserName = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  color: ${themes.color.color3};
  margin: 12px;
`;

export const UserTag = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  font-size: 14px;
  color: ${themes.color.color3};
`;

export const UserLocation = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 14px;
  color: ${themes.color.color10};
  margin: 12px;
`;

export const UserStats = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  list-style: none;
`;

export const UserItem = styled.li`
  box-sizing: border-box;
  width: 7vw;
  min-width: 90px;
  max-width: 100px;
  height: 90px;
  display: flex;
  flex-direction: column;
  border-width: 2px 1px;
  border-style: solid;
  border-color: ${themes.color.color8};
  text-align: center;
  justify-content: center;
  background-color: ${themes.color.color12};
`;

export const UserLabel = styled.span`
  padding: 0px;
  margin: 0px;
  font-size: 14px;
  color: ${themes.color.color10};
`;

export const UserQuantity = styled.span`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  color: ${themes.color.color3};
`;
