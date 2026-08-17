import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CollectionsIntro from '../components/CollectionsIntro';

const ALL = [
  // RINGS (Gold)
  {cat:'gold',type:'rings',badge:'Bestseller',badgeType:'gold-b',name:'Secret Garden Gold Ring',sub:'22K Gold · Rings',price:'₹40,525',orig:'',img:'https://images.unsplash.com/photo-1605100804763-247f6612089fb?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'rings',badge:'',badgeType:'',name:'Petal Poetry Gold Ring',sub:'22K Gold · Rings',price:'₹32,503',orig:'',img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&auto=format&fit=crop'},
  {cat:'gemstone',type:'rings',badge:'New',badgeType:'new-b',name:'Twilight Petal Tourmaline Ring',sub:'Gemstone · Rings',price:'₹41,839',orig:'',img:'https://images.unsplash.com/photo-1573408301145-b98c4af06b8f?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'rings',badge:'',badgeType:'',name:'Blooming Drift Gold Ring',sub:'22K Gold · Rings',price:'₹33,420',orig:'',img:'https://images.unsplash.com/photo-1588444650733-d0767b753fc8?w=600&q=85&auto=format&fit=crop'},

  // NECKLACES
  {cat:'gold',type:'necklaces',badge:'Only 1 Left',badgeType:'',name:'Velvet Blossom Gold Necklace Set',sub:'22K Gold · Necklace Set',price:'₹1,80,825',orig:'',img:'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'necklaces',badge:'',badgeType:'',name:'Roselight Lotus Gold Necklace',sub:'22K Gold · Necklaces',price:'₹1,65,038',orig:'',img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&auto=format&fit=crop'},
  {cat:'gemstone',type:'necklaces',badge:'Limited',badgeType:'gold-b',name:'Blossom Trail Tourmaline Pendant & Chain',sub:'Gemstone · Pendant Set',price:'₹1,09,470',orig:'',img:'https://images.unsplash.com/photo-1573408301145-b98c4af06b8f?w=600&q=85&auto=format&fit=crop'},

  // EARRINGS
  {cat:'gold',type:'earrings',badge:'',badgeType:'',name:'Lotus Blush Gold Hoop Earrings',sub:'22K Gold · Earrings',price:'₹52,608',orig:'',img:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'earrings',badge:'Only 1 Left',badgeType:'',name:'Blushing Bloom Gold Hoop Earrings',sub:'22K Gold · Earrings',price:'₹47,880',orig:'',img:'https://images.unsplash.com/photo-1588444650733-d0767b753fc8?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'earrings',badge:'',badgeType:'',name:'Untamed Halo Gold Stud Earrings',sub:'22K Gold · Earrings',price:'₹39,634',orig:'',img:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'earrings',badge:'Only 1 Left',badgeType:'',name:'Gilded Wave Gold Drop Earrings',sub:'22K Gold · Earrings',price:'₹93,313',orig:'',img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'earrings',badge:'',badgeType:'',name:'Stunning Abstract Drop Earrings',sub:'22K Gold · Earrings',price:'₹83,623',orig:'',img:'https://images.unsplash.com/photo-1573408301145-b98c4af06b8f?w=600&q=85&auto=format&fit=crop'},

  // BANGLES
  {cat:'gold',type:'bangles',badge:'Bestseller',badgeType:'gold-b',name:'Rosette Dream Gold Bangle',sub:'22K Gold · Bangles',price:'₹1,02,681',orig:'',img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'bangles',badge:'Bestseller',badgeType:'gold-b',name:'Golden Peach Starlet Bangle',sub:'22K Gold · Bangles · Starlet',price:'₹58,226',orig:'',img:'https://images.unsplash.com/photo-1599643478514-4a4e06d528c8?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'bangles',badge:'Bestseller',badgeType:'gold-b',name:'Golden Exquisite Starlet Bangle',sub:'22K Gold · Bangles · Starlet',price:'₹81,821',orig:'',img:'https://images.unsplash.com/photo-1599643478514-4a4e06d528c8?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'bangles',badge:'',badgeType:'',name:'Golden Sculptural Zoul Gold Bangle',sub:'22K Gold · Bangles · Zoul',price:'₹54,149',orig:'',img:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=85&auto=format&fit=crop'},
  {cat:'gold',type:'bangles',badge:'',badgeType:'',name:'Auric Golden Bangle',sub:'22K Gold · Bangles',price:'₹1,37,061',orig:'',img:'https://images.unsplash.com/photo-1588444650733-d0767b753fc8?w=600&q=85&auto=format&fit=crop'},

  // PENDANTS
  {cat:'gold',type:'pendants',badge:'',badgeType:'',name:'Dainty Om & Ganesha Gold Pendant',sub:'22K Gold · Pendants',price:'₹29,651',orig:'',img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&auto=format&fit=crop'},
  {cat:'gemstone',type:'pendants',badge:'Limited',badgeType:'gold-b',name:'Emerald Drop Pendant',sub:'Gemstone · Pendants · Precia',price:'₹56,000',orig:'',img:'https://images.unsplash.com/photo-1573408301145-b98c4af06b8f?w=600&q=85&auto=format&fit=crop'},

  // DIAMOND
  {cat:'diamond',type:'rings',badge:'New',badgeType:'new-b',name:'Starlight Solitaire Ring',sub:'Diamond · Rings · Mine',price:'₹1,25,000',orig:'',img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&auto=format&fit=crop'},
  {cat:'diamond',type:'rings',badge:'Bestseller',badgeType:'gold-b',name:'Eternity Diamond Band',sub:'Diamond · Rings · Mine',price:'₹95,000',orig:'',img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&auto=format&fit=crop'},

  // BRIDAL
  {cat:'bridal',type:'bangles',badge:'Bestseller',badgeType:'gold-b',name:'Bridal Kangan Set',sub:'22K Gold · Bangles · Viraaz',price:'₹88,000',orig:'',img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=85&auto=format&fit=crop'},
  {cat:'bridal',type:'necklaces',badge:'',badgeType:'',name:'Royal Polki Bridal Necklace',sub:'22K Gold · Necklaces · Viraaz',price:'₹2,40,000',orig:'',img:'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=85&auto=format&fit=crop'},

  // MANGALSUTRA
  {cat:'mangalsutra',type:'necklaces',badge:'',badgeType:'',name:'Geometric Filigree Gold Mangalsutra',sub:'22K Gold · Mangalsutra',price:'₹63,223',orig:'',img:'https://images.unsplash.com/photo-1573408301145-b98c4af06b8f?w=600&q=85&auto=format&fit=crop'},
  {cat:'mangalsutra',type:'necklaces',badge:'',badgeType:'',name:'Sacred Mosaic Gold Mangalsutra',sub:'22K Gold · Mangalsutra',price:'₹54,848',orig:'',img:'https://images.unsplash.com/photo-1588444650733-d0767b753fc8?w=600&q=85&auto=format&fit=crop'},
];

const titleMap = {
  'gold': ['The Gold', 'Collection', 'Pure 22K BIS Hallmarked gold jewellery.', 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85&auto=format&fit=crop'],
  'diamond': ['The Diamond', 'Collection', 'GIA certified conflict-free diamond pieces.', 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=85&auto=format&fit=crop'],
  'bridal': ['The Bridal', 'Trousseau', 'Exquisite sets for your most special day.', 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=900&q=85&auto=format&fit=crop'],
  'gemstone': ['Rare Gemstone', 'Collection', 'Vibrant ethically sourced stones.', 'https://images.unsplash.com/photo-1602751584552-8ba73aad10ee?w=900&q=85&auto=format&fit=crop'],
  'all': ['The Complete', 'Collection', 'Gold, Diamond, Gemstone & Bridal — curated from the finest artisan workshops across India.', 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=900&q=85&auto=format&fit=crop']
};

export default function Collections({ toggleWishlist, getWishlist }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCat = searchParams.get('cat') || 'all';
  const [currentType, setCurrentType] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 12;

  const handleCatClick = (cat) => {
    if (cat === 'all') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', cat);
    }
    setSearchParams(searchParams);
    setPage(1);
  };

  const filtered = ALL.filter(p =>
    (currentCat === 'all' || p.cat === currentCat) &&
    (!currentType || p.type === currentType)
  );

  const displayed = filtered.slice(0, page * perPage);

  const header = titleMap[currentCat] || titleMap['all'];
  const wishlist = getWishlist();

  return (
    <main>
      {currentCat === 'all' ? (
        <CollectionsIntro />
      ) : (
        <div className="page-hero">
          <div className="page-hero-inner">
            <div className="page-hero-text">
              <span className="label">500+ Designs</span>
              <h1 className="page-title">
                {header[0]}<br /><em>{header[1]}</em>
              </h1>
              <p className="page-sub">{header[2]}</p>
            </div>
            <div className="page-hero-img">
              <img src={header[3]} alt={header[0]} loading="eager" />
            </div>
          </div>
        </div>
      )}

      <div className="filter-section">
        <div className="filter-inner">
          <div className="f-group">
            <span className="f-label">Category</span>
            {['all', 'gold', 'diamond', 'gemstone', 'bridal', 'mangalsutra'].map(cat => (
              <button 
                key={cat} 
                className={`pill ${currentCat === cat ? 'active' : ''}`}
                onClick={() => handleCatClick(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="f-group">
            <span className="f-label">Type</span>
            {['rings', 'necklaces', 'earrings', 'bangles', 'pendants'].map(type => (
              <button 
                key={type} 
                className={`pill ${currentType === type ? 'active' : ''}`}
                onClick={() => {
                  setCurrentType(currentType === type ? '' : type);
                  setPage(1);
                }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="results-bar">
        <p className="results-count">Showing <b>{displayed.length}</b> of <b>{filtered.length}</b> pieces</p>
        <div className="sort-wrap">
          <select id="sortSel">
            <option value="best">Best Matches</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="new">Newest First</option>
          </select>
        </div>
      </div>

      <div className="prod-section">
        <div className="prod-grid">
          {displayed.map((p, idx) => {
            const isWished = wishlist.some(x => x.name === p.name);
            return (
              <div key={idx} className="prod-card">
                <div className="prod-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  {p.badge && <div className={`prod-badge ${p.badgeType}`}>{p.badge}</div>}
                  <button 
                    className={`prod-wish ${isWished ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); toggleWishlist(p); }}
                  >
                    {isWished ? '♥' : '♡'}
                  </button>
                </div>
                <div className="prod-cat">{p.sub}</div>
                <div className="prod-name">{p.name}</div>
                <div className="prod-price">
                  {p.price}
                  {p.orig && <del>{p.orig}</del>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {displayed.length < filtered.length && (
        <div className="load-wrap">
          <button className="btn-load" onClick={() => setPage(p => p + 1)}>Load More Pieces</button>
        </div>
      )}
    </main>
  );
}
