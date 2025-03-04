import { html } from 'lit';
import { defineCustomElements } from '../../../dist/loader';

defineCustomElements();

export default {
  title: 'Components/AppButton',
};

export const Primary = () => `<app-button label="Primary" variant="primary"></app-button>`;
export const Secondary = () => html`<app-button label="Secondary" variant="secondary"></app-button>`;