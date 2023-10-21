import PropTypes from 'prop-types';
import {Stat, Title, StatList, Item, Label, Percentage} from "./Statistics.styled"

export const Statistics = ({ title, status }) => {
    return (
        <Stat >
        {title && <Title>{title }</Title>}

        <StatList>
          {status.map(({ id, label, percentage }) => {
            return (
              <Item key={id}>
                <Label>{label}</Label>
                <Percentage>{percentage}%</Percentage>
              </Item>
            )
          })}
          
    
  </StatList>
</Stat>
)
}

Statistics.propTypes = {
  status: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired

    }
  ))
}
    