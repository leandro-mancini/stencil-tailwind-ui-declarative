import PropTypes from 'prop-types';

const typography = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

const spacingShape = {
  t: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  r: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  b: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  l: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

const backgrounds = {
  bg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

const borders = {
  border: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]),
  borderB: PropTypes.number,
  borderL: PropTypes.number,
  borderR: PropTypes.number,
  borderT: PropTypes.number,
  rounded: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedB: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedBl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedBr: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedL: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedR: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedT: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedTl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedTr: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

const spacing = {
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape(spacingShape),
  ]),
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape(spacingShape),
  ]),
}

const sizing = {
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxH: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minH: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  'max-w': PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  'max-h': PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export const propTypes = {
  ...typography,
  ...backgrounds,
  ...spacing,
  ...sizing,
  ...borders
}

export default [
  ...Object.keys(propTypes),
]
