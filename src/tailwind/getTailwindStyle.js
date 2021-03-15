import tailwindProps from './tailwindProps';
import tailwindPropToStyle from './tailwindPropToStyle';

const hasUpperCase = str => str.toLowerCase() !== str;

export default (props, {
  ignore = [],
  prefix
} = {}) => {
  // console.log('props', props);

  // console.log('theme', tailwindcss.theme);
  // console.log('colors', tailwindcss.theme.colors);
  // console.log('spacing', tailwindcss.theme.spacing);

  return !!props &&
    Object.keys(props).reduce((twClasses, key) => {
      if (
        ignore.includes(key) ||
        props[key] === false ||
        typeof props[key] === 'undefined'
      ) {
        return twClasses;
      }

      let type = key;

      if (!tailwindProps.includes(type)) return twClasses

      if (hasUpperCase(type)) {
        type = paramCase(type);
      }

      return [...twClasses, tailwindPropToStyle(type, props[key], prefix)]
    }, []);
}
