import PropTypes from "prop-types";
const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-200 border border-gray-300 m-2 px-5 py-2 rounded-lg ">
        {name}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Button;
