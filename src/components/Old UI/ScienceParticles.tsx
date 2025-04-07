import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Particle {
  id: number;
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  type: 'atom' | 'molecule' | 'electron';
}

interface LinkData {
    source: number;
    target: number;
  }

const ScienceParticles: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = 600;
    
    // Clear any existing elements
    svg.selectAll("*").remove();
    
    // Set dimensions
    svg.attr("width", width)
       .attr("height", height);
    
    // Generate random particles
    const particleCount = 50;
    const particles: Particle[] = [];
    
    const colors = ['#FFD700', '#00BFFF', '#FF6347', '#7FFFD4', '#FF69B4'];
    const types: ('atom' | 'molecule' | 'electron')[] = ['atom', 'molecule', 'electron'];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 8 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        type: types[Math.floor(Math.random() * types.length)]
      });
    }
    
    // Create connections between some particles
    const links: {source: number, target: number}[] = [];
    for (let i = 0; i < particleCount; i++) {
      if (Math.random() > 0.7) {
        const target = Math.floor(Math.random() * particleCount);
        if (target !== i) {
          links.push({
            source: i,
            target
          });
        }
      }
    }
    
    // Draw connections
    svg.selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "rgba(255, 255, 255, 0.2)")
      .attr("stroke-width", 1)
      .attr("x1", d => particles[d.source].x)
      .attr("y1", d => particles[d.source].y)
      .attr("x2", d => particles[d.target].x)
      .attr("y2", d => particles[d.target].y);
    
    // Draw particles
    const particleElements = svg.selectAll("circle")
      .data(particles)
      .enter()
      .append("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", d => d.radius)
      .attr("fill", d => d.color)
      .attr("opacity", 0.7)
      .attr("filter", "url(#glow)");
    
    // Add glow effect
    const defs = svg.append("defs");
    const filter = defs.append("filter")
      .attr("id", "glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");
    
    filter.append("feGaussianBlur")
      .attr("stdDeviation", "2.5")
      .attr("result", "coloredBlur");
    
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode")
      .attr("in", "coloredBlur");
    feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");
    
    // Animation loop
    function animate() {
      // Update particle positions
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
      });
      
      // Update visual elements
      particleElements
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
      
      svg.selectAll<SVGLineElement, LinkData>("line")
        .attr("x1", d => particles[d.source].x)
        .attr("y1", d => particles[d.source].y)
        .attr("x2", d => particles[d.target].x)
        .attr("y2", d => particles[d.target].y);
  
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Cleanup
    return () => {
      svg.selectAll("*").remove();
    };
  }, []);
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <svg ref={svgRef} className="w-full h-full"></svg>
    </div>
  );
};

export default ScienceParticles;
