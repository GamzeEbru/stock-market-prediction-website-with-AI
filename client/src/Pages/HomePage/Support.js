import React from "react";
import supportImg from "../../assets/banner.png";
import { NavLink } from "react-router-dom";
const Support = () => {
  return (
    <div name="support" className="w-full h-[700px]">
      <div className="w-full bg-gray-700 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          {/* <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              {/* <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" /> */}
              <h3 className="font-bold text-2xl my-6">Tahmin Yöntemleri</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8 ">
              <svg
                className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <h3 className="font-bold text-2xl my-6">
                Grafik Destekli Tahminler
              </h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
            
              <h3 className="font-bold text-2xl my-6">Üyelik sistemi</h3>
              <p className="text-gray-600 text-xl">
                Sisteme üye olarak takip ettiğiniz değerlere daha kolay
                ulaşabilir ve tek bir ekranda tüm değerleri takip edebilirsiniz.
                Üye olmak için{" "}
                <b>
                  {" "}
                  <NavLink to="/signIn">buraya</NavLink>{" "}
                </b>{" "}
                tıklayabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Support;
