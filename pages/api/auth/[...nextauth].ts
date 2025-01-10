import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import users from '@/public/data/users.json';

// Extend the User type to include avatar
interface CustomUser extends DefaultUser {
  avatar: string;
}

declare module 'next-auth' {
  interface Session {
    user: CustomUser;
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
        avatar: { label: "Avatar", type: "text" },
      },
      authorize: async (credentials) => {
        const user = users.find(user => 
          user.email == credentials?.username && 
          user.password == credentials?.password
        );

        if (user) {
          return Promise.resolve({
            id: user.userID.toString(),
            name: `${user.name} ${user.surname}`,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
          } as CustomUser);
        } else {
          return Promise.resolve(null);
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  // Optional: Add a database to persist users
  // database: process.env.DATABASE_URL,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.avatar = (user as CustomUser).avatar;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.avatar = token.avatar as string;
      }
      return session;
    },
  },
});