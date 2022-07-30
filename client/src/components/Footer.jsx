import React from "react";

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between max-w-[1280px] mx-auto">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
          <h2 className="text-[1.75rem] font-bold">
            Mini<span className="text-[#5658dd]">Url</span>
          </h2>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-md text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Shorten Url
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Features
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Login
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="/" class="hover:underline">
          MiniUrl
        </a>
        . Made with ❤️ by Bhuvan Bokka
      </span>
    </footer>
  );
};

export default Footer;
