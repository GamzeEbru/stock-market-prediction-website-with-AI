import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Navbar from "../../components/Navbar";
import Footer from "../HomePage/Footer";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";
import GrafikPiyasa from "./GrafikPiyasa";

const PiyasaDetails = (props) => {
  
  const tableName = window.location.pathname.split('/')[2];
  
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/piyasa/${tableName}`)
      .then((response) => setData(response.data.slice(1)))
      .catch((error) => console.log(error));
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =  data.slice(firstPostIndex, lastPostIndex);
  const realTableName = tableName.toUpperCase();
  return (
    <>
      <Navbar />
      
{/* GRAFİK */}
      <div className="bg-zinc-100 pt-28">
        <div className=" ml-8 p-8  ">
          <p className="font-bold hover:font-bold text-5xl text-stone-700">
          {tableName.toUpperCase()}
          </p>
          <div className="app mt-12 ml-8">
            <div className="row">
              <div className="mixed-chart">
                <GrafikPiyasa symbol={realTableName} />
                
              </div>
            </div>
          </div>
        </div>
 {/* TABLO */}
 <div>
 <p className="font-sans hover:font-bold text-3xl ml-8 p-8 text-stone-700">
          {tableName.toUpperCase()} HİSTORİCAL DATA
          </p>
 </div>
  <div className="container mx-auto px-4 sm:px-8 pt-24">
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-24">
      <div className="pb-4 bg-white dark:bg-gray-900">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500
             focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
             Tarih
            </th>
            <th scope="col" className="px-6 py-3">
              Şimdi
            </th>
            <th scope="col" className="px-6 py-3">
                Açılış
            </th>
            <th scope="col" className="px-6 py-3">
            Yüksek
            </th>
        
            <th scope="col" className="px-6 py-3">
            Düşük
            </th>
        
        
          </tr>
        </thead>

        <tbody>

        {currentPosts.map((row, index) => (
            <tr
              key={index}
              
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {row.Tarih}
              </td>
              <td className="px-6 py-4">{row.Şimdi}</td>
              <td className="px-6 py-4">{row.Açılış}</td>
              <td className="px-6 py-4">{row.Yüksek}</td>
              <td className="px-6 py-4">{row.Düşük}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2 mb-6 "> 
          <Pagination
           totalPosts={data.length}
           postsPerPage={postsPerPage}
           setCurrentPage={setCurrentPage}
           currentPage={currentPage}
           />
          
          </div> 

      
    </div>
    </div>
          <div>
          <Footer />
          </div>
      </div>
   
    
      
    </>
  );
};

export default PiyasaDetails;
