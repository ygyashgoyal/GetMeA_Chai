import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDB'

export const authOptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    //   AppleProvider({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET
    //   }),
    //   FacebookProvider({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET
    //   }),
    //   GoogleProvider({
    //     clientId: process.env.GOOGLE_ID,
    //     clientSecret: process.env.GOOGLE_SECRET
    //   }),
    //   // Passwordless / email sign in
    //   EmailProvider({
    //     server: process.env.MAIL_SERVER,
    //     from: 'NextAuth.js <no-reply@example.com>'
    //   }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "gitHub") {
        try {
          await connectDB()
          const currentUser = await User.findOne({ email });
          if (!currentUser) {
            const newUser = await User.create({
              email: user.email,
              username: user.email.split("@")[0],
            });
            user.name = newUser.username;
            console.log(newUser)
          } 
          else {
            user.name = currentUser.username;
          }
    
          return true; // Allow the sign-in process to continue
        } catch (error) {
          console.error('Error in sign-in callback:', error);
          return false; // Deny access in case of errors
        }
      }
      return true; // Allow sign-ins for other providers
    }    
  },
  async session({ session, user, token }) {
    const dbUser=await User.find({email: session.user.email})
    session.user.name=dbUser.username
    user.name = newUser.username;
    return session
  },
})


export { authOptions as GET, authOptions as POST }