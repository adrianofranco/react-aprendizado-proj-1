import P from 'prop-types';

import './styles.scss';

export const Button = ({ text, onClick, id, disabled = false }) => (
  <button disabled={disabled} className="button" id={id} onClick={onClick}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  id: P.string,
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
