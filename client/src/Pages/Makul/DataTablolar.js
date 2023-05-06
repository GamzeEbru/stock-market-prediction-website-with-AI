import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Pagination from "../../components/Pagination/Pagination";
import Footer from '../HomePage/Footer';


function DataTablolar() {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  axios.get('http://localhost:3002/tables')
    .then(response => {
      const newData = response.data.map(table => {
        const tableName = table.tableName.replace('tbl_', '').toUpperCase();
        return { tableName, lastValue: table.lastValue };
      });
      setTableData(newData);
    })
    .catch(error => console.error(error));
}, []);

const handleTableRowClick = (tableName) => {
  navigate(`/tables/${tableName.toLowerCase()}`);
}

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =  tableData.slice(firstPostIndex, lastPostIndex);

  return (
    <>
    <Navbar/>  
    <div className="container mx-auto px-4 sm:px-8 pt-28">
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-24">
      <div className="pb-4 bg-white">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule ="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500
             focus:border-blue-500 "
            placeholder="Search for items"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Makul İsim
            </th>
            <th scope="col" className="px-6 py-3">
              Anlık Değer
            </th>
            <th scope="col" className="px-6 py-3">
                Details
            </th>
        
          </tr>
        </thead>

        <tbody>

        {currentPosts.map((item, index) => (
            <tr
              key={index}
              onClick={() => handleTableRowClick(item.tableName)} 
              className="bg-white border-b hover:bg-gray-50 "
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {item.tableName}
              </td>
              <td className="px-6 py-4">{item.lastValue}</td>
            </tr>
          ))}

        </tbody>
      </table>
      <div className="mt-2 mb-6 "> 
          <Pagination
           totalPosts={tableData.length}
           postsPerPage={postsPerPage}
           setCurrentPage={setCurrentPage}
           currentPage={currentPage}
           />
          
          </div> 
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default DataTablolar