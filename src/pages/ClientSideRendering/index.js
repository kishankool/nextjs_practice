// server-side-rendering/index.js
import React from 'react';

const ServerSideRenderingPage = ({ posts }) => {
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <h2>Posts:</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  try {
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Fetch posts from JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default ServerSideRenderingPage;
