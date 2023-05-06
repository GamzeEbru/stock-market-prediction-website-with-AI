import React from "react";
import supportImg from "../../assets/banner.png";


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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
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
              <h3 className="font-bold text-2xl my-6">Tahmin Yöntemleri</h3>
              <p className="text-gray-600 text-xl">
             <li> Yenilikçi yapay zeka eğitim modellerimizle finansal piyasalardaki geleceğe dair tahminleri öngörmek için gelişmiş algoritmalar kullanıyoruz.</li>
             {/* <li>İleri düzey tahmin yöntemlerimiz, verilerin analizini ve trendleri tanımlamayı sağlayan derin öğrenme tekniklerini kullanır.</li> */}
            <li>Karmaşık finansal verileri anlamak için bilgisayar biliminden ve istatistiksel modellerden yararlanarak, kesinlikle veriye dayalı tahminler sunuyoruz.</li>
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
                <li>Web sitemizde grafik destekli tahminler sunarak, görsel olarak finansal piyasaların geleceğini daha iyi anlamanızı sağlıyoruz.</li>
                <li>Grafiklerimiz, kullanıcı dostu arayüzü sayesinde kolayca gezinmenizi ve finansal piyasaların karmaşıklığını anlamanızı sağlar.</li>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
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
              <h3 className="font-bold text-2xl my-6">Üyelik sistemi</h3>
              <p className="text-gray-600 text-xl">
                <li>Üyelik avantajları arasında öncelikli erişim, güncel haberler ve düzenli güncellenen tahminler bulunmaktadır.</li>
                <li>Üyelerimize özel olarak tasarlanmış analiz ve raporlar sunuyoruz, böylece finansal kararlarınızı daha bilinçli bir şekilde verebilirsiniz.</li>
                {/* Üye olmak için{" "}
                <b>
                  {" "}
                  <NavLink to="/signIn">buraya</NavLink>{" "}
                </b>{" "} */}
                {/* tıklayabilirsiniz. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Support;
