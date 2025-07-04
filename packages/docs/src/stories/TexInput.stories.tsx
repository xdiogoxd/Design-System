import { StoryObj, Meta } from '@storybook/react';
import { TextInput, TextInputProps } from '@ignite-ui/react';

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  argTypes: {},
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {};

export const WithPrefix: StoryObj<TextInputProps> = {
  render: (args) => <TextInput {...args} prefix='cal.com/' />,
};
