import { FriendListItem } from "../FriendListItem/FriendListItem"
import PropTypes from "prop-types";
import {FriendUl} from "./FriendList.styled"


export const FriendList = ({ friends }) => { 
    return (
        <FriendUl>
            {
                friends.map(({ avatar, name, isOnline, id }) => {
                    return(
                        <FriendListItem
                        key={id}
                        status={isOnline}
                        avatar={avatar}
                        name={name}
                        />
                    )
                })
           }
</FriendUl>
    )
}

FriendList.prototype = {
    friends: PropTypes.array
}