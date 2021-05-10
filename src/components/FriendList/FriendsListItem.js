import React from 'react';

import styles from './FriendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.item}>
            <span
                className={
                    (isOnline ? `${styles.isOnline}` : `${styles.isOffline}`) +
                    ` ${styles.stats}`
                }
            ></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
};

FriendsListItem.defaultProps = {
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
};

export default FriendsListItem;
