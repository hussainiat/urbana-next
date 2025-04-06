'use client';

import dynamic from 'next/dynamic';

// Import the D3 component with dynamic loading to avoid SSR issues
const ScienceParticles = dynamic(() => import('@/components/ScienceParticles'), { 
  ssr: false 
});

export default function ClientScienceParticles() {
  return <ScienceParticles />;
}