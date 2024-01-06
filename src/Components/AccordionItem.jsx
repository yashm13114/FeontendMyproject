
import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl">
      <div onClick={handleToggle} className="w-full p-4 text-left cursor-pointer">
        <div className="flex items-center justify-between">
          <span className="tracking-wide">{title}</span>
          <span className={`transition-transform duration-500 transform fill-current ${isOpen ? '-rotate-180' : ''}`}>
            <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </div>
      </div>

      <div style={{ maxHeight: isOpen ? '100%' : '0' }} className="relative overflow-hidden transition-all duration-700 max-h-0">
        <div className="px-6 pb-4 text-gray-600">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
