// pages/protected-page.js
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const ProtectedPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push('auth/login'); // Redirect to login page if user is not authenticated
    return null;
  }

  // Check if the user has the 'admin' role
  if (!session.user.roles.includes('admin')) {
    router.push('/unauthorized'); // Redirect to unauthorized page if user doesn't have 'admin' role
    return null;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user.email}!</p>
    </div>
  );
};

export default ProtectedPage;
