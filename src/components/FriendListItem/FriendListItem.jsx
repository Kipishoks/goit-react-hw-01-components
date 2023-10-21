import PropTypes from "prop-types";

import {Item, Status, Avatar, Name} from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <Item >
            <Status statusType={isOnline}></Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
</Item>
    )
}               

FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
}
