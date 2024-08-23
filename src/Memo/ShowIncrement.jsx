import PropTypes from "prop-types";

const ShowIncrement = ({increment}) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
};

export default ShowIncrement;

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired,
    };