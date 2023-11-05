import { ContainerFilter } from './styles/filter.styles';

export const Filter = ({ filter, change }) => {
  return (
    <ContainerFilter>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={evt => change(evt.target.value)}
      ></input>
    </ContainerFilter>
  );
};
