import React from 'react';
import Graph from './Graph';
import Menu from './Menu';
import Table from './Table';

const Dashboard = () => {
  return (
    <div className="flex p-4">
      <Menu />
      <div className="flex-grow">
        <a className="text-3xl font-bold font-serif mb-4 p-1 text-center text-red-700 underline mx-[40%]">Dashboard</a>
        <div className="w-100 mt-5">
          <Graph />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
