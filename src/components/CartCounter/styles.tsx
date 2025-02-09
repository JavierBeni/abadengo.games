import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi'; // Usa react-icons para el ícono del carrito

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  position: relative;
`;

export const CartIcon = styled(FiShoppingCart)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.lightprimary};
`;

export const ItemCount = styled.span`
  position: absolute;
  top: -6px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  padding: 2px 6px;
  min-width: 18px;
  text-align: center;
`;

export const TotalPrice = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.lightprimary};
`;
