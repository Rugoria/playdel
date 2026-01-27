"use client";
import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "@/lib/apolloClient";
import { AuthProvider } from "@/context/AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
        </AuthProvider>
    );
}

