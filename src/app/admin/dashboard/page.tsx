'use client';

import { useState } from 'react';
import { StatCard } from '@/components/ui/StatCard';
import { MultiImageUpload } from '@/components/ui/MultiImageUpload';
import { ImageGallery } from '@/components/ui/ImageGallery';
import { 
  Users, 
  Building2, 
  Flag, 
  Calendar,
  TrendingUp,
  Activity,
  DollarSign,
  UserPlus
} from 'lucide-react';

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
  uploadedAt: Date;
  name: string;
  size: number;
}

const DashboardPage = () => {
    const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);

    const handleImagesChange = (files: File[]) => {
        const newImages: UploadedImage[] = files.map(file => ({
            id: `${Date.now()}-${Math.random()}`,
            file,
            preview: URL.createObjectURL(file),
            uploadedAt: new Date(),
            name: file.name,
            size: file.size,
        }));
        
        setUploadedImages(prev => [...prev, ...newImages]);
    };

    const handleDeleteImage = (id: string) => {
        setUploadedImages(prev => {
            const imageToDelete = prev.find(img => img.id === id);
            if (imageToDelete) {
                URL.revokeObjectURL(imageToDelete.preview);
            }
            return prev.filter(img => img.id !== id);
        });
    };

    const handleDeleteAll = () => {
        uploadedImages.forEach(img => URL.revokeObjectURL(img.preview));
        setUploadedImages([]);
    };

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Users"
                    value="12,482"
                    change="↑ 14% from last month"
                    changeType="positive"
                    icon={Users}
                    iconColor="text-blue-600"
                    iconBgColor="bg-blue-100"
                />
                
                <StatCard
                    title="Active Clubs"
                    value="87"
                    change="↑ 5 new this week"
                    changeType="positive"
                    icon={Building2}
                    iconColor="text-green-600"
                    iconBgColor="bg-green-100"
                />
                
                <StatCard
                    title="Open Reports"
                    value="23"
                    change="7 require attention"
                    changeType="neutral"
                    icon={Flag}
                    iconColor="text-yellow-600"
                    iconBgColor="bg-yellow-100"
                />
                
                <StatCard
                    title="Bookings Today"
                    value="156"
                    change="Peak: 2-4 PM"
                    changeType="positive"
                    icon={Calendar}
                    iconColor="text-purple-600"
                    iconBgColor="bg-purple-100"
                />
            </div>

            {/* Secondary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StatCard
                    title="Total Clubs"
                    value="124"
                    change="↑ 8 new this month"
                    changeType="positive"
                    icon={Building2}
                    iconColor="text-teal-600"
                    iconBgColor="bg-teal-100"
                />
                
                <StatCard
                    title="New Registrations"
                    value="342"
                    change="Last 30 days"
                    changeType="positive"
                    icon={UserPlus}
                    iconColor="text-indigo-600"
                    iconBgColor="bg-indigo-100"
                />
            </div>

            {/* Image Upload Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Upload Club Images
                            </h3>
                            <p className="text-sm text-gray-600">
                                Add multiple images for clubs, courts, or promotional content
                            </p>
                        </div>
                        {uploadedImages.length > 0 && (
                            <button
                                onClick={handleDeleteAll}
                                className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                Delete All ({uploadedImages.length})
                            </button>
                        )}
                    </div>
                </div>
                <MultiImageUpload 
                    maxImages={20} 
                    onImagesChange={handleImagesChange}
                    currentCount={uploadedImages.length}
                />
            </div>

            {/* Uploaded Images Gallery */}
            {uploadedImages.length > 0 && (
                <ImageGallery 
                    images={uploadedImages}
                    onDelete={handleDeleteImage}
                />
            )}

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                    <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                        View All
                    </button>
                </div>
                
                <div className="space-y-4">
                    {[
                        { user: 'Ahmad Hassan', action: 'filed a report', time: '5 minutes ago', type: 'report' },
                        { user: 'Sarah Khan', action: 'registered a new account', time: '12 minutes ago', type: 'user' },
                        { user: 'Elite Tennis Club', action: 'added 3 new courts', time: '1 hour ago', type: 'club' },
                        { user: 'John Doe', action: 'booked Court #4', time: '2 hours ago', type: 'booking' },
                    ].map((activity, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                activity.type === 'report' ? 'bg-red-100 text-red-600' :
                                activity.type === 'user' ? 'bg-blue-100 text-blue-600' :
                                activity.type === 'club' ? 'bg-green-100 text-green-600' :
                                'bg-purple-100 text-purple-600'
                            }`}>
                                {activity.user.charAt(0)}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-900">
                                    <span className="font-medium">{activity.user}</span> {activity.action}
                                </p>
                                <p className="text-xs text-gray-500">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 hover:shadow-lg transition-all duration-200 text-left">
                    <Users size={32} className="mb-3" />
                    <h4 className="font-semibold text-lg mb-1">Manage Users</h4>
                    <p className="text-sm text-blue-100">View and edit user accounts</p>
                </button>
                
                <button className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 hover:shadow-lg transition-all duration-200 text-left">
                    <Building2 size={32} className="mb-3" />
                    <h4 className="font-semibold text-lg mb-1">Add New Club</h4>
                    <p className="text-sm text-green-100">Register a new tennis club</p>
                </button>
                
                <button className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 hover:shadow-lg transition-all duration-200 text-left">
                    <TrendingUp size={32} className="mb-3" />
                    <h4 className="font-semibold text-lg mb-1">View Analytics</h4>
                    <p className="text-sm text-purple-100">Detailed performance metrics</p>
                </button>
            </div>
        </div>
    );
};

export default DashboardPage;
