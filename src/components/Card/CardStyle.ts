import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 20px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  margin: 15px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  object-fit: cover;
  border: 1px solid #eaeaea;
`;

export const ProductTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 12px 0;
  text-align: center;
  color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #007bff;
  margin: 5px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FavoriteIcon = styled.div`
  cursor: pointer;
  font-size: 26px;
  color: #ff4081;
  margin-left: 10px;

  &:hover {
    color: #e91e63;
  }
`;
