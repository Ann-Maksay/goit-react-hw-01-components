import React from 'react';

import Profile from './Profile/Profile';
import user from '../data/user.json';

import Statistics from './Statistics/Statistics';
import statistics from '../data/statistics.json';

import FriendsList from './FriendList/FriendsList';
import friends from '../data/friends.json';

import TransactionHistory from './Transactions/Transaction';
import transaction from '../data/transaction.json';

const App = () => {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" statistics={statistics} />
            <FriendsList friends={friends} />
            <TransactionHistory items={transaction} />
        </div>
    );
};

export default App;
