import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers : [
        GithubProvider({
            clientId:"Ov23li3XlNUvGKXxo2Uu",
            clientSecret:"256ff3e81123e510591b5b64a8aa403ad3dfb603"
        })
    ]
}

export default NextAuth(authOptions);