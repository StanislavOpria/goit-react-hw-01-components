import PropTypes from 'prop-types';
import { getRandomColor } from '../../utils/getRandomColor';
import {
  StatisticsWrap,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(info => (
          <Item key={info.id} bgColor={getRandomColor()}>
            <Label>{info.label}</Label>
            <Percentage>{info.percentage}</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsWrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
