import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  out: { opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeIn' } }
};

// Simulated mock data for different collections using the generated high-res local images
const COLLECTION_IMAGES = [
  { img: '/img1_ring.png', name: 'Solitaire Halo', price: '$8,200' },
  { img: '/img2_necklace.png', name: 'Sapphire Drop', price: '$12,400' },
  { img: '/img3_earrings.png', name: 'Ruby Cascades', price: '$14,000' },
  { img: '/img4_vintage.png', name: 'Heritage Band', price: '$4,500' },
  { img: '/img5_pearls.png', name: 'South Sea Choker', price: '$6,900' },
  { img: '/img1_ring.png', name: 'Cushion Cut', price: '$9,200' },
  { img: '/img2_necklace.png', name: 'Sapphire Pendant', price: '$11,000' },
  { img: '/img3_earrings.png', name: 'Ruby Chandeliers', price: '$15,000' },
  { img: '/img4_vintage.png', name: 'Intricate Gold Band', price: '$3,800' },
  { img: '/img5_pearls.png', name: 'Classic Pearl String', price: '$5,400' },
  { img: '/img1_ring.png', name: 'Diamond Solitaire', price: '$7,500' },
  { img: '/img2_necklace.png', name: 'Oceanic Sapphire', price: '$13,200' },
];

export default function CollectionDetail() {
  const { id } = useParams();
  const { openModal } = useModal();

  // Format ID to title case (e.g., "rakhi-edit" -> "Rakhi Edit")
  const formatTitle = (str) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <motion.main 
      className="page-container collection-detail-page"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="collection-detail-header">
        <span className="section-label" style={{ marginBottom: '16px' }}>Curated Masterpieces</span>
        <h1 className="text-massive">{formatTitle(id)}</h1>
        <p className="page-body-large" style={{ maxWidth: '800px', margin: '40px auto 100px auto', textAlign: 'center' }}>
          Discover the exquisite pieces within the {formatTitle(id)} collection. Every gem is hand-selected and crafted into a timeless piece of art, exclusively designed for our Atelier.
        </p>
      </div>

      <div className="massive-masonry-grid">
        {COLLECTION_IMAGES.map((item, idx) => (
          <motion.div 
            key={idx} 
            className="masonry-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
            onClick={() => openModal(item)}
            style={{ cursor: 'pointer' }}
          >
            <div className="product-img-wrap">
              <img src={item.img} alt={item.name} />
              <button className="btn-wishlist">♡</button>
            </div>
            <div className="product-info-minimal">
              <h3 className="product-name">{item.name}</h3>
              <div className="product-price">{item.price}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
