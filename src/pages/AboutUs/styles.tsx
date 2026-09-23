import styled from 'styled-components';

export const Container = styled.div`
  max-width: 950px;
  margin: 20px auto;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: 20px 16px;
    padding: 16px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0  0 20px 0;
`;


export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

export const SectionContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
`;
