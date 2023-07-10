import React, { useState } from "react";

const UpdateStatus = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmit = (event) => {

    setSelectedValue(event.target.value);

    event.preventDefault();

    fetch("https://your-endpoint-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the endpoint
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error(error);
      });
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
        <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <section className="sm:mx-4 md:mx-4" style={{ width: "26rem" }}>
              <button
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 mx-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={"Busy"}
                style={{
                  background: "#E83678",
                  color: "white",
                }}
                onClick={handleSubmit}
              >
                Busy
              </button>

              <button
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 mx-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={"Availaible"}
                style={{
                  background: "#E83678",
                  color: "white",
                }}
                onClick={handleSubmit}
              >
                Availaible
              </button>


              <button
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 mx-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={"Leave"}
                style={{
                  background: "#E83678",
                  color: "white",
                }}
                onClick={handleSubmit}
              >
                  Leave
              </button>

               <button
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 mx-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={"HalfDay"}
                style={{
                  background: "#E83678",
                  color: "white",
                }}
                onClick={handleSubmit}
              >
                Half Day
              </button>
          </section>
          <div className="hidden" style={{ marginTop: "-6rem" }}>
            <img className="hidden z" src="./landings.svg" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateStatus;
