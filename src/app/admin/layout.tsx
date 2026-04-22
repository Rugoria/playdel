'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  LineChart, 
  Settings, 
  User, 
  Flag, 
  Building2, 
  Users,
  LogOut,
  Bell,
  Search,
  ChevronRight
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: LineChart, label: 'Analytics', href: '/admin/analytics' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: Building2, label: 'Clubs', href: '/admin/clubs' },
  { icon: Flag, label: 'Reports', href: '/admin/reports' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* CLASSIC SIDEBAR */}
            <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl flex flex-col">
                {/* Logo Section */}
                <div className="p-6 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 bg-white rounded-lg p-1">
                            <Image
                                src="/playdel-removebg-preview.png"
                                alt="playdel logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight">
                                <span className="text-white">PLAY</span>
                                <span className="text-green-400">DEL</span>
                            </h1>
                            <p className="text-xs text-gray-400">Admin Portal</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 group relative ${
                                    isActive
                                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/50'
                                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                                }`}
                            >
                                <Icon size={20} strokeWidth={2} />
                                <span className="flex-1">{item.label}</span>
                                {isActive && (
                                    <ChevronRight size={16} className="opacity-70" />
                                )}
                                
                                {/* Active indicator */}
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile Section */}
                <div className="p-4 border-t border-gray-700">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-700/50 mb-2">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold text-sm">
                            A
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">Admin User</p>
                            <p className="text-xs text-gray-400 truncate">admin@playdel.com</p>
                        </div>
                    </div>
                    
                    <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-colors">
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 flex flex-col">
                {/* Top Header Bar */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
                    <div className="flex items-center gap-4 flex-1">
                        <h2 className="text-xl font-bold text-gray-800">
                            {menuItems.find(item => item.href === pathname)?.label || 'Dashboard'}
                        </h2>
                        
                        {/* Search Bar */}
                        <div className="hidden md:flex items-center gap-2 ml-8 flex-1 max-w-md">
                            <div className="relative flex-1">
                                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        
                        <div className="h-8 w-px bg-gray-200"></div>
                        
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold cursor-pointer hover:shadow-lg transition-shadow">
                                A
                            </div>
                            <div className="hidden lg:block">
                                <p className="text-sm font-semibold text-gray-800">Admin User</p>
                                <p className="text-xs text-gray-500">Administrator</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Body */}
                <main className="flex-1 overflow-auto p-6 bg-gray-50">
                    {children}
                </main>
            </div>
        </div>
    );
}
