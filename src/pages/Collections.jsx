import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ALL = [
  // RINGS (Gold)
  {cat:'gold',type:'rings',badge:'Bestseller',name:'Secret Garden Gold Ring',sub:'22K Gold · Rings',price:'₹40,525',img:'https://images.unsplash.com/photo-1605100804763-247f6612089fb?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'rings',badge:'',name:'Petal Poetry Gold Ring',sub:'22K Gold · Rings',price:'₹32,503',img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&auto=format&fit=crop'},
  {cat:'gemstone',type:'rings',badge:'New',name:'Twilight Petal Tourmaline Ring',sub:'Gemstone · Rings',price:'₹41,839',img:'https://images.unsplash.com/photo-1573408301145-b98c4af06b8f?w=600&q=85&auto=format&fit=crop'},
  
  // NECKLACES
  {cat:'gold',type:'necklaces',badge:'Only 1 Left',name:'Velvet Blossom Gold Necklace',sub:'22K Gold · Necklace Set',price:'₹1,80,825',img:'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'necklaces',badge:'',name:'Roselight Lotus Gold Necklace',sub:'22K Gold · Necklaces',price:'₹1,65,038',img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&auto=format&fit=crop'},
  
  // EARRINGS
  {cat:'gold',type:'earrings',badge:'',name:'Lotus Blush Gold Hoop Earrings',sub:'22K Gold · Earrings',price:'₹52,608',img:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'earrings',badge:'Only 1 Left',name:'Blushing Bloom Gold Hoops',sub:'22K Gold · Earrings',price:'₹47,880',img:'https://images.unsplash.com/photo-1588444650733-d0767b753fc8?w=600&q=85&auto=format&fit=crop'},

  // DIAMOND
  {cat:'diamond',type:'rings',badge:'New',name:'Starlight Solitaire Ring',sub:'Diamond · Rings',price:'₹1,25,000',img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&auto=format&fit=crop'},
  {cat:'diamond',type:'rings',badge:'Bestseller',name:'Eternity Diamond Band',sub:'Diamond · Rings',price:'₹95,000',img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&auto=format&fit=crop'},
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Collections() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCat = searchParams.get('cat') || 'all';

  const handleCatClick = (cat) => {
    if (cat === 'all') searchParams.delete('cat');
    else searchParams.set('cat', cat);
    setSearchParams(searchParams);
  };

  const filtered = ALL.filter(p => currentCat === 'all' || p.cat === currentCat);

  return (
    <main style={{ padding: '160px 48px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      
      {/* FILTER BAR */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '80px' }}>
        {['all', 'gold', 'diamond', 'gemstone'].map(cat => (
          <button 
            key={cat}
            onClick={() => handleCatClick(cat)}
            style={{
              padding: '12px 32px',
              backgroundColor: currentCat === cat ? '#fff' : 'transparent',
              color: currentCat === cat ? '#000' : '#fff',
              border: '1px solid #fff',
              borderRadius: '50px',
              textTransform: 'uppercase',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              transition: 'all 0.3s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        key={currentCat}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '40px'
        }}
      >
        <AnimatePresence>
          {filtered.map((p, idx) => (
            <motion.div 
              key={p.name + idx} 
              variants={itemVariants}
              layout
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', marginBottom: '20px' }}>
                <motion.img 
                  src={p.img} 
                  alt={p.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                {p.badge && (
                  <div style={{
                    position: 'absolute', top: '16px', left: '16px',
                    backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff',
                    padding: '8px 16px', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em'
                  }}>
                    {p.badge}
                  </div>
                )}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                {p.sub}
              </div>
              <div style={{ fontFamily: 'var(--ff-serif)', fontSize: '1.25rem', marginBottom: '8px' }}>
                {p.name}
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                {p.price}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
    </main>
  );
}
