import React from 'react';

export default function AboutLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <div className="about-layout">
      <h2>About Layout</h2>
      {children}
    </div>
  );
}
