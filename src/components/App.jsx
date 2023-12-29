import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import userData from '../components/user.json';
import statsData from '../components/data.json';
import friendsData from '../components/friends.json';
import transactionsData from '../components/transactions.json';

const App = () => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <div>
      {/* Profil pe o rețea de socializare */}
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      {/* Secțiunea de Statistică */}
      <Statistics title="Upload stats" stats={statsData} />

      {/* Lista de prieteni */}
      <FriendList friends={friendsData} />

      {/* Istoricul tranzacțiilor */}
      <TransactionHistory items={transactionsData} />
    </div>
  );
};

export default App;
