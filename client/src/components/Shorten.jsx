import React from "react";
import copy from "copy-to-clipboard";
import { useState } from "react";
import axios from "axios";

const Shorten = () => {
  const [srtUrlData, setsrtUrlData] = useState(null);
  const [longUrl, setlongUrl] = useState("");
  const [copied, setcopied] = useState(false);

  const shortenFunc = () => {
    setcopied(false);
    axios({
      method: "post",
      url: "http://localhost:5000/api/genShortUrl",
      data: {
        longUrl: longUrl,
      },
    }).then((res) => {
      console.log(res);
      setsrtUrlData(res.data);
    });
  };

  return (
    <div className="py-12 my-6 max-w-[1280px] mx-auto" id="shortenUrl">
      <div className="container py-5">
        <div className="space-y-10">
          <div className="">
            <h3 className="text-[2.8rem] text-center">
              Enter Your Long Url Here
            </h3>
          </div>
          <div className="space-x-2 text-center mt-3 pt-5 flex w-[70%] inputBox mx-auto">
            <div className="flex w-full">
              <input
                type="text"
                className="longInput w-full h-full px-3"
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
            <div className="w-[70%] mx-auto border p-6 rounded-md">
              <div></div>
              <div className="space-y-4 text-[1.2rem]">
                <p>
                  <span className="font-bold">Short URL : </span>
                  <a
                    className="ml-2"
                    target={"_blank"}
                    href={srtUrlData.shortUrl}
                  >
                    {srtUrlData && srtUrlData.shortUrl}
                  </a>
                  <button
                    onClick={() => {
                      copy(srtUrlData.shortUrl);
                      setcopied(true);
                    }}
                    className="ml-4 border text-[1rem] p-1 px-2 bg-white text-black rounded"
                  >
                    {copied === false ? "Copy" : "Copied!"}
                  </button>
                </p>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Shorten;
