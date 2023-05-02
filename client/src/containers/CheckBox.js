import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import './styles.css';

const CheckboxDemo = ({triggerStatus, status}) => (
      <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1" onClick={triggerStatus} checked={status||false}>
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon width={20} height={20}/>
        </Checkbox.Indicator>
      </Checkbox.Root>
);

export default CheckboxDemo;