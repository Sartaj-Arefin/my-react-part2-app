import Friend from './Friend';
import { use } from 'react';

export default function Friends({ friendsPromise }) {
  const friends = use(friendsPromise);
  console.log(friends);

  return (
    <div className="flex">
      <h3>FRIENDS: {friends.length}</h3>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
