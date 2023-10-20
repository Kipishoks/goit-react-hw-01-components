import PropTypes from 'prop-types';
import {ProfileWrap, Description, Avatar, Name, Tag, Location, Stats, ListItem} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } })=> {
    return (
        <ProfileWrap key={username}>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <Name>{username}</Name>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <ListItem>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </ListItem>
    <ListItem>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </ListItem>
    <ListItem>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </ListItem>
  </Stats>
</ProfileWrap>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape (
    {
    followers: PropTypes.number,
    views: PropTypes.number, 
    likes: PropTypes.number
}) 
}