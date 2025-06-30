import React from 'react';
import { Link } from 'react-router-dom';

interface SubItem {
  name: string;
  path: string;
}

interface DropdownMenuProps {
  subItems: SubItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ subItems }) => {
  return (
    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="py-1">
        {subItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu; 