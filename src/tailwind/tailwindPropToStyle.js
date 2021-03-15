import tailwindProps from './tailwindProps';
import tailwindcss from 'tailwindcss/defaultConfig';

const filterArray = (array, filters) => {
  const filterKeys = Object.keys(filters);
  return array.filter(item => {
    // validates all filter criteria
    return filterKeys.every(key => {
      // ignores non-function predicates
      if (typeof filters[key] !== 'function') return true;

      console.log(key);
      console.log(item);
      console.log(item[key]);

      return filters[key](item[key]);
    });
  });
}

export default (prop, values, prefix) => {
  values = values.split('.');

  if (prop === 'bg') {
    console.log('prop', prop);
    console.log('values', values);
    console.log('prefix', prefix);

    // for (let i = 0; i < values.length; i++) {
    //   console.log(values[i]);
    // }


    console.log('colors', tailwindcss.theme.colors);
    console.log(filterArray(values, tailwindcss.theme.colors));

    console.log('----------------------')
  }
}

