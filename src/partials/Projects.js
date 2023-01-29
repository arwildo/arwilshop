import React, { Component } from 'react';

// Get projects data
let database = require('../db.json');
database = database.data;


class Projects extends Component {

  render() {

    let projectList = database.map(item => {

      return(
        <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col" key={item.title} data-aos="fade-up" data-aos-delay="250">

          <div className="group relative">
            <img src={require("../images/" + item.img)} className="h-60 rounded-md shadow" alt={item.title} />
            <div className="absolute bg-black rounded hover:bg-opacity-25 bg-opacity-0 w-full h-full top-0 flex transition duration-500 ease-in-out">

              <div className="m-auto grid">
                <a href={item.shopee} className="shadow w-48 h-12 m-2 bg-white hover:bg-blue-500 btn-sm hover:text-white text-blue-500 dark:bg-gray-800 dark:text-blue-500 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition" target="_blank" rel="noopener noreferrer">
                  Shopee <img src={require("../images/shopee-logo.png")} className="h-10 mx-2" alt="Shopee Link" />
                </a>

                <a href={item.tokopedia} className="shadow w-48 h-12 m-2 bg-white hover:bg-blue-500 btn-sm text-blue-500 hover:text-white dark:bg-gray-800 dark:text-blue-500 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition" target="_blank" rel="noopener noreferrer">
                  Tokopedia <img src={require("../images/tokopedia-logo.png")} className="h-10 mx-2" alt="Tokopedia Link" />
                </a>
              </div>

            </div>
          </div>

          <div className="p-5">
            <div className="flex">
              <span className="font-bold text-gray-800 text-xl">{item.title}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-gray-600 font-light">
                {item.desc} Dapatkan di  
              </div>
            </div>
            <div class="text-center">
              <a href={item.shopee} className="shadow w-48 h-12 m-2 bg-white hover:bg-blue-500 btn-sm hover:text-white text-blue-500 dark:bg-gray-800 dark:text-blue-500 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition" target="_blank" rel="noopener noreferrer">
                Shopee <img src={require("../images/shopee-logo.png")} className="h-10 mx-2" alt="Shopee Link" />
              </a>
                <a href={item.tokopedia} className="shadow w-48 h-12 m-2 bg-white hover:bg-blue-500 btn-sm text-blue-500 hover:text-white dark:bg-gray-800 dark:text-blue-500 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition" target="_blank" rel="noopener noreferrer">
                  Tokopedia <img src={require("../images/tokopedia-logo.png")} className="h-10 mx-2" alt="Tokopedia Link" />
                </a>
            </div>
          </div>

        </div>
      )
    })

    return (
      <section className="relative">

        {/* Illustration behind content */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 pointer-events-none -mb-32" aria-hidden="true">
          <svg width="1760" height="1018" viewBox="0 0 1760 1018" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
              <circle cx="1360" cy="158" r="110" />
              <circle cx="338" cy="658" r="60" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

              <main className="w-full overflow-y-auto">
                <div className="px-6 grid grid-cols-4 lg:grid-cols-2 gap-8 lg:gap-16 overflow-hidden">

                { projectList }

                </div>
              </main>

          </div>
        </div>

      </section>
    )
  }
}

export default Projects;
