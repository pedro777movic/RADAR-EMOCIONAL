'use client';

import { motion } from 'framer-motion';

type GuidedReadingProgressProps = {
  progress: number;
};

export function GuidedReadingProgress({ progress }: GuidedReadingProgressProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center p-3 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 motion-reduce:animate-none"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <p className="text-xs font-light text-muted-foreground">Modo análise ativado</p>
        </div>
        <div className="mt-1.5 w-full h-1 rounded-full bg-[#1E293B] overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-[#3B82F6]"
            style={{ boxShadow: '0 0 6px #3B82F6' }}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
}
