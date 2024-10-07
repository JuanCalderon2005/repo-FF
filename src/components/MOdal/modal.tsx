
import React, { useState } from 'react';
import styled from 'styled-components';

interface CardProps {
    product: {
        id: number;
        image: string;
        title: string;
        description: string;
    };
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: CardProps['product'];
}


const ProductImage = styled.img`
  width: 100%; 
  max-width: 400px; 
  height: 300px; 
  object-fit: cover; 
  border-radius: 10px; 
  margin: 0 auto;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  width: 80%;
  max-width: 500px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transform: translateY(-10px);
  animation: fadeIn 0.3s ease-out forwards;

  @keyframes fadeIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #ff0000;
  }
`;

const ExitButton = styled.button`
    background: #ff0000;
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background: #cc0000;
    }
`;

export const Modal = ({ isOpen, onClose, product }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <h2>{product.title}</h2>
                <ProductImage src={product.image} alt={product.title} />
                <p>{product.description}</p>
                <ExitButton onClick={onClose}>Cerrar</ExitButton>
            </ModalContent>
        </ModalOverlay>
    );
};
