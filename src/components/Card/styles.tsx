import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 350px;
  width: 225px;
  border: 1px solid ${({ theme }) => theme.colors.lightprimary};
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.lightprimary};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    height: 330px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  flex-shrink: 0;
  border-radius: 8px;
  object-fit: contain;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 160px;
  }
`;

export const Title = styled.h3`
  height: 50px;
  flex-shrink: 0;
  font-size: 1rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 50px;
  }
`;

export const Price = styled.p<{ disabled: boolean }>`
  margin-top: auto;
  margin-bottom: 4px;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme, disabled }) => disabled ? theme.colors.lightprimary : theme.colors.grey};
  ${({ disabled }) => (disabled ? '#666' : '#fff')};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-bottom: 4px;
  }
`;

export const PriceSeparator = styled.span`
  color: ${({ theme }) => theme.colors.darksecondary};
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Actions = styled.div`
  /* display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%; */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: contents;
    & > * {
      font-size: 1.5rem;
    }
  }
`;
