export default function Loading() {
  return (
    <div className="container" style={{ padding: 'var(--section-padding) 0', minHeight: '100vh' }}>
      <div style={{ width: '100%', height: '60vh', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '8px', marginBottom: '4rem' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2rem' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ width: '100%', aspectRatio: '16/10', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '8px' }} />
        ))}
      </div>
    </div>
  );
}
