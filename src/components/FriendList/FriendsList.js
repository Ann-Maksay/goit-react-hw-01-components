import React from 'react';
import PropTypes from 'prop-types';

import FriendsListItem from './FriendsListItem';

const FriendsList = ({ friends }) => {
    return (
        <ul>
            {friends.map(elem => {
                return (
                    <FriendsListItem
                        avatar={elem.avatar}
                        name={elem.name}
                        isOnline={elem.isOnline}
                        key={elem.id}
                    />
                );
            })}
        </ul>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
};

export default FriendsList;
