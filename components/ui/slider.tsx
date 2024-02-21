import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import ScheduleDemo from '../search/schedule-demo';

interface SliderInputProps {
  title: string;
  sub: string;
}

const SliderInput: React.FC<SliderInputProps> = ({ title,sub }) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="mb-4" onClick={() => setOpen(true)}>
      {open && (
        <ScheduleDemo
          handleKeyPress={(e) => {
            if (e.key === "Escape") {
              setOpen(false)
            }
          }}
          handleBackdropClick={() => {
            setOpen(false)
          }}
        />
      )}
      <span style={{ fontFamily: 'Roboto, sans-serif',
  color: '#333',
  fontSize: '1rem',
  fontWeight: 500, }}>{title}</span>
      <span style={{fontSize:'0.8rem',paddingLeft:'2px'}}>{sub}</span>
      
      <Slider.Root
        className="relative flex items-center justify-center  select-none touch-none w-[250px] ml-4 pt-6 h-5"
        defaultValue={[50]}
        max={100}
        step={1}
      >
        <Slider.Track className="bg-org relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-org rounded-full h-full" />
          
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5  bg-white shadow-[0_2px_10px] shadow-org4 rounded-[10px] hover:bg-org focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-org5"
          aria-label="Volume"
        />
      </Slider.Root>
      <div className="flex flex-row justify-center items-center pt-4">
            <input
              type="text"
              style={{
                width: '40%',
                margin: '10px',
                height: '30px',
                textAlign: 'center',
                border: '1px solid black',
                borderRadius: '2px',
              }}
              defaultValue="50"
            />
            <input
              type="text"
              style={{
                width: '40%',
                margin: '10px',
                height: '30px',
                textAlign: 'center',
                border: '1px solid black',
                borderRadius: '2px',
              }}
              defaultValue="50"
            />
          </div>
    </div>
  );
};

export default SliderInput;
