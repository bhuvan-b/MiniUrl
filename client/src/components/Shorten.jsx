import React from "react";
import "../styles/Shorten.css";
import copy from "copy-to-clipboard";
import { useState } from "react";

const Shorten = () => {
  const [srtUrl, setsrtUrl] = useState(null);

  return (
    <div className="py-10 my-4 max-w-[1280px] mx-auto">
      <div className="container py-5">
        <div className="space-y-10">
          <div className="">
            <h3 className="text-[2.8rem] text-center">
              Enter Your Long Url Here
            </h3>
          </div>
          <div className="space-x-2 text-center mt-3 pt-5 flex w-[70%] inputBox mx-auto">
            <div className="flex w-full">
              <input type="text" className="longInput w-full h-full px-3" />
            </div>
            <button className=" bg-[#6163ff] p-3 px-5 font-semibold text-white">
              Shorten
            </button>
          </div>
          <div className="w-[70%] mx-auto border p-6 rounded-md">
            <div></div>
            <div className="space-y-4 text-[1.2rem]">
              <p>
                <span className="font-bold">Short URL : </span>
                <a className="ml-2" href="">
                  https://localhost:5000/hFih2Ksas
                </a>
                <button
                  onClick={() => {
                    copy("https://localhost:5000/hFih2Ksas");
                  }}
                  className="ml-4 border text-[1rem] p-1 px-2 bg-white text-black rounded"
                >
                  Copy
                </button>
              </p>
              <p>
                <span className="font-bold">Long URL : </span>
                <a className="ml-3" href="">
                  https://www.facebook.com
                </a>
              </p>
              <p>
                <span className="font-bold">Click Count : </span>
                <a className="ml-2" href="">
                  12
                </a>
              </p>
              <p>
                <span className="font-bold">Created On : </span>
                <a className="ml-2" href="">
                  Aug 03 2022
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shorten;
