// components/Loader.tsx
'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import type Spline from '@splinetool/react-spline';

// ✅ Dynamically import Spline with proper typing
const SplineScene = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-white animate-pulse">Loading...</div>
    </div>
  ),
}) as typeof Spline;

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <SplineScene scene="https://prod.spline.design/dFaU5JOutgAR1-Hx/scene.splinecode" />
    </div>
  );
};

export default Loader;
