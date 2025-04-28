import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About',
  description: 'About me',
};


export default function About() {
  return <h3>My About page</h3>;
}
