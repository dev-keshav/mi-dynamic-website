'use client'
import React, { useState } from "react";
import SelectBox from "@/components/form/select-box";
import { countries } from "@/constants";
import { ListPagination } from "@/components/ui/productPagination";

const ProductList = () => {
    const [activeTab, setActiveTab] = useState('export');

    const countryValues = countries.map((country) => ({
        value: country.toLowerCase(),
        label: country,
    }));

    const itemsList = ['A1 Chips', 'A1 Compound', 'A3 Paper', 'A4 Size Paper', 'A4 70 Gsm Paper', 'A4 Paper', 'A4 Sheet', 'A4 Size Paper 70 Gsm', 'A4 Copier', 'A4 Paper Print', 'A4 Sheet Paper', 'A4 Size Paper 80 Gsm', 'A4 Copier Paper', 'A4 Paper Sheet', 'A4 Sheets', 'A4 Size Paper Gsm', 'A4 Copy Paper', 'A4 Paper Size', 'A4 Size 70 Gsm Paper', 'A4 Size Xerox Paper', 'A4 File', 'A4 Print Paper', 'A4 Size Copier Paper', 'A4 Sticker']
    type TabType = 'export' | 'import';
    const toggleTab = (tab: TabType) => {
        setActiveTab(tab);
    };

    const isActive = (tab: TabType) => {
        return activeTab === tab ? 'border-[#F8992F]' : 'border-[#b6b6b6]';
    };

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const handlePageChange = () => {

    }

    return (
        <>
            <div className="flex justify-around items-center p-8">
                <h2 className="p-2 border-l-4 border-[#F8992F]" style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Poppins', fontWeight: 400, fontSize: '36px' }}>Product wise Export and Import Data</h2>
                <SelectBox
                    placeholder="Country"
                    className="w-[208px] h-[39px] ml-4 pl-5 mr-2"
                    options={countryValues}
                />
            </div>
            <div className="flex flex-col justify-around items-center p-8">
                <div style={{ width: '90%', height: '100%', border: '1px #C1C1C1 solid' }}>
                    <div style={{ position: 'absolute', display: 'flex' }}>
                        <div
                            className={`ml-8 p-2 px-4 cursor-pointer border-[1px] ${isActive('export')}`}
                            style={{ width: 'fit-content', borderRadius: '8px', zIndex: 1, marginTop: '-24px', background: 'white' }}
                            onClick={() => toggleTab('export')}
                        >
                            Export Product
                        </div>
                        <div
                            className={`ml-8 p-2 px-4 cursor-pointer border-[1px] ${isActive('import')}`}
                            style={{ width: 'fit-content', borderRadius: '8px', zIndex: 1, marginTop: '-24px', background: 'white' }}
                            onClick={() => toggleTab('import')}
                        >
                            Import Product
                        </div>
                    </div>
                    <div className="py-12 px-8">
                        <div className="flex flex-row flex-wrap">
                        <div className=" flex justify-center flex-wrap items-center space-x-2 bg-[#F6F6F6] py-2 px-4 rounded-lg " style={{ width: 'fit-content' }}>
                            {letters.map((letter, index) => (
                                <React.Fragment key={letter}>
                                    <div className={`cursor-pointer ${index > 0 && 'border-l-2 border-gray-300'} px-2`}>
                                        {letter}
                                    </div>
                                </React.Fragment>
                            ))}
                            
                        </div>
                        <div className="bg-[#F6F6F6] rounded-lg px-4 py-2 ml-4" style={{}}>0-9</div>
                        </div>
                        <div className="flex mt-8 flex-row flex-wrap">
                            {itemsList.map((x: any) => (
                                <div className=" flex pl-8 items-center m-2 min-w-[280px] max-w-[311px] h-[45px] bg-[#F9F9F9] " style={{ borderRadius: '8px', fontFamily: 'Poppins', fontSize: '16px', fontWeight: '400' }}>{x}</div>
                            ))}
                        </div>

                    </div>

                </div>
                <div className="w-[90%] flex mt-12 mb-12  ">
            
            <ListPagination 
              currentPage={1}
              totalPages={18}
              onPageChange={handlePageChange} />
        </div>
        </div>
            
            
        </>
    );
};

export default ProductList;
