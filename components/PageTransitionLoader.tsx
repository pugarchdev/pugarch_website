'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LOADER_CONFIG } from '@/config/loader.config';

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if loader is enabled
    if (!LOADER_CONFIG.enabled) return;

    // Check if current route should be excluded
    if (LOADER_CONFIG.excludeRoutes.some(route => pathname.startsWith(route))) {
      return;
    }

    // Check if route is in include list (if specified)
    if (LOADER_CONFIG.includeRoutes.length > 0) {
      if (!LOADER_CONFIG.includeRoutes.some(route => pathname.startsWith(route))) {
        return;
      }
    }

    // Show loader when route changes
    setIsLoading(true);
    setIsVisible(true);

    // Ensure minimum display time
    const minTimer = setTimeout(() => {
      setIsLoading(false);
    }, LOADER_CONFIG.minDuration);

    // Hide loader after full duration
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, LOADER_CONFIG.duration);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Beautiful Animated Loader */}
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative">
          <div className="text-5xl font-bold text-white animate-pulse">
            PUGARCH
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-50 animate-pulse"></div>
        </div>

        {/* Spinning Circles */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
          <div 
            className="absolute inset-2 border-4 border-transparent border-t-blue-500 rounded-full animate-spin" 
            style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
          ></div>
        </div>

        {/* Loading Text */}
        {LOADER_CONFIG.fallback.showText && (
          <p className="text-purple-400 text-lg animate-pulse">
            {LOADER_CONFIG.fallback.text}
          </p>
        )}
      </div>
    </div>
  );
}
