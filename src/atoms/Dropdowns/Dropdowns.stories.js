import React from 'react';
import Dropdowns from './Dropdowns';
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
  title: 'components/Dropdowns/Basic',
  component: Dropdowns,
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

const Template = (args) => <Dropdowns {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',
  // docs: {
  //   page: null,
  // },
};

Basic.args = {
  label: 'Dropdowns',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
