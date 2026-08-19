import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../context/ModalContext';

export default function ProductModal() {
  const { isModalOpen, productData, closeModal } = useModal();

  if (!isModalOpen || !productData) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={closeModal}>
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={closeModal}>✕</button>
          
          <div className="modal-grid">
            <div className="modal-img-wrap">
              <img src={productData.img} alt={productData.name} />
            </div>
            
            <div className="modal-details">
              <div className="modal-eyebrow">Lumière Exclusive</div>
              <h2 className="modal-title text-serif">{productData.name}</h2>
              <div className="modal-price text-gold">{productData.price}</div>
              
              <p className="modal-desc">
                {productData.desc || "An exquisite piece crafted by master artisans to elevate your curated collection. Explore the depth of form, light, and luxury."}
              </p>
              
              <div className="modal-specs">
                <div className="spec-item">
                  <span>Material</span>
                  <strong>18K Solid Gold</strong>
                </div>
                <div className="spec-item">
                  <span>Gemstone</span>
                  <strong>VVS1 Diamonds</strong>
                </div>
                <div className="spec-item">
                  <span>Availability</span>
                  <strong>In Stock</strong>
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn-solid-dark modal-add-btn" onClick={() => {
                  alert('Added to Cart!');
                  closeModal();
                }}>
                  Add to Cart
                </button>
                <button className="btn-wishlist-modal">♡</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
