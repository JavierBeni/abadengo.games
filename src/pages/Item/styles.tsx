import styled from 'styled-components';

export const ItemDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.78fr) minmax(320px, 1.22fr);
  gap: clamp(24px, 5vw, 72px);
  max-width: 1180px;
  margin: 32px auto 0;
  padding: clamp(16px, 2vw, 24px);
  border: 1px solid ${({ theme }) => theme.colors.darksecondary};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.darkprimaryt};
  box-shadow: 0 24px 70px ${({ theme }) => `${theme.colors.darkprimary}88`};
  align-items: flex-start;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 20px 16px 0;
    padding: 24px 18px 30px;
  }
  a {
    margin-top: 10px;
    margin-left: auto;
    width: fit-content;
  }
`;

export const ItemGallery = styled.div`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 16px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.darksecondary};

  & > div {
    min-height: 230px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 8px;

    & > div {
      min-height: 200px;
    }
  }
`;

export const ItemInfo = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 8px;
`;

export const ItemEyebrow = styled.span`
  color: ${({ theme }) => theme.colors.lightprimary};
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const ItemName = styled.h2`
  margin: 10px 0 14px;
  color: ${({ theme }) => theme.colors.lightsecondary};
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
`;
export const ItemSet = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.darksecondary};
`;

export const Availability = styled.span<{ available: boolean }>`
  padding: 7px 11px;
  border-radius: 999px;
  background: ${({ theme, available }) => available ? theme.colors.lightprimary : theme.colors.tertiary};
  color: ${({ theme, available }) => available ? theme.colors.black : theme.colors.white};
  font-size: 0.78rem;
  font-weight: 700;
`;

export const ItemMeta = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 28px 0 26px;
  padding: 14px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.darksecondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darksecondary};
  color: ${({ theme }) => theme.colors.lightprimary};
  font-size: 0.9rem;

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
  }
`;

export const DetailSection = styled.section`
  width: 100%;
  margin-bottom: 24px;
`;

export const ItemPrice = styled.p<{ available: boolean }>`
  display: flex;
  align-items: baseline;
  width: 100%;
  margin: 6px 0 0;
  padding-top: 22px;
  border-top: 1px solid ${({ theme }) => theme.colors.darksecondary};
  color: ${({ theme, available }) => available ? theme.colors.lightsecondary : theme.colors.grey};
  font-size: 2rem;
  font-weight: 800;

  > span:first-child {
    margin-right: auto;
    color: ${({ theme }) => theme.colors.lightprimary};
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`;

export const PriceValue = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  margin-left: auto;
  font-size: 2rem;

  small {
    font-size: 0.9rem;
    font-weight: 700;
  }
`;

export const ItemDescription = styled.p`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.98rem;
  line-height: 1.7;
  white-space: pre-line;
`;

export const PriceSeparator = styled.span`
  color: ${({ theme }) => theme.colors.darksecondary};
`;