// components/Card.tsx
import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc: any ;
  text: string;
  heading: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, text, heading }) => {
  return (
    <div className="max-w-sm w-full bg-white border-2 border-gray-300 p-6  shadow-lg">
      <Image className="w-full h-32 object-cover mb-6" 
      src={imageSrc} 
      alt="Card Image" 
      placeholder="empty"/>
      <h2 className="text-2xl mb-2 text-black font-semibold uppercase leading-6 font-poppins">
        {heading}
      </h2>
      <p className="text-left text-gray-600 text-base leading-6 font-normal font-poppins mb-2">{text}</p>
    </div>
  );
};

export default Card;
