'use client';

import { useEffect } from 'react';

export default function ParallaxEffect() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const parallaxLayers = document.querySelectorAll('.parallax-layer');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      parallaxLayers.forEach((layer) => {
        const el = layer as HTMLElement;
        const depth = parseFloat(el.getAttribute('data-depth') || '0.1');
        // Reduced movement amount for subtlety
        const moveX = (mouseX * depth * 50) - (depth * 25);
        const moveY = (mouseY * depth * 50) - (depth * 25);
        
        el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return null;
}