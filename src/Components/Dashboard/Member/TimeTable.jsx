import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeTable = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [newSelectedDate, setNewSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleNewDateChange = (date) => {
    setNewSelectedDate(date);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
        <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <section className="sm:mx-4 md:mx-4" style={{ width: "26rem" }}>
              <form action="">
            <div
              className="flex flex-col"
              style={{ width: "2rem", zIndex: "-1" }}
            >


              <span className="font-bold mx-4">Start:</span>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="m-4"
                showTimeSelect
                placeholderText="Enter start time"
                dateFormat="Pp"
              />

              <span className="font-bold mx-4">End:</span>
              <DatePicker
                selected={newSelectedDate}
                onChange={handleNewDateChange}
                className="m-4"
                showTimeSelect
                placeholderText="Enter End time"
                dateFormat="Pp"
              />
            </div>

            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                Message :
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 mx-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="title"
                required
              />
            </div>

            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Additional:
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 mx-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Aditional .."
                required
              />
            </div>


            <div class="mb-6">
              <button
                type="submit"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 mx-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                style={{
                    background: "#E83678",
                    color: "white",
                  }}
              >Submit</button>
            </div>
                </form>
          </section>
          <div className="hidden" style={{ marginTop: "-6rem" }}>
            <img className="hidden z" src="./landings.svg" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default TimeTable;
