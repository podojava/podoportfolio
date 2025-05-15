'use client';

import React from 'react';
import Profile from './components/Profile';
import Introduce from './components/Introduce';
import TechSkill from './components/TechSkill';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Profile
          name="이프로"
          title="PM 서비스 기획 / FE Developer(jr)"
          email="leepro@naver.com"
          phone="+082-1234-5678"
          imageUrl="/images/profile.jpg"
        />
        
        <div className="grid gap-6 md:grid-cols-2">
          <Introduce
            content="간단한 자기소개 및 인삿말"
          />
          
          <TechSkill
            skills={['JS', 'TS', 'React', 'Tailwindcss', 'Premierepro']}
          />
        </div>
      </div>
    </main>
  );
} 