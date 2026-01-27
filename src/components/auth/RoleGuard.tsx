'use client';

import { useAuth } from '@/context/AuthContext';
import { ReactNode } from 'react';

interface RoleGuardProps {
    children: ReactNode;
    allowedRoles: string[];
    fallback?: ReactNode;
}

export function RoleGuard({ children, allowedRoles, fallback = null }: RoleGuardProps) {
    const { user, loading } = useAuth();

    if (loading) {
        return null; // Or a loading spinner
    }

    if (!user || !allowedRoles.includes(user.role)) {
        return fallback;
    }

    return <>{children}</>;
}
