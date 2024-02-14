// server-side-rendering/index.js
import React from 'react';
import axios from 'axios';

const ServerSideRenderingPage = ({ posts }) => {
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <h2>Posts:</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    // Fetch posts from JSONPlaceholder API
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

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
