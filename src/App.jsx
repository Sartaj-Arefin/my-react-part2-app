import { Suspense } from 'react';
import './App.css';
import Batsman from './Batsman';
import Counter from './Counter';
import Posts from './Posts';
// import Users from './Users';
import Friends from './Friends';

// const fetchUser = fetch('https://jsonplaceholder.typicode.com/users').then(
//   (res) => res.json()
// );

const friendsFetch = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

function App() {
  const friendsPromise = friendsFetch();
  const postsPromise = fetchPosts();
  function handleClick() {
    alert(`I'm Clicked`);
  }
  return (
    <>
      <h3>Vite + React</h3>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense> */}

      <Suspense fallback={<h4>POST ARE LOADING...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Suspense fallback={<h3>FRIENDS ARE COMING</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert(`I'm Clicked 2`)}>Click Me Too</button>
    </>
  );
}

export default App;
