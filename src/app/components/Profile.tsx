'use client';

import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';

interface ProfileProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  sns?: string;
  github?: string;
  imageUrl?: string;
}

export default function Profile({
  name,
  title,
  email,
  phone,
  sns,
  github,
  imageUrl
}: ProfileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
        <div className="flex items-start gap-6">
          <div 
            className="relative w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg transform hover:scale-105 transition-transform overflow-hidden cursor-pointer"
            onClick={() => imageUrl && setIsModalOpen(true)}
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={`${name}의 프로필 사진`}
                fill
                className="object-cover"
                sizes="(max-width: 96px) 100vw, 96px"
              />
            ) : (
              "사진"
            )}
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_I AM</h2>
              <p className="text-lg text-white/90">이름: {name}</p>
              <p className="text-gray-400">{title}</p>
            </div>
            
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">_Contact</h2>
              <p className="text-white/80">Email: {email}</p>
              <p className="text-white/80">Phone: {phone}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">_Channel</h2>
              <p className="text-white/80">SNS: {sns || '-'}</p>
              <p className="text-white/80">GitHub: {github || '-'}</p>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {imageUrl && (
          <div className="relative w-full pt-[100%] rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={`${name}의 프로필 사진`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        )}
      </Modal>
    </>
  );
} 