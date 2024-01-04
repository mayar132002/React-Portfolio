import PropTypes from 'prop-types';

const ToggleButton = ({ setOpen }) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="small-toggle-button" // Add a class for styling
    >

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="SVGRepo_iconCarrier">
    <rect x="4" y="5" width="16" height="2" fill="#000000" />
    <rect x="4" y="11" width="16" height="2" fill="#000000" />
    <rect x="4" y="17" width="16" height="2" fill="#000000" />
  </g>
</svg>;
    </button>
  );
};

ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default ToggleButton;
