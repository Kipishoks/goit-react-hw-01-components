import PropTypes from 'prop-types';
import {Stat, Title, StatList, Item, Label, Percentage} from "./Statistics.styled"

export const Statistics = ({ title, status }) => {
    return (
        <Stat >
        <Title>{title}</Title>

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
  title: PropTypes.string,
  status: PropTypes.array
}
    