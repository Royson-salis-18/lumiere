import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [productData, setProductData] = useState(null);

  const openModal = (product) => {
    setProductData(product);
  };

  const closeModal = () => {
    setProductData(null);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen: !!productData, productData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
