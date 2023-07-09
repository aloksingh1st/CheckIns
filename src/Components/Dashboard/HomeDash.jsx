import React from "react";


const HomeDash = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto mt-4 lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Start Managing your schedule with{" "}
              <span style={{ color: "#E83678" }}>Checkin's</span>
            </h1>

            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              style={{ background: "#E83678" }}
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div
            className="hidden md:mt-[-6rem] lg:mt-[-6rem] lg:col-span-5 lg:flex"
            style={{ marginTop: "-6rem" }}
          >
            {/* https://assets10.lottiefiles.com/packages/lf20_wpr8vxxt.json */}
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_wpr8vxxt.json"
              background="transparent"
              speed="1"
              loop
              autoplay="true"
            ></lottie-player>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeDash;
