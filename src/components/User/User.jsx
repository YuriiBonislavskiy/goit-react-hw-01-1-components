import PropTypes from 'prop-types';
// import css from './User.module.css';
import defaultImage from '../default.png';
import {
  UserContainer,
  UserDescription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserItem,
  UserLabel,
  UserQuantity,
} from './User.styled';

export const User = ({
  username,
  tag,
  location,
  avatar = defaultImage,
  stats,
}) => {
  const { followers, views, likes } = stats;
  return (
    <UserContainer>
      <UserDescription>
        <UserAvatar src={avatar ? avatar : defaultImage} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserStats>
        <UserItem>
          <UserLabel>Followers</UserLabel>
          <UserQuantity>{followers}</UserQuantity>
        </UserItem>
        <UserItem>
          <UserLabel>Views</UserLabel>
          <UserQuantity>{views}</UserQuantity>
        </UserItem>
        <UserItem>
          <UserLabel>Likes</UserLabel>
          <UserQuantity>{likes}</UserQuantity>
        </UserItem>
      </UserStats>
    </UserContainer>
  );
};

Event.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
