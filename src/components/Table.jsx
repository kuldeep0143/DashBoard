
import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { FaTrash } from 'react-icons/fa';

const Table = () => {
  const [tableData, setTableData] = useState([
    { name: 'John Doe', age: 25 },
    { name: 'Jane Doe', age: 30 },
    { name: 'Bob Smith', age: 40 },
  ]);

  const [newRow, setNewRow] = useState({ name: '', age: '' });

  const handleInputChange = (e) => {
    setNewRow({ ...newRow, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (newRow.name && newRow.age && parseInt(newRow.age) > 0) {
      setTableData([...tableData, newRow]);
      setNewRow({ name: '', age: '' });
    } else {
      alert('Please enter valid data.');
    }
  };

  const handleDelete = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

  return (
    <div className="bg-white p-4 rounded shadow justify-center ">
      <h2 className="text-2xl font-bold mb-4 text-center underline text-red-800">Table</h2>
      <form className=''>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newRow.name}
          onChange={handleInputChange}
          className="mr-2 p-2"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newRow.age}
          onChange={handleInputChange}
          className="mr-2 p-2"
        />
        <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
          Add Row
        </button>
      </form>
      <table className="w-full mt-4 -mx-20">
        <thead>
          <tr>
            <th className="text-center">S. No</th>
            <th className="text-center">Name</th>
            <th className="text-center">Age</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{row.name}</td>
              <td className="text-center">{row.age}</td>
              <td className="text-center">
                <button onClick={() => handleDelete(index)} className="text-red-500">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;