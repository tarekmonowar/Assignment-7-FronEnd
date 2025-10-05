/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/auth/login`,
            { email: credentials.email, password: credentials.password },
            { validateStatus: () => true },
          );

          console.log("Backend response:", res.status, res.data);

          if (res.status === 200 && res.data) return res.data;
          return null;
        } catch (err) {
          console.error("Authorize error:", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  debug: true,
});

export { handler as GET, handler as POST };
