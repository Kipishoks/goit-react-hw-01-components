import PropTypes from "prop-types";
import {Item, Status, Avatar} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, status }) => {
    return (
        <Item>
            <Status>{status}</Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
</Item>
    )
}               

FriendListItem.prototype = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.b
}
