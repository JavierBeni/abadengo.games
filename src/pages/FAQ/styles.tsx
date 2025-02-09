import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 20px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 10px 0;
`;

export const Question = styled.div<{ isOpen: boolean }>`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightprimary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.darksecondary};
  }
`;

export const Answer = styled.div<{ isOpen: boolean }>`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
  display: inline-block;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
`;
