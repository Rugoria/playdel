import React from 'react';
import Image from 'next/image';
import { LayoutDashboard, LineChart, Settings, User } from 'lucide-react';
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-admin-snow-100">
            {/* SIDEBAR */}
            <aside className="w-72 bg-admin-teal-50 text-admin-teal-950 shadow-sm rounded-3xl m-3 flex flex-col">
                <div className="p-8 pb-10 flex items-center justify-between">
                    <h1 className="text-3xl font-black tracking-tighter flex items-center">
                        <span className="text-black">PLAY</span>
                        <span className="text-admin-tea-700">DEL</span>
                    </h1>
                    <div className="relative w-10 h-10">
                        <Image
                            src="/playdel-removebg-preview.png"
                            alt="playdel logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <nav className="px-4 space-y-4 flex-1">
                    {/* Dashboard Item - Active state example */}
                    <div className="px-6 py-4 rounded-full bg-admin-tea-400 text-white font-bold cursor-pointer shadow-[0_10px_20px_-5px_rgba(139,201,105,0.4)] flex items-center group transition-all hover:scale-[1.02]">
                        <span className="mr-4 flex-shrink-0"><LayoutDashboard size={24} strokeWidth={2.5} /></span>
                        <span className="text-lg">Dashboard</span>
                    </div>

                    <div className="px-6 py-4 rounded-full hover:bg-admin-tea-400/5 transition-all cursor-pointer text-admin-teal-900 font-bold flex items-center group hover:scale-[1.02]">
                        <span className="mr-4 flex-shrink-0 text-admin-tea-500 group-hover:text-admin-tea-600">
                            <LineChart size={24} strokeWidth={2.5} />
                        </span>
                        <span className="text-lg">Analytics</span>
                    </div>

                    <div className="px-6 py-4 rounded-full hover:bg-admin-tea-400/5 transition-all cursor-pointer text-admin-teal-900 font-bold flex items-center group hover:scale-[1.02]">
                        <span className="mr-4 flex-shrink-0 text-admin-tea-500 group-hover:text-admin-tea-600">
                            <Settings size={24} strokeWidth={2.5} />
                        </span>
                        <span className="text-lg">Settings</span>
                    </div>
                </nav>
            </aside>

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 flex flex-col rounded-lg m-2 bg-admin-snow-50">
                {/* Top Navbar */}
                <header className="h-16 border-b flex items-center justify-between px-8">
                    <h2 className="text-admin-teal-700 font-bold text-2xl">Dashboard</h2>
                    <div className="flex items-center gap-2">
                        <span className='text-admin-teal-700 font-bold text-2xl'>Admin</span>
                        <div className="w-10 h-10 rounded-full bg-admin-tea-100 border border-admin-tea-300 flex items-center justify-center text-admin-tea-700 hover:bg-admin-tea-200 transition-colors cursor-pointer">
                            <User size={20} />
                        </div>
                    </div>
                </header>

                {/* Page Body */}
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}