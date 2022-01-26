#!/bin/bash
# Creates boilerplate component for React Component
#https://daveceddia.com/react-cli-with-bash/
#https://gist.github.com/GoodMattwin/eba19a6ec4fb2626e708e91aa534f9f2

COMPONENT_PATH="C:\\Users\\inkol\\code\\react\\react-components-lib\\src\\components\\"
INDEX_JS_CONTENT="import $1 from './$1';

export {
    $1
};"
STORIES_CONTENT="import React from 'react';
import $1 from './$1';
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
  title: 'components/$1/Basic',
  component: $1,
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

const Template = (args) => <$1 {...args} />;

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
};"

COMPNENT_CONTENT="import React from 'react';
import PropTypes from 'prop-types';

const $1 = (
    {
        id = '$1-1',
        type = 'text',
        defaultValue = 'akash',
        placeholder = 'Your username or email',
        className,
        style,
        onChange
    }) => {

    onChange = (e) => {
        defaultValue = e.target.value
    }


    return (
        <$1
            id={id}
            type={type}
            className={className}
            placeholder={placeholder}
            onChange={({ target: { value } }) => onChange(value)}
            aria-label="Your username or email"
            aria-invalid="false"
            value={defaultValue}
            name="username"
            aria-required="true"
            aria-describedby="tooltip-$1-1"
            style={{
                color: 'black',
                backgroundColor: '#f3f7f7',
                border: '0',
                borderRadius: '0',
                minWidth: '320px',
                width: '100%',
                height: '40px',
                outline: 'none',
                fontSize: '18px',
                padding: '1px 10px',
                boxShadow: 'inset 0 1px 4px rgb(0 0 0 / 10%), 0 0 0 transparent',
                marginBottom: '0',
                boxSizing: 'border-box',
                fontWeight: '400',
                style

            }}>
        </$1>
    );
}

$1.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onChange: PropTypes.func,
};

$1.defaultProps = {
    onChange: undefined,
};

export default $1;

"

echo "Component Name : $1"
echo "$COMPONENT_PATH$1"
cd $COMPONENT_PATH
mkdir $1
cd "$COMPONENT_PATH$1"
echo pwd
touch $1.js
touch $1.stories.js
touch index.js

echo "$COMPNENT_CONTENT" >>$1.js
echo "$STORIES_CONTENT" >>$1.stories.js
echo "$INDEX_JS_CONTENT" >>index.js
sleep 5s # Waits 5 seconds.
