// import classnames from 'classnames';
import { css } from '@emotion/css'
import ds from './../../design-system/myDesignSystem';
// import tailwindcss from 'tailwindcss/defaultConfig';

import { FunctionalComponent, h } from "@stencil/core";
// import { tailwindProps, getTailwindStyle } from './../../tailwind';
// import { filterProps } from './../../utils';


export const Base: FunctionalComponent<any> = (props, children) => {
  console.log(ds);
  console.log(props);
  console.log(ds.spacing(2))

  // const buttonStyles = css`
  //   background-color: ${ds.color(props.bg)}
  // `;

  const buttonStyles = css`
    color: ${ds.color(props.color)};
    background-color: ${ds.color(props.bg)};
    padding: ${ds.spacing(props.p)}
  `;

  return <div class={buttonStyles}>
    {children}
  </div>
  // return <div {...filterProps(props, tailwindProps)}
  //   class={classnames(
  //     getTailwindStyle({ ...props })
  //   )}>
  //   {children}
  // </div>
};
