// client-side-rendering/index.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientSideRenderingPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from JSONPlaceholder API on component mount
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Client-Side Rendering Example</h1>
      <h2>Posts:</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientSideRenderingPage;
