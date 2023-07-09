import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const JoinReq = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
        <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <section className="sm:mx-4 md:mx-4" style={{ width: "26rem" }}>
            <h1 className="text-center text-black font-[6rem] font-bold font-800">
              {" "}
              Join Requests
            </h1>
            <div className="list-container m-4">


              <div
                className=" flex border-2 md:w-[38rem] mb-4 p-2 rounded "
                style={{ justifyContent: "space-between" }}
              >
                <h2 className="font-bold p-2">Hello</h2>
                <div className="p-2">
                  <FontAwesomeIcon icon={faSquareCheck} className="w-6 mx-3" />
                  <FontAwesomeIcon icon={faDeleteLeft} />
                </div>

              </div>



              <div
                className=" flex border-2 md:w-[38rem] mb-4 p-2 rounded "
                style={{ justifyContent: "space-between" }}
              >
                <h2 className="font-bold p-2">Hello</h2>
                <div className="p-2">
                  <FontAwesomeIcon icon={faSquareCheck} className="w-6 mx-3" />
                  <FontAwesomeIcon icon={faDeleteLeft} />
                </div>

              </div>


              <div
                className=" flex border-2 md:w-[38rem] mb-4 p-2 rounded "
                style={{ justifyContent: "space-between" }}
              >
                <h2 className="font-bold p-2">Hello</h2>
                <div className="p-2">
                  <FontAwesomeIcon icon={faSquareCheck} className="w-6 mx-3" />
                  <FontAwesomeIcon icon={faDeleteLeft} />
                </div>
              </div>

            </div>
          </section>
          <div className="hidden" style={{ marginTop: "-6rem" }}>
            <img className="hidden z" src="./landings.svg" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinReq;
