import React from 'react';

const SearchComponent = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Replace below with your existing glowing search bar HTML */}
      <input
        type="text"
        placeholder="Search..."
        className="bg-black border-none w-[301px] h-[56px] rounded-lg text-white px-4 text-lg placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
};

export default SearchComponent;
