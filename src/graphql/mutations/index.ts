import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation Login($input: LoginInput!) {
        login(input: $input) {
            token
            refreshToken
            user {
                id
                name
                email
                role
                isProfileCompleted
            }
        }
    }
`;
