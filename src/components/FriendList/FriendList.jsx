import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import {
  FriendListContainer,
  FriendListTitle,
  FriendListBody,
} from './FriendList.styled';

export const FriendList = ({ title, friends }) => {
  return (
    <FriendListContainer>
      {title && <FriendListTitle>{title}</FriendListTitle>}
      <FriendListBody>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendListBody>
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
