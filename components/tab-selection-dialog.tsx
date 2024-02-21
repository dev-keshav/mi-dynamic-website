import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './dialog.css';
import { Grid } from 'lucide-react';
import CheckboxDemo from './ui/Checkbox';
import { Label } from '@radix-ui/react-select';
import ScheduleDemo from './search/schedule-demo';


const fieldOptions = [
  'Chapter', 'Destination Country', 'Heading', 'HS Code', 'HS Code Description',
  'Month', 'Net Weight KG', 'Quantity', 'Regime', 'SITC Code', 'SITC Description',
  'Sub Heading', 'Total Value EURO', 'Total Value USD', 'Trade Type', 'Unit', 'Year'
];

const selections =[
  'Destination Country', 'Heading', 'HS Code', 'HS Code Description',
  'Month', 'Net Weight KG', 'Quantity', 'Regime', 'SITC Code'
]

const MyDialog = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDivClick = () => {
    setOpen(true);
  };

  return(
    <>{open && (
      <ScheduleDemo
        handleKeyPress={(e) => {
          if (e.key === 'Escape') {
            setOpen(false);
          }
        }}
        handleBackdropClick={() => {
          setOpen(false);
        }}
      />
    )}
  <Dialog.Root>
    <Dialog.Trigger asChild={true}>
    <div style={{ padding: '2px', cursor: 'pointer' }}>
        <Grid size={19} color="black" />
      </div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay sticky z-[1000]" />
      <Dialog.Content className="DialogContent max-w-950px  sticky z-[1000] mt-0">
        <Dialog.Title className="DialogTitle">Select Fields</Dialog.Title>
        <div className='border-b-2 border-gray-300 mt-4'/>
        <div className='flex flex-row wrap'>
          <div style={{maxWidth:'690px'}}>
        <Dialog.Description className="DialogDescription">
        Select up to 12 fields listed on the left to include the field in the query result
        </Dialog.Description>
        {/* multiple elements with with label and checkbox */}
        <div className='flex flex-row flex-wrap '>
        
        {fieldOptions.map((label)=>(
          <Dialog.Close asChild>
          <div style={{border: '1px solid #dedede',
          width: '214px',
          padding: '9px 6px',
          margin: '3px',
          borderLeft: '3px solid #f18c29',}} onClick={handleDivClick}>
            <CheckboxDemo key={label} label={label} />
          </div>
          </Dialog.Close>
        ))}
        </div>
        </div>
        
        <div style={{width:'100%'}}>
        {/* display the selected items in individual cards display vertically scrollable */}
        <div>
          Fields Selected
        </div>
        <div style={{background:'#f2f0f0', maxWidth:'194px', padding:'10px' }}>
          {selections.map((label)=>(<div className='cursor-pointer  max-w-[calc(100%-10px)] mb-2 bg-white  p-1 px-4  relative text-base' style={{border:'1px solid rgb(204, 204, 204)', borderRadius: '3px'}}>
           <span className="text-blue-500 hover:text-blue-700 text-xs font-nunito-sans">{label}</span>
          </div>))}
        </div>
        </div>
        </div>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className=" rounded-none border-org text-org bg-white hover:bg-org hover:text-white text-14 leading-1 font-light h-35" style={{ border: '1px solid #f18c29', fontSize: '13px',padding: '7px 22px'}}>SAVE </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton"  aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root></>
)};

export default MyDialog;