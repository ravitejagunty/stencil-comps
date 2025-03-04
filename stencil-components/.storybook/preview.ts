import type { Preview } from '@storybook/web-components';
import { defineCustomElements } from '../dist/loader';
import '../src/global/styles.css'; // Import global styles

defineCustomElements(); // Register Stencil components

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
