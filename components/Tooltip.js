import React from 'react';

const Tooltip = ({ content, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute z-10 hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded-md mt-2">
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
