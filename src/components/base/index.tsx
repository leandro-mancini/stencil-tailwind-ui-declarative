import classnames from 'classnames';

import { FunctionalComponent, h } from "@stencil/core";
import { tailwindProps, getTailwindClassNames } from './../../tailwind';
import { filterProps } from './../../utils';

export const Base: FunctionalComponent = (props, children) => {
  return <div
    {...filterProps(props, tailwindProps)}
    class={classnames(
      getTailwindClassNames({ ...props })
    )}>
    {children}
  </div>
};
