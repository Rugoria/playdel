export interface LoginInput {
    usernameOrEmail: string;
    password: string;
}

export interface AuthPayload {
    token: string;
    refreshToken: string;
    user: User;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    isProfileCompleted: boolean;
    createdAt?: string;
}
