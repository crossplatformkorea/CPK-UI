import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import type {Preview} from '@storybook/react';

const preview: Preview = {
  decorators: [withBackgrounds],

  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    backgrounds: {
      default: 'light', // 기본 배경 설정
      values: [
        {name: 'light', value: '#ffffff'},
        {name: 'dark', value: '#333333'},
      ],
    },

    toolbar: {
      theme: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
