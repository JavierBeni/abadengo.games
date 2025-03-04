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
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: block;
  }
  a {
    margin-top: 10px;
    margin-left: auto;
    width: fit-content;
  }
`;

export const ItemImage = styled.img`
  width: 33%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
  }
`;

export const ItemInfo = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.colors.darksecondary};
  padding-left: 15px;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
  }
`;

export const ItemName = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ItemPrice = styled.p<{disabled: boolean}>`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme, disabled }) => disabled ? theme.colors.white : theme.colors.grey};
  text-decoration: ${({ disabled }) => disabled ? null : "line-through"};
`;

export const ItemDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre;
  text-wrap: auto;
`;