import styled from 'styled-components';

export const CardContainer = styled.div`
  height: fit-content;
  width: 225px;
  border: 1px solid ${({ theme }) => theme.colors.lightprimary};
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.lightprimary};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: -webkit-fill-available;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  border-radius: 8px;
  object-fit: contain;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    max-height: 250px;
  }
`;

export const Title = styled.h3`
  height: 50px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 1.5rem;
    height: 70px;
  }
`;

export const Price = styled.p<{ disabled: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme, disabled }) => disabled ? theme.colors.lightprimary : theme.colors.grey};
  ${({ disabled }) => (disabled ? '#666' : '#fff')};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 1.5rem;
  }
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
