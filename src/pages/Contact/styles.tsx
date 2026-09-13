import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;

  & > div {
    display: flex;
    justify-content: space-around;
  }

  & a {
    color: ${({ theme }) => theme.colors.secondary};
    &:hover {
      color: ${({ theme }) => theme.colors.lightsecondary};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: 20px 16px;
    padding: 16px;

    & > div:first-of-type,
    & > div:last-of-type {
      flex-direction: column;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
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
  overflow-wrap: anywhere;
  & a {
    text-decoration: none;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`;
