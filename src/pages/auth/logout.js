// pages/logout.js
import { signOut } from 'next-auth/react';

const LogoutPage = () => {
  return (
    <div>
      <h1>Logout Page</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default LogoutPage;
