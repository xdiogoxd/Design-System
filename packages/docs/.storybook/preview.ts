import type { Preview } from '@storybook/react';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#f8f8f8' },
        { name: 'dark', value: '#333333' },
        { name: 'custom', value: '#yourColorHex' },
      ],
    },
  },
};

export default preview;
