import * as React from 'react';
import {green500, orange500} from 'material-ui/styles/colors';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import IndeterminateCheckBox from 'material-ui/svg-icons/toggle/indeterminate-check-box';

const styles = {
  position: 'absolute',
  top: '15px'
};

export const TaskCheckbox: React.StatelessComponent<{}> = () => (
  <span style={styles}>
    <IndeterminateCheckBox color={orange500} />
  </span>
);
