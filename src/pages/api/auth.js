// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers as needed (e.g., GitHub, Facebook)
  ],
  callbacks: {
    async session(session, token) {
      // Add custom logic to retrieve user roles from the token or database
      const userRoles = ['user']; // Example: user has 'user' role by default
      session.user.roles = userRoles;
      return session;
    },
  },
});
