'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Trash2, Download, Eye, X, Calendar, FileText } from 'lucide-react';

interface UploadedImage {
  id: string;
  preview: string;
  uploadedAt: Date;
  name: string;
  size: number;
}

interface ImageGalleryProps {
  images: UploadedImage[];
  onDelete: (id: string) => void;
}

export const ImageGallery = ({ images, onDelete }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<UploadedImage | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const handleDownload = (image: UploadedImage) => {
    const link = document.createElement('a');
    link.href = image.preview;
    link.download = image.name;
    link.click();
  };

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Uploaded Images ({images.length})
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Manage your uploaded images
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'grid'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'list'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              List
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-green-500 transition-all hover:shadow-lg"
              >
                <Image
                  src={image.preview}
                  alt={image.name}
                  fill
                  className="object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="p-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                    title="View"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => handleDownload(image)}
                    className="p-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                    title="Download"
                  >
                    <Download size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(image.id)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Info Badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs font-medium truncate">{image.name}</p>
                  <p className="text-white/70 text-xs">{formatFileSize(image.size)}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {images.map((image) => (
              <div
                key={image.id}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50/30 transition-all"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                  <Image
                    src={image.preview}
                    alt={image.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText size={14} className="text-gray-400" />
                    <p className="text-sm font-medium text-gray-900 truncate">{image.name}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(image.uploadedAt)}
                    </span>
                    <span>{formatFileSize(image.size)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="View"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => handleDownload(image)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Download"
                  >
                    <Download size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(image.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div>
                <h3 className="font-semibold text-gray-900">{selectedImage.name}</h3>
                <p className="text-sm text-gray-600">
                  {formatFileSize(selectedImage.size)} • {formatDate(selectedImage.uploadedAt)}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedImage.preview}
                alt={selectedImage.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex gap-2 p-4 border-t border-gray-200">
              <button
                onClick={() => handleDownload(selectedImage)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Download size={18} />
                Download
              </button>
              <button
                onClick={() => {
                  onDelete(selectedImage.id);
                  setSelectedImage(null);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
