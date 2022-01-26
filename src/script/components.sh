#!/bin/bash
# Creates boilerplate component for React Component
#https://daveceddia.com/react-cli-with-bash/
#https://gist.github.com/GoodMattwin/eba19a6ec4fb2626e708e91aa534f9f2
#https://react-bootstrap.github.io/components/alerts/


#COMPONENT_PATH="C:\\Users\\inkol\\code\\react\\react-components-lib\\src\\components\\"


COMPONENT_ARRAY=(
  Alerts
  Accordion
  Badge
  Breadcrumb
  Buttons
  Group
  Cards
  Carousel
  Close
  Button
  Dropdowns
  Figures
  Images
  List
  Group
  Modal
  Navs
  Navbar
  Offcanvas
  Overlays
  Pagination
  Placeholder
  Popovers
  Progress
  Spinners
  Table
  Tabs
  Tooltips
  Toasts
)

for COMPONENT in ${COMPONENT_ARRAY[@]}; do

COMPONENT_PATH="C:\\Users\\inkol\\code\\react\\react-components-lib\\src\\atoms\\"
INDEX_JS_CONTENT="import $COMPONENT from './$COMPONENT';

export {
    $COMPONENT
};"
STORIES_CONTENT="import React from 'react';
import $COMPONENT from './$COMPONENT';
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
  title: 'components/$COMPONENT/Basic',
  component: $COMPONENT,
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

const Template = (args) => <$COMPONENT {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',
  // docs: {
  //   page: null,
  // },
};

Basic.args = {
  label: '$COMPONENT',
  backgroundColor: 'aliceblue',
  color: '#000000'
};"

COMPONENT_CONTENT="import React from 'react';
import PropTypes from 'prop-types';

export default function $COMPONENT({ label = 'button', backgroundColor, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor, border: 'none', padding: '0.7rem', borderRadius: '4px' }}>
      {label}
    </button>
  );
}

$COMPONENT.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

$COMPONENT.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};"

    echo "Component Name : $COMPONENT"
    echo "$COMPONENT_PATH$COMPONENT"
    cd $COMPONENT_PATH
    mkdir $COMPONENT
    cd "$COMPONENT_PATH$COMPONENT"
    touch $COMPONENT.js
    touch $COMPONENT.stories.js
    touch index.js

    echo "$COMPONENT_CONTENT" >>$COMPONENT.js
    echo "$STORIES_CONTENT" >>$COMPONENT.stories.js
    echo "$INDEX_JS_CONTENT" >>index.js
done


sleep 5s # Waits 5 seconds.
