import { Component, h, Element, ComponentInterface } from '@stencil/core';
import { getElementAttributes } from '../../utils/element-attributes.helpers';
import { Base } from '../base';

@Component({
    tag: 'ds-box',
    styleUrl: 'box.css'
})
export class Box implements ComponentInterface {

  @Element() el: HTMLElement;

  render() {
    const properties = getElementAttributes(this.el.attributes);

    console.log(properties);

    return <Base {...properties}>
      <slot/>
    </Base>;
  }
}
