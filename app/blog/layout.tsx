import React from 'react';

export default function BlogLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <div className="about-layout">
      <h2>blog Layout</h2>
      {children}
    </div>
  );
}
