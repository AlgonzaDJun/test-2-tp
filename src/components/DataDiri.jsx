import Motif from "../assets/motif.png";
import QR from "../assets/qr.png";
import "flowbite";

import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { formatRupiah } from "../utils/function";

const DataDiri = ({ data }) => {
  // console.log(data);
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${Motif})`,
        backgroundSize: "cover",
      }}
      className="px-5 py-7"
    >
      <div className="py-3 px-5 rounded-lg bg-white shadow-md text-sm">
        <p className="font-light mb-2">{data ? data.greeting : "Good...."}</p>
        <p className="font-semibold">{data ? data.name : "nama anda"}</p>

        {/* QR SALDO POINT */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <div
              className="rounded-full shadow-lg p-2 cursor-pointer"
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
            >
              <img
                src={data ? data.qrcode : QR}
                alt="qr code"
                className="w-10 h-10"
              />
            </div>
            <div className="w-2 h-7 border-dotted border-l-2 ml-4 mr-3"></div>
            <div className="text-left">
              <p className=" text-sm">Saldo</p>
              <p className=" text-sm">Points</p>
            </div>
          </div>
          <div className="text-end">
            <p className="font-semibold text-sm">
              {data ? formatRupiah(data.saldo) : "Rp 279.000"}
            </p>
            <p className="font-semibold text-techno-hijau text-sm">
              {data ? data.point : "2.500"}
            </p>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 min-h-screen">
            <div className="flex items-center justify-between p-4 md:p-5 ">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-center mt-20">
                Show the QR bellow to the cashier
              </p>

              <div className="flex justify-center">
                <img src={data ? data.qrcode : QR} alt="qr code" className="w-60 h-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END MODAL */}
    </div>
  );
};

export default DataDiri;
