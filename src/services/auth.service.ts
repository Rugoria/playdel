import Cookies from 'js-cookie';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    isProfileCompleted: boolean;
    createdAt: string;
}

export const authService = {
    setToken: (token: string) => {
        Cookies.set(TOKEN_KEY, token, {
            expires: 7, // 7 days
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
    },

    getToken: () => {
        return Cookies.get(TOKEN_KEY);
    },

    setUser: (user: User) => {
        Cookies.set(USER_KEY, JSON.stringify(user), {
            expires: 7,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
    },

    getUser: (): User | null => {
        const user = Cookies.get(USER_KEY);
        return user ? JSON.parse(user) : null;
    },

    removeAuth: () => {
        Cookies.remove(TOKEN_KEY);
        Cookies.remove(USER_KEY);
    },

    isAuthenticated: () => {
        return !!Cookies.get(TOKEN_KEY);
    },
};
