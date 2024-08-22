import PropTypes from 'prop-types';
import { memo } from 'react';

// Define el componente como una función y pásalo a memo
const Small = memo(({ value }) => {
  console.log('me volví a llamar :(');

  return <small>{value}</small>;
});

Small.displayName = 'Small'; // Asignar un displayName

export default Small;

Small.propTypes = {
  value: PropTypes.number.isRequired,
};