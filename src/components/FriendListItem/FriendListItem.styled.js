import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 474px;
  height: 96px;
  padding-left: 12px;

  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);

  &: not(: last-child) {
    margin-bottom: 12px;
  } ;
`;

export const Status = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-size: 32px;
  font-weight: 600;
`;
