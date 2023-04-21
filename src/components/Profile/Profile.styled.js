import styled from 'styled-components';

export const ProfileWrap = styled.div`
  width: 474px;
  margin-bottom: 12px;
  overflow: hidden;

  border-radius: 10px;
  border: 1px solid silver;
  box-shadow: 2px 1px 1px silver;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  gap: 24px;

  background-color: #ffffff;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 32px;
  font-weight: 600;
`;

export const Tag = styled.p`
  font-size: 28px;
  color: silver;
`;
export const Location = styled(Tag)``;

export const Stats = styled.ul`
  display: flex;

  background-color: #f5fffa;

  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: 33.3%;
    aspect-ratio: 1 / 1;
    border-top: 1px solid silver;

    &: not(: last-child) {
      border-right: 1px solid silver;
    }
  }
`;

export const Label = styled.span`
  font-size: 24px;
  color: silver;
`;

export const Quantity = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
