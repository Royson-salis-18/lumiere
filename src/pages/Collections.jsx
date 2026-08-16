import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Collections() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('cat') || 'All';

  return (
    <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
      <h1 className="serif" style={{ fontSize: '3rem', marginBottom: '20px' }}>
        {category.charAt(0).toUpperCase() + category.slice(1)} Collections
      </h1>
      <p style={{ color: 'var(--mid)' }}>The collections page is currently being migrated to React.</p>
    </div>
  );
}
