import * as React from 'react';
import * as ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';
import Button from './Button';

class CanopyButton extends HTMLElement {
  static get observedAttributes() {
    return ['primary', 'outline', 'compact'];
  }

  mountPoint: HTMLButtonElement;
  primary: boolean | null = null;
  outline: boolean | null = null;
  compact: boolean | null = null;

  createButton(className: string, style: object) {
    return React.createElement(Button, { className, ...style }, React.createElement('slot'))
  }

  connectedCallback() {
    this.mountPoint = document.createElement('button');
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(this.mountPoint);
    const className = this.className;
    const styleProps = {
      primary: this.getAttribute['primary'],
      outline: this.getAttribute['outline'],
      compact: this.getAttribute['compact']
    }

    ReactDOM.render(this.createButton(className, {...styleProps}), this.mountPoint);
    retargetEvents(shadowRoot);
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    const className = this.className;
    const styleProps = {
      primary: this.getAttribute['primary'],
      outline: this.getAttribute['outline'],
      compact: this.getAttribute['compact'],
      [name]: newValue
    }
    ReactDOM.render(this.createButton(className, {...styleProps}), this.mountPoint);
  }
}
window.customElements.define('canopy-button', CanopyButton);
