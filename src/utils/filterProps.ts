import * as lodash from 'lodash';

export default (componentProps, filterList) =>
  Object.keys(componentProps).reduce((newProps, prop) => {
    if (lodash.includes(filterList, prop)) {
      return newProps;
    }

    return {
      [prop]: componentProps[prop],
    }
  }, {})
