import P from 'prop-types';
import './styles.scss';

export const TextInput = ({ searchValue, handleChange }) => {
  return <input className="text-input" onChange={handleChange} value={searchValue} type="search" placeholder="busca" />;
};

TextInput.propTypes = {
  searchValue: P.string,
  handleChange: P.func.isRequired,
};
