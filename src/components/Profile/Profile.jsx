import PropTypes from 'prop-types';
import {ProfileWrap, Description, Avatar, Name, Tag, Location, Quantity, Stats, ListItem, Label} from './Profile.styled';

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
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </ListItem>
    <ListItem>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </ListItem>
    <ListItem>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </ListItem>
  </Stats>
</ProfileWrap>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape (
    {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired
}) 
}