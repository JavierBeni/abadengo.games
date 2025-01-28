import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(255, 255, 0, 0.5);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  text-align: center;
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;
