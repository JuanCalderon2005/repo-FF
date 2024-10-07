import { CardProps } from '../../types/productInterface';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Button from "../UI/Button/Button";
import { CardContainer, ProductImage, ProductTitle, ProductPrice, ButtonContainer, FavoriteIcon } from "../Card/CardStyle";
import { useState } from 'react';
import { Modal } from '../MOdal/modal';

const Card: React.FC<CardProps> = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Producto agregado al carrito:', product.id);
  };

  const handleAddToLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (isLiked) {
        await fetch(`http://localhost:7000/auth/products/${product.id}/like`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Producto eliminado de favoritos:', product.id);
      } else {
   
        await fetch(`http://localhost:7000/auth/products/${product.id}/like`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Producto agregado a favoritos:', product.id);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error al modificar favoritos:', error);
    }
  };

  const handleCardClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <CardContainer onClick={handleCardClick}>
        <ProductImage src={product.image} alt={product.title} />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
        <ButtonContainer>
          <Button onClick={handleAddToCart} label="Agregar" />
          <FavoriteIcon onClick={handleAddToLike}>
            {isLiked ? <AiFillHeart color="#ff0000" /> : <AiOutlineHeart />}
          </FavoriteIcon>
        </ButtonContainer>
      </CardContainer>

      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          product={product} 
        />
      )}
    </>
  );
};

export default Card;