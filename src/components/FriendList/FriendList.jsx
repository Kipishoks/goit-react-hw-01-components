import { FriendListItem } from "../FriendListItem/FriendListItem"
import PropTypes from "prop-types";
import {FriendUl} from "./FriendList.styled"


export const FriendList = ({ friends }) => { 
    return (
        <FriendUl>
            {
                friends.map(({id, avatar, name, isOnline }) => {
                    return(
                        <FriendListItem
                        key={id}
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                        />
                    )
                })
           }
</FriendUl>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,      
    }),
  ).isRequired,
};