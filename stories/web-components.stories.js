import { html } from 'lit-html';

import '../src/buttons/canopy-button';

export default {
  title: 'Buttons',
  framework: "web-components"
};

export const withTextWC = () => html`
  <canopy-button>Click me!</canopy-button>
`
