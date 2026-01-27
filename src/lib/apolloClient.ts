import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client";

const stripTypenameLink = new ApolloLink((operation, forward) => {
    if (operation.variables) {
        operation.variables = JSON.parse(
            JSON.stringify(operation.variables, (key, value) =>
                key === "__typename" ? undefined : value
            )
        );
    }
    return forward(operation);
});

const httpLink = new HttpLink({
    uri: "http://localhost:8081/graphql",
    credentials: "include",
});

export const apolloClient = new ApolloClient({
    link: ApolloLink.from([
        stripTypenameLink,
        httpLink,
    ]),
    cache: new InMemoryCache(),
});