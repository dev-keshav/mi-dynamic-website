import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';



interface CheckboxDemoProps {
    label: string;
  }
  
  const CheckboxDemo: React.FC<CheckboxDemoProps> = ({ label }) => (
    <form>
      <div className="flex items-center flex-row-reverse justify-between ">
        <Checkbox.Root
          className="shadow-blackA4 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
          defaultChecked
          id={label}
        >
          <Checkbox.Indicator className="text-violet11">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          style={{ fontSize: '12px', fontWeight: '500' }}
          className="font-semibold  list-none text-sm text-black"
          htmlFor={label}
        >
          {label}
        </label>
      </div>
    </form>
  );
  
  

export default CheckboxDemo;