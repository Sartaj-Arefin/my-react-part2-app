import { use } from 'react';
import Post from './Post';

export default function Posts({ postsPromise }) {
  const posts = use(postsPromise);
  console.log(posts);

  return (
    <div className="flex">
      <h4>All Post Are Here: {posts.length}</h4>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
}
