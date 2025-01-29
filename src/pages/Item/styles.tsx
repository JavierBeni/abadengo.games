import styled from 'styled-components';

export const ItemDetailsWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: flex-start;
  height: 75vh;
`;

export const ItemImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemName = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ItemPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ItemDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;