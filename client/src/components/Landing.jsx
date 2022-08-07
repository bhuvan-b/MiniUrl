import React from "react";

const Landing = () => {
  return (
    <div className="py-12 sm:my-8 px-6 xl:px-0 max-w-[1280px] mx-auto">
      <div className="container py-5 mx-auto">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 space-y-8 flex flex-col justify-center">
            <h2 className="text-[3rem] font-bold">
              Mini<span className="text-[#5658dd]">Url</span>
            </h2>
            <p className="text-[30px] lg:text-[45px] leading-[2.5rem] lg:leading-[3.5rem] text-white font-semibold mt-4 w-[100%] xl:w-[90%]">
              A free and easy-to-use tool to shorten your long urls
            </p>
            <a href="#shortenUrl">
              <button className="bg-[#6163ff] p-3 px-5 rounded-md font-semibold text-white w-max">
                Get Started
              </button>
            </a>
          </div>
          <div className="sm:w-1/2 sm:p-6 mt-10 sm:mt-0">
            <img
              src="https://d19fbfhz0hcvd2.cloudfront.net/PR/wp-content/uploads/2016/09/10_UsingURLShorteners-777x437.jpg"
              alt=""
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
