import React from 'react';
import { Play } from 'lucide-react';

interface VideoPlaceholderProps {
  className?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ className = '' }) => {
  return (
    <div className={`w-full relative aspect-video rounded-xl bg-yellow-100 border-3 border-black text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`}>
      {/* Subtle halftone/dots background pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none rounded-xl" />
      
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 p-4">
        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-black text-yellow-300 border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-105">
          <Play className="w-7 h-7 md:w-10 md:h-10 fill-current ml-1" />
        </div>
        <span className="font-black text-xl md:text-3xl tracking-widest text-black select-none uppercase">
          動画
        </span>
      </div>
    </div>
  );
};
