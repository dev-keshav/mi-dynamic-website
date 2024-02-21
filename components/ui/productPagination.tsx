import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

export const ListPagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
    <div className="flex flex-wrap items-center space-x-2 bg-[#F6F6F6] px-4  shadow" style={{width:'auto'}}>
      {pageNumbers.map((number, index) => (
        <div className={`cursor-pointer  ${index > 0 && 'border-l-2 border-gray-300'} px-2`}>
          {number}
        </div>
      ))}
      </div>
      <button
        className="px-4  ml-4 py-2 font-semibold bg-[#F6F6F6]  hover:bg-gray-100"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next »
      </button>
    
    </>
  );
};












{/* import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

export const ListPagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center  flex-wrap space-x-1">
      {pageNumbers.map(number => (
        <button
          key={number}
          className={`px-3 py-1 mt-2 rounded-full ${
            currentPage === number ? 'bg-gray-200' : 'bg-white'
          } border hover:bg-gray-100`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="px-3 py-1 mt-2 font-semibold rounded-full bg-white border hover:bg-gray-100"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next »
      </button>
    </div>
  );
};*/}