
import React from 'react';

const ServerSideRenderingPage = ({ data }) => {
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <p>Data fetched server-side: {data}</p>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from an API or perform any server-side task here
  // For demonstration, let's just return a static data
  const data = "Hello from server-side!";

  return {
    props: {
      data,
    },
  };
}

export default ServerSideRenderingPage;
