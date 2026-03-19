'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPasswordPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Add actual reset logic here later
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            {/* Background decoration */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] opacity-30"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] opacity-30"></div>
            </div>

            <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10">
                <div className="flex flex-col items-center mb-8">
                    <Link href="/login" className="mb-6 group">
                        <div className="w-16 h-16 bg-slate-800/50 border border-white/10 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 group-hover:border-primary/50">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-primary transition-colors">
                                <path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" />
                            </svg>
                        </div>
                    </Link>
                    <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
                    <p className="text-muted text-sm text-center max-w-[85%]">
                        Enter your email address and we&apos;ll send you a link to reset your password.
                    </p>
                </div>

                {!submitted ? (
                    <form className="space-y-6" onSubmit={handleSubmit}>
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
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-primary text-slate-950 font-bold rounded-xl shadow-[0_4px_14px_rgba(163,230,53,0.4)] hover:shadow-[0_6px_20px_rgba(163,230,53,0.6)] hover:bg-[#b5f04b] hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Send Reset Link
                        </button>
                    </form>
                ) : (
                    <div className="text-center py-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Check your email</h3>
                        <p className="text-gray-400 text-sm mb-6">
                            We have sent a password reset link to your email address.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="text-primary text-sm font-semibold hover:underline"
                        >
                            Try with a different email
                        </button>
                    </div>
                )}

                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
                            <path d="M19 12H5"></path>
                            <path d="M12 19l-7-7 7-7"></path>
                        </svg>
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
