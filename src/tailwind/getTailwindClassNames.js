import { paramCase } from 'param-case';

import tailwindPropToClassName from './tailwindPropToClassName';
import tailwindProps, {
  propVariants
} from './tailwindProps';

const hasUpperCase = str => str.toLowerCase() !== str;

export default (props, {
  ignore = [],
  prefix
} = {}) => {
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

      return [...twClasses, tailwindPropToClassName(type, props[key], prefix)]
    }, []);
}
