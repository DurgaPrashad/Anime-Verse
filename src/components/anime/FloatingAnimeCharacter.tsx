
import { useEffect, useRef, useState } from "react";

interface FloatingAnimeCharacterProps {
  imagePath: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  speed?: number;
}

const positionClasses = {
  "top-left": "top-20 left-20",
  "top-right": "top-20 right-20",
  "bottom-left": "bottom-20 left-20",
  "bottom-right": "bottom-20 right-20",
  "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
};

const FloatingAnimeCharacter = ({ imagePath, position, speed = 1 }: FloatingAnimeCharacterProps) => {
  const characterRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const character = characterRef.current;
    if (!character) return;
    
    // Random starting position within the specified area
    const startX = Math.random() * 20 - 10; // -10px to +10px
    const startY = Math.random() * 20 - 10; // -10px to +10px
    
    // Set starting position
    character.style.transform = `translate(${startX}px, ${startY}px)`;
    
    // Create floating animation
    let x = startX;
    let y = startY;
    let xDirection = Math.random() > 0.5 ? 1 : -1;
    let yDirection = Math.random() > 0.5 ? 1 : -1;
    
    const baseSpeed = 0.1 * speed; // Adjustable speed
    const maxOffset = 30; // Maximum distance from center position
    
    const animate = () => {
      if (isHovered) {
        // More dramatic movement when hovered
        xDirection = 0.7;
        yDirection = -0.5;
        x += baseSpeed * 2 * xDirection;
        y += baseSpeed * 2 * yDirection;
        
        if (Math.abs(x) > maxOffset * 1.5) xDirection *= -1;
        if (Math.abs(y) > maxOffset * 1.5) yDirection *= -1;
        
        const rotation = (x + y) / 15; // More rotation
        character.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(1.1)`;
      } else {
        // Change direction if reached limits
        if (Math.abs(x) > maxOffset) xDirection *= -1;
        if (Math.abs(y) > maxOffset) yDirection *= -1;
        
        // Update position
        x += baseSpeed * xDirection;
        y += baseSpeed * yDirection;
        
        // Apply transformation with slight rotation based on position
        const rotation = (x + y) / 20; // -3 to +3 degrees
        character.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
      }
      
      // Continue animation
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, speed]);

  return (
    <div 
      ref={characterRef}
      className={`absolute z-10 ${positionClasses[position]} transition-transform cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Glow effect behind character - stronger when hovered */}
        <div 
          className={`absolute inset-0 blur-xl transition-all duration-300 rounded-full transform scale-150 ${
            isHovered 
              ? "bg-primary/40 scale-[1.7]" 
              : "bg-primary/20"
          }`}
        ></div>
        
        {/* Character image - smaller size for the dashboard */}
        <img 
          src={imagePath} 
          alt="Anime character" 
          className={`w-24 h-24 md:w-32 md:h-32 object-contain transition-all duration-300 ${
            isHovered 
              ? "drop-shadow-[0_0_25px_rgba(217,70,239,0.8)]" 
              : "drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]"
          }`}
          style={{ 
            filter: `drop-shadow(0 0 ${isHovered ? '20px' : '10px'} rgba(126, 105, 171, 0.7))` 
          }}
        />
        
        {/* Interactive tooltip that appears on hover */}
        <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30 text-sm font-future whitespace-nowrap transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}>
          Click to interact!
        </div>
      </div>
    </div>
  );
};

export default FloatingAnimeCharacter;
