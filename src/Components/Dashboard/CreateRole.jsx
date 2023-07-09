// Form.js

import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [add_time_table, setAdd_time_table] = useState(false);
  const [upload_status, setUpload_status] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make an API call to the server to save the form data
    // fetch('/api/formdata', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ name, address }),
    // })
    //   .then((response) => response.text())
    //   .then((data) => {
    //     console.log(data); // Display the response from the server
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    // // Reset the form fields
    // setName('');
    // setAddress('');

    console.log(name, address);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
        <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <section className="sm:mx-4 md:mx-4" style={{ width: "24rem" }}>
            <h1 className="text-center text-black font-[6rem] font-bold font-800">
              {" "}
              Create Role
            </h1>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className=" text-center rounded-lg m-2 p bg-gray-200"
                placeholder="Enter the role name here ..."
                value={name}
                style={{ margin: "3px 10px" }}
                onChange={(e) => setName(e.target.value)}
              />
              <br />

              <label className="flex mt-4 ml-6 p-4">
                <input
                  type="checkbox"
                  className="text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={add_time_table}
                  onChange={(e) => setAdd_time_table(e.target.checked)}
                />
                <span style={{ margin: "-13px 15px" }}>Add TimeTable</span>
              </label>

              <br />

              <label className="flex ml-6 px-4">
                <input
                  id="red-checkbox"
                  type="checkbox"
                  className="text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={upload_status}
                  onChange={(e) => setUpload_status(e.target.checked)}
                />{" "}
                <span style={{ margin: "-13px 15px" }}> Upload Status </span>
              </label>

              <br />
              <button
                type="submit"
                style={{
                  background: "#E83678",
                  color: "white",
                }}
              >
                Submit
              </button>
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

export default Form;
