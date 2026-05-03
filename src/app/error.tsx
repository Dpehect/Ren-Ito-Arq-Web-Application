'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '1rem' }}>Something went wrong!</h2>
      <p style={{ color: 'var(--fg-secondary)', marginBottom: '2rem' }}>Failed to load the architectural portfolio.</p>
      <button
        onClick={() => reset()}
        className="interactive"
        style={{
          padding: '1rem 2rem',
          backgroundColor: 'var(--fg-primary)',
          color: 'var(--bg-primary)',
          border: 'none',
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          cursor: 'pointer'
        }}
      >
        Try again
      </button>
    </div>
  );
}
