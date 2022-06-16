import React from 'react';
import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';
import Button, {ButtonProps} from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  onClick: () => {console.log('Default clicked')}
}

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button
    color="blue"
    onClick={() => {console.log('Secondary clicked')}}
    radius="lg"
  >
    Secondary
  </Button>
);