// components/Loader.tsx
'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// ✅ Dynamic import without loading text
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
}) as any;

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <Spline scene="https://prod.spline.design/dFaU5JOutgAR1-Hx/scene.splinecode" />
    </div>
  );
};

export default Loader;
