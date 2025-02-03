import styled from 'styled-components';

export const ItemDetailsWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  margin: 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: flex-start;
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
`;

export const ItemName = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ItemPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const ItemDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre;
`;