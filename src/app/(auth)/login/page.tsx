'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { login: setAuth } = useAuth();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        const email = formData.get("email");
        const password = formData.get("password");
        console.log("email", email);
        console.log("password", password);

        try {
            const res = await fetch("http://localhost:8081/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: `
            mutation Login($input: LoginInput!) {
              login(input: $input) {
                success
                message
                token
                user {
                  id
                  name
                  email
                  role
                  isProfileCompleted
                  createdAt
                }
              }
            }
          `,
                    variables: {
                        input: {
                            usernameOrEmail: email,
                            password
                        },
                    },
                }),
            });

            const json = await res.json();

            if (!res.ok) {
                throw new Error(json.errors?.[0]?.message || `Error: ${res.status}`);
            }

            if (json.errors) {
                throw new Error(json.errors[0].message);
            }

            const loginResult = json.data?.login;
            if (!loginResult?.success || !loginResult?.token) {
                throw new Error(loginResult?.message || "Invalid credentials. Please try again.");
            }

            // loginResult.user should match our User interface
            setAuth(loginResult.token, loginResult.user);

            console.log("loginResult.user", loginResult.user);

            // Redirect based on role
            if (loginResult.user.role === 'ADMIN') {
                router.push('/admin');
            } else {
                router.push('/dashboard');
            }

        } catch (err: any) {
            console.error("Login submission error:", err.message);
            setError(err.message || "An unexpected error occurred during login.");
        } finally {
            setLoading(false);
        }


    };


    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            {/* Background decoration (optional, adds to the vibe) */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] opacity-30"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] opacity-30"></div>
            </div>

            <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10">
                <div className="flex flex-col items-center mb-8">
                    <Link href="/" className="mb-6 group">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.3)] transition-transform group-hover:scale-105">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 8L24 12V20L16 24L8 20V12L16 8Z" fill="#0a0a0a" />
                            </svg>
                        </div>
                    </Link>
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-muted text-sm text-center">
                        Enter your credentials to access your account
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="flex gap-3">
                            <div className="flex-shrink-0 w-5 h-5 text-red-400 mt-0.5">
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-red-200/90 leading-relaxed">
                                    {error}
                                </p>
                            </div>
                            <button
                                onClick={() => setError(null)}
                                className="flex-shrink-0 text-red-400/50 hover:text-red-400 transition-colors"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit}>

                    <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 ml-1">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </div>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all shadow-inner"
                                required
                                name="email"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center ml-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                Password
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                            </div>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                name="password"
                                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all shadow-inner"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3.5 bg-primary text-slate-950 font-bold rounded-xl shadow-[0_4px_14px_rgba(163,230,53,0.4)] hover:shadow-[0_6px_20px_rgba(163,230,53,0.6)] hover:bg-[#b5f04b] hover:-translate-y-0.5 transition-all duration-200 mt-2">
                        {loading ? "Logging in..." : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
}