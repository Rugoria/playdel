'use client';

import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface MultiImageUploadProps {
  maxImages?: number;
  currentCount?: number;
  onImagesChange?: (files: File[]) => void;
}

export const MultiImageUpload = ({ 
  maxImages = 10, 
  currentCount = 0,
  onImagesChange 
}: MultiImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const remainingSlots = maxImages - currentCount;
    const filesToAdd = files.slice(0, remainingSlots);

    if (filesToAdd.length > 0) {
      onImagesChange?.(filesToAdd);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isMaxReached = currentCount >= maxImages;

  return (
    <div
      onClick={() => !isMaxReached && fileInputRef.current?.click()}
      className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
        isMaxReached
          ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
          : 'border-gray-300 cursor-pointer hover:border-green-500 hover:bg-green-50/50'
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
          isMaxReached ? 'bg-gray-200' : 'bg-green-100'
        }`}>
          <Upload size={28} className={isMaxReached ? 'text-gray-400' : 'text-green-600'} />
        </div>
        <div>
          <p className={`text-sm font-medium ${isMaxReached ? 'text-gray-500' : 'text-gray-700'}`}>
            {isMaxReached ? 'Maximum images reached' : 'Click to upload images'}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            PNG, JPG up to 10MB ({currentCount}/{maxImages} uploaded)
          </p>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        disabled={isMaxReached}
      />
    </div>
  );
};
