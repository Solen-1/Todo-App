import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon} from '@radix-ui/react-icons';
import './styles.css';

const SelectDemo = ({setSelect, select}) => (
  <Select.Root onValueChange={(e)=>setSelect(e)} value={select}>
    <Select.Trigger className="SelectTrigger" aria-label="Food">
      <Select.Value placeholder="Filter by..." />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content position='popper' side='bottom' sideOffset={10} className="SelectContent">
        <Select.Viewport className="SelectViewport">
          <Select.Group>
            <SelectItem value={true}>Finished</SelectItem>
            <SelectItem value={false}>Unfinished</SelectItem>
            <SelectItem value={null}>None</SelectItem>
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default SelectDemo;