// pages/login.js
import { signIn, useSession } from 'next-auth/react';

const LoginPage = () => {
  const { data: session } = useSession();

  if (session) {
    return <p>You are already logged in!</p>;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => signIn('google')}>Sign In with Google</button>
    </div>
  );
};

export default LoginPage;
