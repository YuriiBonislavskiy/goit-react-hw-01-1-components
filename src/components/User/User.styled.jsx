// import styled from '@emotion/styled';
import styled from 'styled-components';

export const UserContainer = styled.div`
  width: auto;
  background-color: rgb(232, 235, 241);
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
  background-color: white;
  padding: 20px;
`;

export const UserAvatar = styled.img`
  width: 150px;
  border-radius: 50%;
  background-color: #a48d77;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
`;

export const UserName = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  color: #1f1f1f;
  margin: 12px;
`;

export const UserTag = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  font-size: 14px;
  color: #1f1f1f;
`;

export const UserLocation = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 14px;
  color: #7d8797;
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
  border-color: #e6eaf1;
  text-align: center;
  justify-content: center;
  background-color: #f4f6f9;
`;

export const UserLabel = styled.span`
  padding: 0px;
  margin: 0px;
  font-size: 14px;
  color: #7d8797;
`;

export const UserQuantity = styled.span`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  color: #1f1f1f;
`;