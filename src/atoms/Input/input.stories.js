import React from 'react';
import Input from './Input';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

export default {
  title: 'atoms/Input/Basic',
  component: Input,
  parameters: {
    options: { selectedPanel: 'storybook/a11y/panel' },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    // onClick: { action: true },
  }
};
let value = 'akashdhar'

const handleChange = (event) => {
  console.log('Input change event fired :', event)
}

const Template = (args) => (
  <Input
    {...args}
    value={value}
    onChange={handleChange}

  />
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',
  // docs: {
  //   page: null,
  // },
};

Basic.args = {
  label: 'My Button',
  backgroundColor: 'aliceblue',
  color: '#000000'
};

