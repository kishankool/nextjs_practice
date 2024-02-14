// static-site-generation/index.js
import React from 'react';

const StaticSiteGenerationPage = ({ posts }) => {
  return (
    <div>
      <h1>Static Site Generation Example</h1>
      <h2>Posts:</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch posts from JSONPlaceholder API at build time
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default StaticSiteGenerationPage;
