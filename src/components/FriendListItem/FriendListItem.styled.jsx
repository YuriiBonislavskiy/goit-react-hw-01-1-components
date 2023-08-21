import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  box-sizing: border-box;
  width: 180px;
  height: 60px;
  display: flex;
  text-align: left;
  align-items: center;
  border-width: 1px 1px;
  border-style: solid;
  border-color: #1f1f20;
  padding-left: 8px;
  margin-left: 5px;
  margin-bottom: 5px;
`;

const setBgColor = ({$isOnlineColor}) => {
    // console.log(props.rowNumber);
    return $isOnlineColor ? 'green' : 'red';
}

export const FriendStatus = styled.span`
padding: 0px;
margin: 0px;
border-radius: 50%;
font-size: 14px;
height: 15px;
width: 15px;
background-color: ${setBgColor};
`;

export const FriendAvatar = styled.img`
display: block;
width: 48px;
height: 48px;
border-radius: 10%;
background-color: #ded4cb;
margin-left: 8px;
`;

export const FriendName = styled.span`
padding: 0px;
margin: 0px;
font-size: 18px;
color: #1f1f1f;
margin-left: 8px;
`;