import React from 'react';
import { Badge } from './Badge';
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
  title: 'components/Badge/Basic',
  component: Badge,
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

const Template = (args) => <Badge {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',
};

Basic.args = {
  content: '51+',
  backgroundColor: '#32c766',
  color: 'black',
  padding: '2px 6px',
  borderRadius: '1.5em'
};
