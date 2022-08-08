import React from "react";
import copy from "copy-to-clipboard";
import { useState } from "react";
import axios from "axios";
import QRCode from "react-qr-code";

const Shorten = () => {
  const [srtUrlData, setsrtUrlData] = useState(null);
  const [longUrl, setlongUrl] = useState("");
  const [copied, setcopied] = useState(false);

  const shortenFunc = () => {
    setcopied(false);
    axios({
      method: "post",
      url: "https://miniiurl.herokuapp.com/api/genShortUrl",
      data: {
        longUrl: longUrl,
      },
    }).then((res) => {
      // console.log(res);
      setsrtUrlData(res.data);
    });
  };

  return (
    <div className="py-12 sm:my-6  max-w-[1280px] mx-auto" id="shortenUrl">
      <div className="container py-5 mx-auto">
        <div className="space-y-10">
          <div className="">
            <h3 className="text-[2.5rem] px-2 leading-[3.25rem] sm:text-[2.8rem] text-center">
              Enter Your Long Url Here
            </h3>
          </div>
          <div className="space-x-2 text-center mt-3 sm:pt-5 flex w-[90%] lg:w-[70%] inputBox mx-auto">
            <div className="flex w-full">
              <input
                type="text"
                className="bg-[#3b3b3b] border-2  focus:border-white longInput w-full h-full px-3"
                value={longUrl}
                onChange={(e) => {
                  setlongUrl(e.target.value);
                }}
              />
            </div>
            <button
              className="bg-[#6163ff] p-3 px-5 font-semibold text-white"
              onClick={shortenFunc}
            >
              Shorten
            </button>
          </div>
          {srtUrlData && (
            <div className="flex flex-col-reverse lg:flex-row w-[90%] lg:w-[90%] xl:w-[70%] sm:space-x-4 mx-auto border sm:p-6 p-3 py-4 rounded-md">
              {/* <div className="p-2 rounded bg-white w-fit">
                <QRCode value={srtUrlData.shortUrl} size={200} level={"L"} />
              </div> */}
              <div
                style={{
                  height: "auto",
                  margin: "0 auto",
                  maxWidth: 225,
                  width: "100%",
                }}
                className="p-2 bg-white rounded"
              >
                <QRCode
                  size={256}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  value={srtUrlData.shortUrl}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <div className="lg:overflow-hidden lg:flex mb-6 lg:mb-0">
                <div className=" my-auto space-y-4 xl:space-y-6 text-[1rem] sm:text-[1.2rem] ">
                  <div className="flex items-center">
                    <p className="truncate">
                      <span className="font-bold">Short URL : </span>
                      <a
                        className="ml-2"
                        target={"_blank"}
                        href={srtUrlData.shortUrl}
                      >
                        {srtUrlData && srtUrlData.shortUrl}
                      </a>
                    </p>
                    <button
                      onClick={() => {
                        copy(srtUrlData.shortUrl);
                        setcopied(true);
                      }}
                      className="ml-4 -mt-2 border text-[0.8rem] sm:text-[1rem] p-1 px-2 bg-white text-black rounded"
                    >
                      {copied === false ? "Copy" : "Copied!"}
                    </button>
                  </div>
                  <p className="truncate">
                    <span className="font-bold">Long URL : </span>
                    <a
                      className="ml-3"
                      href={srtUrlData.longUrl}
                      target={"_blank"}
                    >
                      {srtUrlData && srtUrlData.longUrl}
                    </a>
                  </p>
                  <p>
                    <span className="font-bold">Click Count : </span>
                    <a className="ml-2" href="">
                      {srtUrlData && srtUrlData.count}
                    </a>
                  </p>
                  <p>
                    <span className="font-bold">Created On : </span>
                    <a className="ml-2" href="">
                      {srtUrlData && srtUrlData.date.slice(4, 15)}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shorten;
