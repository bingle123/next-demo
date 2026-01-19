// TimeDisplay.tsx
'use client';

import { useState, useEffect } from 'react';

export default function TimeDisplay() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(0);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());
    
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <div>时间加载中...</div>;
  }

  return (
    <div>
      <p>当前时间戳: {now}</p>
      <p>格式化时间: {new Date(now).toLocaleString()}</p>
    </div>
  );
}