
import React from 'react';

const Menu = () => {
  return (
    <div className="bg-gray-200 p-10 rounded shadow mr-4 font-bold gap-y-30">
      <h2 className="text-3xl font-bold mb-4 text-red-700">Menu</h2>
      <ul >
        <li className='my-3'>
          <a href="#dashboard">Dashboard</a>
        </li>
        <li className='my-3'>
          <a href="#ui-elements">UI Elements</a>
        </li>
        <li className='my-3'>
          <a href="#components">Components</a>
        </li>
        <li className='my-3'>
          <a href="#forms">Forms Stuff</a>
        </li>
        <li className='my-3'>
          <a href="#data-table">Data Table</a>
        </li>
        <li className='my-3'>
          <a href="#icons">Icons</a>
        </li>
        <li className='my-3'>
          <a href="#sample-page">Sample Page</a>
        </li>
        <li className='my-3'>
          <a href="#extra">Extra</a>
        </li >
        <li>
          <button className="bg-blue-500 text-white p-2 rounded mt-4">Add Project</button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
