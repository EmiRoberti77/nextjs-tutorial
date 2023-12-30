'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState<string>('home');
  return (
    <div>
      <h1>Welcome {value}</h1>
    </div>
  );
}
