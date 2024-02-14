// pages/profile.js
import { useSession } from 'next-auth/react';

const ProfilePage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>You need to log in to access your profile.</p>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {session.user.name}!</p>
      <p>Email: {session.user.email}</p>
    </div>
  );
};

export default ProfilePage;
