import './styles.css';

export const Button = ({ text, onClick, id, disabled }) => (
  <button 
    disabled={disabled}
  className="button" id={id} onClick={onClick}>
    {text}
  </button>
);
