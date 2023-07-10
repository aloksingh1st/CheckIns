import React, { useState } from "react";

const UpdateStatus = () => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      fetch('https://your-endpoint-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ selectedValue })
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the endpoint
          console.log(data);
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error(error);
        });
    };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
        <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <section className="sm:mx-4 md:mx-4" style={{ width: "26rem" }}>
            <form onSubmit={handleSubmit}>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                value={selectedValue} onChange={handleDropdownChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 m-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a status</option>
                <option value="US">Busy</option>
                <option value="CA">Availaible</option>
                <option value="FR">Leave</option>
                <option value="DE">Half Day</option>
              </select>

              <div class="mb-6">
                <button
                  type="submit"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 mx-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  style={{
                    background: "#E83678",
                    color: "white",
                  }}
                >
                  Submit
                </button>
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

export default UpdateStatus;
