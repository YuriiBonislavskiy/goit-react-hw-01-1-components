import PropTypes from 'prop-types';
import defaultImage from '../default.png';
import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = friend => {
  const { id, avatar, name, isOnline } = friend;
  return (
    <FriendItem key={id}>
      <FriendStatus
        $isOnlineColor={isOnline}></FriendStatus>
      <FriendAvatar
        src={avatar ?? defaultImage}
        alt="User avatar"
      />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
