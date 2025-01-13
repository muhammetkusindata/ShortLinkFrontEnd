import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import users from '@/public/data/users.json';

interface CustomUser extends DefaultUser {
  avatar: string;
  surname: string;
  membership_type: string;
  companyID: string;
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
            name: user.name,
            surname: user.surname,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            membership_type: user.membership_type,
            companyID: user.companyID.toString(),
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
        token.surname = (user as CustomUser).surname;
        token.membership_type = (user as CustomUser).membership_type;
        token.companyID = (user as CustomUser).companyID;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.avatar = token.avatar as string;
        session.user.surname = token.surname as string;
        session.user.membership_type = token.membership_type as string;
        session.user.companyID = token.companyID as string;
      }
      return session;
    },
  },
});